// 내 운동 페이지
import { useEffect, useRef, useState } from "react"

import EmptyRoutine from "@components/EmptyRoutine/EmptyRoutine"

// user bodydata
import { useGetFetchRecentData } from "@hooks/query/useGetFetchRecentBodyData"
// my routines
import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"
// user name
import { useUserInfo } from "@hooks/query/useUserInfo"

import DragAndDrop from "./DragAndDrop"
// 루틴 더보기 모달
import OutSideClick from "./Modal/OutSideClick"
import * as S from "./StyledMyPage"

const MyPage = () => {
  // 유저 이름
  const { userInfo } = useUserInfo()
  const userName = userInfo ? userInfo.userName : undefined

  // 유저 body data
  const { bodyDatas } = useGetFetchRecentData()
  const [bodyFigure, setBodyFigure] = useState<string | null>()

  // 루틴 목록
  const { myRoutines } = useGetMyRoutines()
  // 루틴 목록 여부 확인
  const isRoutine = Array.isArray(myRoutines) && myRoutines.length < 0
  // 루틴 분할 길이
  const [myRoutineLength, setMyRoutineLength] = useState<number>(0)
  // 선택된 루틴
  const [btnActive, setBtnActive] = useState<number>(0)

  // 운동 리스트를 가져올 때 사용할 루틴 아이디
  const [selectedRoutineId, setSelectedRoutineId] = useState<number | null>(
    null,
  )

  // 기본 상태 세팅
  const fetchData = async () => {
    try {
      if (isRoutine) {
        setSelectedRoutineId(myRoutines[0].routineId) // 루틴 ID 설정
        setBtnActive(myRoutines[0].routineIndex)
        setBodyFigure(bodyDatas?.bodyFigure)
        setMyRoutineLength(myRoutines.length)
      } else {
      }
    } catch (error) {}
  }

  useEffect(() => {
    if (isRoutine) {
      fetchData()
    }
  }, [myRoutines]) // myRoutines가 변경될 때 fetchData 호출

  // 루틴 수정하기

  // 루틴 수정 여부
  const [isRoutineFix, setIsRoutineFix] = useState(false)
  // 특정 루틴 수정
  const [activeItemId, setActiveItemId] = useState(null)

  // isClicked를 통해 검색창 클릭 여부에 따라 스타일 다르게 함
  const [isClicked, setIsClicked] = useState(false)

  const [searchvalue, setSearchValue] = useState("루틴 이름")

  const inputRef = useRef(null) // ref 생성
  const inputButtonRef = useRef(null) // ref 생성
  const handleCloseInput = () => {
    setIsRoutineFix(false)
  }
  OutSideClick(inputButtonRef, handleCloseInput)

  const [isRoutineFixOpen, setIsRoutineFixOpen] = useState("")

  const modalRef = useRef(null)
  const handleClose = () => {
    setIsRoutineFixOpen("")
  }
  OutSideClick(modalRef, handleClose)

  return (
    <>
      <S.MypageBackground />
      <S.MypageContainer>
        <div className="MypageHomeArea">
          <S.MypageTopContainer>
            <span className="mypageTitle">내 루틴</span>
            <div className="mypageTopContent">
              <div className="myInformation">
                <div className="myTopInformation">
                  <p className="myName">{userName}</p>
                  <div className="myWorkout">
                    <span className="myWorkoutInformation">
                      체형: {bodyFigure}
                    </span>
                    •
                    <span className="myWorkoutInformation">
                      분할: {myRoutineLength}분할
                    </span>
                  </div>
                </div>
              </div>
              <S.RoutinesContainer>
                {isRoutine ? (
                  <div className="lengthRoutineContainer">
                    <button className="addRoutineButton"></button>
                    {/* 루틴 목록을 map으로 불러오되, .data 붙여가며 더 들어가지 말고 딱 이 정도에서 혹시 map이 없을 경우만 앞에 작성하여 대비하기 */}
                    {myRoutines?.map((routine) => (
                      <button
                        ref={inputButtonRef}
                        key={routine.routineId} // TypeScript는 key가 number 타입일 수 있지만, string으로 변환하는 것이 안전합니다.
                        id={routine.routineId.toString()} // routineId를 string으로 변환
                        value={routine.routineIndex} // 이 부분은 number 타입이어도 문제없습니다.
                        className={`routineArea ${typeof routine.routineIndex === "number" && routine.routineIndex === btnActive ? "active" : ""}`}>
                        {isRoutineFix && activeItemId === routine.routineId ? (
                          <S.inputContent
                            ref={inputRef} // ref를 입력 창에 연결
                            className="routineName"
                            value={searchvalue}
                            onFocus={() => {
                              setIsClicked(true)
                            }}
                            onBlur={() => {
                              setIsClicked(false)
                            }}
                            autoFocus
                          />
                        ) : (
                          <p className="routineName">{routine.routineName}</p>
                        )}
                        {/* 각 루틴별 더보기 이미지 fill 제어를 위해 svg 데리고옴 */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="fixThisRoutine">
                          <mask
                            id="mask0_7614_13918"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24">
                            <rect
                              width="24"
                              height="24"
                              fill="#D9D9D9"
                            />
                          </mask>
                          <g mask="url(#mask0_7614_13918)">
                            <path
                              className="svgFill"
                              d="M11.9978 18.469C11.6388 18.469 11.3333 18.3412 11.0813 18.0856C10.8292 17.8299 10.7031 17.5227 10.7031 17.1637C10.7031 16.8048 10.8309 16.4993 11.0866 16.2472C11.3422 15.9951 11.6495 15.8691 12.0084 15.8691C12.3673 15.8691 12.6729 15.9969 12.925 16.2525C13.177 16.5081 13.3031 16.8154 13.3031 17.1743C13.3031 17.5333 13.1753 17.8388 12.9196 18.0909C12.664 18.343 12.3567 18.469 11.9978 18.469ZM11.9978 13.2998C11.6388 13.2998 11.3333 13.172 11.0813 12.9164C10.8292 12.6607 10.7031 12.3535 10.7031 11.9945C10.7031 11.6356 10.8309 11.33 11.0866 11.078C11.3422 10.8259 11.6495 10.6998 12.0084 10.6998C12.3673 10.6998 12.6729 10.8276 12.925 11.0833C13.177 11.3389 13.3031 11.6462 13.3031 12.0051C13.3031 12.3641 13.1753 12.6696 12.9196 12.9217C12.664 13.1737 12.3567 13.2998 11.9978 13.2998ZM11.9978 8.13057C11.6388 8.13057 11.3333 8.00276 11.0813 7.74714C10.8292 7.49152 10.7031 7.18424 10.7031 6.82529C10.7031 6.46634 10.8309 6.16082 11.0866 5.90874C11.3422 5.65667 11.6495 5.53064 12.0084 5.53064C12.3673 5.53064 12.6729 5.65845 12.925 5.91407C13.177 6.16968 13.3031 6.47696 13.3031 6.83591C13.3031 7.19486 13.1753 7.50037 12.9196 7.75244C12.664 8.00452 12.3567 8.13057 11.9978 8.13057Z"
                              fill="#fff" // 대충
                            />
                          </g>
                        </svg>
                      </button>
                    ))}
                  </div>
                ) : (
                  <EmptyRoutine />
                )}
              </S.RoutinesContainer>
            </div>
          </S.MypageTopContainer>
          <S.MypageMiddleContainer>
            <DragAndDrop selectedRoutineId={selectedRoutineId} />
          </S.MypageMiddleContainer>
        </div>
      </S.MypageContainer>
    </>
  )
}

export default MyPage
