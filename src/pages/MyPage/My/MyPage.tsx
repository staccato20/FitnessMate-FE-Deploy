import { useEffect, useState } from "react"

import EmptyRoutine from "@components/EmptyRoutine/EmptyRoutine"
import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"
import Title from "@components/Title/Title"

import { useGetFetchRecentData } from "@hooks/query/useGetFetchRecentBodyData"
import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"
import { useUserInfo } from "@hooks/query/useUserInfo"

import DragAndDrop from "./DragAndDrop"
import * as S from "./StyledMyPage"

const MyPage = () => {
  const { userInfo } = useUserInfo()
  const userName = userInfo ? userInfo.userName : undefined

  const { bodyDatas } = useGetFetchRecentData()
  const [bodyFigure, setBodyFigure] = useState<string | null>()

  const { data: myRoutines = [] } = useGetMyRoutines()
  const isRoutine = Array.isArray(myRoutines) && myRoutines.length > 0
  const [myRoutineLength, setMyRoutineLength] = useState<number>(0)
  const [btnActive, setBtnActive] = useState<number>(0)

  const [selectedRoutineId, setSelectedRoutineId] = useState<number | null>(
    null,
  )

  const fetchData = async () => {
    try {
      if (isRoutine) {
        setSelectedRoutineId(myRoutines[0].routineId)
        setBtnActive(myRoutines[0].routineIndex)
        setBodyFigure(bodyDatas?.bodyFigure)
        console.log(bodyDatas?.bodyFigure)
        setMyRoutineLength(myRoutines.length)
      } else {
      }
    } catch (error) {}
  }

  useEffect(() => {
    if (isRoutine) {
      fetchData()
    }
  }, [myRoutines])

  return (
    <>
      <S.MypageBackground />
      <S.MypageContainer>
        <S.MypageHomeArea>
          <S.MypageTopContainer>
            <Title variant="midC">
              <Title.SubTopIconTitle>내 루틴</Title.SubTopIconTitle>
            </Title>
            <S.MyInformation>
              <Title variant="midE">
                <Title.SubTopIconTitle>
                  {userName}
                  <S.FixIconButtonWrapper>
                    <IconButton
                      icon="RightArrowGrey"
                      size={24}
                    />
                  </S.FixIconButtonWrapper>
                </Title.SubTopIconTitle>
                <S.MyBodyInfotmation>
                  <Title.SubBottomTitleContent>
                    체형
                    <Title.SubBottomTitle>{bodyFigure}</Title.SubBottomTitle>
                  </Title.SubBottomTitleContent>
                  <Icon
                    icon="CircleSeparation"
                    size={3}
                  />
                  <Title.SubBottomTitleContent>
                    분할
                    <Title.SubBottomTitle>
                      {myRoutineLength}분할
                    </Title.SubBottomTitle>
                  </Title.SubBottomTitleContent>
                </S.MyBodyInfotmation>
              </Title>
            </S.MyInformation>
            <S.RoutinesContainer>
              {isRoutine ? (
                <div className="lengthRoutineContainer">
                  <button className="addRoutineButton"></button>
                  {myRoutines?.map((routine) => (
                    <button
                      key={routine.routineId}
                      id={routine.routineId.toString()}
                      value={routine.routineIndex}
                      className={`routineArea ${typeof routine.routineIndex === "number" && routine.routineIndex === btnActive ? "active" : ""}`}>
                      <p className="routineName">{routine.routineName}</p>
                    </button>
                  ))}
                </div>
              ) : (
                <EmptyRoutine />
              )}
            </S.RoutinesContainer>
          </S.MypageTopContainer>
          <DragAndDrop selectedRoutineId={selectedRoutineId} />
        </S.MypageHomeArea>
      </S.MypageContainer>
    </>
  )
}

export default MyPage
