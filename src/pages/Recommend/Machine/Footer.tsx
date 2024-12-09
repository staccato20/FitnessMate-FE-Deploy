import { useNavigate } from "react-router-dom"
import { BeatLoader } from "react-spinners"

import { useRecommendStore } from "@store/store"

import { UseMutationResult } from "@tanstack/react-query"

import Bottom from "@components/Bottom/Bottom"
import RoundButton from "@components/Button/RoundButton"

import { MachineList } from "@typpes/type"
import { PostRecommendResponse } from "@typpes/type"

import { usePostRecommendId } from "@hooks/mutation/usePostRecommendId"

interface FooterProps {
  machinesById: Set<number>
  postRecommend: UseMutationResult<
    PostRecommendResponse,
    Error,
    number,
    unknown
  >
  machines: MachineList[]
}

const Footer = ({ machinesById, postRecommend, machines }: FooterProps) => {
  const navigate = useNavigate()

  const numChecked = machinesById.size

  const { bodyPart } = useRecommendStore()
  const postRecommendId = usePostRecommendId()

  const { setResult } = useRecommendStore()

  const handleRecommend = () => {
    if (postRecommend.isPending) {
      return
    }
    const payload = {
      bodyPartKoreanName: bodyPart,
      machineKoreanName:
        numChecked > 0
          ? [...machinesById].map((id) => machines[id].koreanName)
          : [...machines].map(({ koreanName }) => koreanName),
    }

    postRecommendId(payload, {
      onSuccess: (workoutRecommendationId) => {
        postRecommend.mutate(workoutRecommendationId, {
          onSuccess: (result) => {
            const seenWorkoutIds = new Set()

            result.recommends = result.recommends.filter((recommend) => {
              if (seenWorkoutIds.has(recommend.workoutId)) {
                return false
              } else {
                seenWorkoutIds.add(recommend.workoutId)
                return true
              }
            })

            setResult(result)
            navigate("/recommend/result")
          },
        })
      },
    })
  }

  return (
    <Bottom flex="space-between">
      <Bottom.Text>
        {numChecked}개<Bottom.SubText> 기구 선택됨</Bottom.SubText>
      </Bottom.Text>
      {numChecked > 0 ? (
        <RoundButton
          onClick={handleRecommend}
          variant="blue"
          rightIcon="RightArrowWhite"
          size="big"
          isPending={postRecommend.isPending}>
          {postRecommend.isPending ? (
            <BeatLoader
              size="7"
              color="#DDEAF4"
              margin={6}
            />
          ) : (
            "추천 시작하기"
          )}
        </RoundButton>
      ) : (
        <RoundButton
          onClick={handleRecommend}
          variant="black"
          rightIcon="RightArrowWhite"
          size="big"
          isPending={postRecommend.isPending}>
          {postRecommend.isPending ? (
            <BeatLoader
              size="7"
              color="#DDEAF4"
              margin={6}
            />
          ) : (
            "기구 선택 없이 추천 받기"
          )}
        </RoundButton>
      )}
    </Bottom>
  )
}

export default Footer
