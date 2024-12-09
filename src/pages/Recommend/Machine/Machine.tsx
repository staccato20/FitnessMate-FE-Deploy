import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useAnimationFrame, useMotionValue, useTransform } from "framer-motion"

import IconButton from "@components/IconButton/IconButton"
import ProgressBar from "@components/Progressbar/ProgressBar"

import Footer from "@pages/Recommend/Machine/Footer"
import List from "@pages/Recommend/Machine/List"
import { BackOverlay } from "@pages/Search/StyledSearch"

import { usePostRecommend } from "@hooks/mutation/usePostRecommend"
import { useGetMachineList } from "@hooks/query/useGetMachineList"
import { useScroll } from "@hooks/useScroll"

import { animation } from "@styles/theme"

import * as S from "../StyledRecommend"

const Machine = () => {
  const navigate = useNavigate()

  const [machinesById, setMachinesById] = useState(new Set<number>())
  const scrollRef = useRef<HTMLDivElement>(null)
  const { data: machines = [] } = useGetMachineList()
  const postRecommend = usePostRecommend()
  const { isScrollTop } = useScroll(scrollRef)

  const time = useMotionValue(0)
  const rotate = useTransform(time, [0, 6000], [0, 360], { clamp: false })
  const scale = useTransform(time, [0, 3000, 6000], [1, 1.2, 1], {
    clamp: true,
  })

  useAnimationFrame(() => {
    if (time.get() >= 6000) {
      time.set(0)
    } else {
      time.set(time.get() + 16)
    }
  })

  const updateSet = (set: Set<number>, id: number) => {
    const updatedSet = new Set(set)
    void (updatedSet.has(id) ? updatedSet.delete(id) : updatedSet.add(id))
    return updatedSet
  }

  const handleBodyPart = (id: number) => {
    setMachinesById((prevSet) => updateSet(prevSet, id))
  }

  const handleBackPage = () => {
    navigate(-1)
  }

  return (
    <>
      {postRecommend.isPending && (
        <>
          <BackOverlay />
          <S.LayerWrapper>
            <S.CoverWrapper
              initial={{ x: "-50%", y: "-50%", opacity: 0, scale: 0.8 }}
              animate={{
                x: "-50%",
                y: "-50%",
                opacity: 1,
                scale: 1,
              }}
              transition={animation.slow}
              style={{ rotate, scale }}
            />
            <S.LoadingText
              initial={{ x: "-50%", y: "-50%", opacity: 0, scale: 0.8 }}
              animate={{
                x: "-50%",
                y: "-50%",
                opacity: 1,
                scale: 1,
              }}
              transition={animation.slow}>
              추천을 위한
              <br /> 분석을 시작했어요
            </S.LoadingText>
          </S.LayerWrapper>
        </>
      )}

      <S.RecommendWrapper>
        <S.Status $isScrollTop={isScrollTop}>
          <IconButton
            icon="LeftArrowBold"
            size={30}
            onClick={handleBackPage}
          />
          <ProgressBar
            progress={2}
            variant="round"
          />
        </S.Status>
        <List
          isScrollTop={isScrollTop}
          scrollRef={scrollRef}
          machines={machines}
          machinesById={machinesById}
          handleBodyPart={handleBodyPart}
        />
      </S.RecommendWrapper>
      <Footer
        machinesById={machinesById}
        postRecommend={postRecommend}
        machines={machines}
      />
    </>
  )
}

export default Machine
