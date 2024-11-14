// 내 운동 페이지
import { useEffect, useRef, useState } from "react"

// Drag & Drop
import {
  DragDropContext,
  DragUpdate,
  Draggable,
  DropResult,
  Droppable,
} from "@hello-pangea/dnd"

// my workouts
import MyFitAPI from "@apis/domain/myfit"

// type
import { MyWorkoutIndex, MyWorkoutList } from "@typpes/type"

// user bodydata
import { useGetFetchRecentData } from "@hooks/query/useGetFetchRecentBodyData"
// my routines
import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"
// user name
import { useUserInfo } from "@hooks/query/useUserInfo"

// 루틴 더보기 모달
import OutSideClick from "./Modal/OutSideClick"
import * as S from "./StyledMyPage"

type PlaceholderProps = {
  clientHeight: number
  clientWidth: number
  clientX: number
  clientY: number
}

const defaultPlaceholder = {
  clientHeight: 0,
  clientWidth: 0,
  clientX: 0,
  clientY: 0,
}

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
  const isRoutine = Array.isArray(myRoutines) && myRoutines.length > 0
  // 루틴 분할 길이
  const [myRoutineLength, setMyRoutineLength] = useState<number>(0)
  // 선택된 루틴
  const [btnActive, setBtnActive] = useState<number>(0)

  // 운동 리스트를 가져올 때 사용할 루틴 아이디
  const [selectedRoutineId, setSelectedRoutineId] = useState<number | null>(
    null,
  )

  // 운동 리스트 상태
  const [workoutList, setWorkoutList] = useState<MyWorkoutList[]>([])
  // drag & drop 을 위한 운동 리스트 복사본
  const [myWorkouts, setMyWorkouts] = useState<MyWorkoutList[]>([])

  // 운동 순서 수정 여부
  const [isWorkoutFix, setIsWorkoutFix] = useState<boolean>(false)

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

  // selectedRoutineId가 변경될 때마다 운동 리스트 가져오기
  useEffect(() => {
    const fetchWorkouts = async (routineId: number) => {
      try {
        const response: MyWorkoutList[] = await MyFitAPI.myWorkouts(routineId)
        console.log(response)
        setMyWorkouts(response) // 운동 리스트 설정
        setWorkoutList(response.map((item) => ({ ...item }))) // 운동 리스트 복사본
        setIsWorkoutFix(false)
      } catch (error) {}
    }

    if (selectedRoutineId) {
      fetchWorkouts(selectedRoutineId) // 루틴 ID가 있을 때만 호출
    }
  }, [selectedRoutineId, isWorkoutFix])

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

  // Drag & Drop

  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(false) // 드래그 중에만 placeholder를 보이게 함

  // 2. 여기서 순서를 바꿀 때, 그냥 routineWorkout을 가져왔더니 아래 map의 순서를 유지하려고 해서
  // myWorkouts라는 배열 복사본을 만들어서 실제 사용자가 하는 동안에
  const handleDrop = async (droppedItem: DropResult) => {
    // 드롭 후 placeholder 숨김
    setIsPlaceholderVisible(false)

    // Ignore drop outside droppable container
    if (!droppedItem.destination) return

    // myWorkouts는 MyWorkoutList[] 타입이므로 updatedList도 동일한 타입으로 명시
    const updatedList: MyWorkoutList[] = [...myWorkouts]

    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1)
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem)

    // 리스트의 모든 아이템의 인덱스를 다시 설정
    updatedList.forEach((workout, index) => {
      workout.myWorkoutIndex = index + 1 // 인덱스를 다시 1부터 재설정
    })

    // UI 상태 즉시 업데이트
    setMyWorkouts(updatedList)

    // weight, rep, setCount가 null이거나 undefined일 경우 기본값으로 0을 설정, 주의사항도 추가
    const workout: MyWorkoutIndex = {
      myWorkoutIndex: droppedItem.destination.index + 1, // number 타입 유지
      weight: updatedList[droppedItem.destination.index].weight
        ? updatedList[droppedItem.destination.index].weight.toString()
        : "0", // null 또는 undefined인 경우 0으로 설정
      rep: updatedList[droppedItem.destination.index].rep
        ? updatedList[droppedItem.destination.index].rep.toString()
        : "0", // null 또는 undefined인 경우 0으로 설정
      setCount: updatedList[droppedItem.destination.index].setCount
        ? updatedList[droppedItem.destination.index].setCount.toString()
        : "0", // null 또는 undefined인 경우 0으로 설정
      caution: updatedList[droppedItem.destination.index].caution
        ? updatedList[droppedItem.destination.index].caution.toString()
        : "주의사항이 없습니다.", // null 또는 undefined인 경우 0으로 설정
    }

    // 3. 여기서 바뀐 배열을
    try {
      await MyFitAPI.modifyMyWorkout(
        updatedList[droppedItem.destination.index].myWorkoutId,
        workout,
      )
      setIsWorkoutFix(true)
    } catch (error) {
      setIsPlaceholderVisible(false) // 드롭 후 placeholder 숨김
      setMyWorkouts(workoutList) // 요청 실패 시 myWorkouts를 workoutList로 복원
    }
  }

  const [placeholderProps, setPlaceholderProps] =
    useState<PlaceholderProps>(defaultPlaceholder)

  // onDragUpdate에서 placeholder 위치 계산
  const onDragUpdate = (update: DragUpdate) => {
    // 드래그 중에 placeholder가 보이도록 설정
    setIsPlaceholderVisible(true)

    if (!update.destination) {
      return
    }

    const draggableId = update.draggableId
    const destinationIndex = update.destination.index

    // draggableId로 DOM 요소 찾기 (getElementById 사용)
    const draggedDOM = document.getElementById(draggableId)

    if (!draggedDOM) {
      return
    }

    // 부모 요소를 명시적으로 선택
    const parent = document.querySelector(".list-container")

    if (parent) {
      // 부모 요소의 스타일 정보를 가져옴
      const parentStyle = window.getComputedStyle(parent)
      const gap = parseFloat(parentStyle.gap) || 0

      // 동일한 height와 marginBottom 값을 사용하여 Y 좌표 계산
      const firstChild = draggedDOM.parentNode!.children[0] as HTMLElement // 첫 번째 항목을 기준으로 height와 marginBottom 값을 가져옴
      const uniformHeight = firstChild.offsetHeight // 모든 항목에 동일한 height 적용
      const uniformMarginBottom =
        parseFloat(window.getComputedStyle(firstChild).marginBottom) || 0 // 모든 항목에 동일한 marginBottom 적용

      const clientY =
        (destinationIndex + 2.25) * uniformHeight + // 항목 높이에 따라 계산
        (destinationIndex + 2) * (uniformMarginBottom + gap) // marginBottom과 gap 추가 계산

      // X 좌표 동적으로 계산 (드래그된 항목이 아닌 것 중 첫 번째 workoutCard를 기준으로)
      const workoutCards = Array.from(
        document.getElementsByClassName("workoutCard"),
      ) as HTMLElement[]

      // 드래그 중인 요소를 제외한 첫 번째 workoutCard 찾기
      const nonDraggedWorkoutCard = workoutCards.find(
        (card) => card.id !== draggableId,
      )

      const workoutCardLeft = nonDraggedWorkoutCard
        ? nonDraggedWorkoutCard.getBoundingClientRect().left
        : draggedDOM.getBoundingClientRect().left // 드래그 중인 요소가 아니면 그 요소의 left 값 사용

      setPlaceholderProps({
        clientHeight: uniformHeight, // 드래그된 요소의 높이 사용
        clientWidth: draggedDOM.offsetWidth, // 너비
        clientY, // 계산된 Y 좌표
        clientX: workoutCardLeft, // 드래그 중인 항목을 제외한 첫 번째 workoutCard의 X 좌표 사용
      })
    }
  }

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
                  <div className="noneRoutineContainer">
                    <div className="noneRoutineTextArea">
                      <p className="noneRoutineTopText">
                        아직 추가한 루틴이 없어요.
                      </p>
                      <p className="noneRoutineBottomText">
                        나만의 운동 루틴을 만들어보세요!
                      </p>
                    </div>
                    <button className="addFirstRoutineButton">
                      <p className="addFirstRoutineButtonText">추가하기</p>
                    </button>
                  </div>
                )}
              </S.RoutinesContainer>
            </div>
          </S.MypageTopContainer>
          <S.MypageMiddleContainer>
            <div className="workoutNumList">
              {myWorkouts?.map((workout, index) => (
                <div
                  className={`workoutNum ${index === myWorkouts?.length - 1 ? "last-item" : ""}`}
                  key={index}>
                  <div className="numCircle">{index + 1}</div>
                  <div className="line"></div>
                </div>
              ))}
            </div>
            <DragDropContext
              onDragEnd={handleDrop}
              onDragUpdate={onDragUpdate}>
              <Droppable droppableId="workout-list">
                {(provided) => (
                  <div
                    className="list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}>
                    {myWorkouts?.map(
                      (
                        {
                          workoutId,
                          workoutName,
                          bodyParts,
                          weight,
                          rep,
                          setCount,
                          description,
                          imgPath,
                          caution,
                        },
                        index,
                      ) => (
                        <Draggable
                          key={workoutId}
                          draggableId={`item-${workoutId}`}
                          index={index}>
                          {(providedSpace, snapshot) => (
                            <div
                              className="workoutCard"
                              id={`item-${workoutId}`}
                              ref={providedSpace.innerRef}
                              {...providedSpace.dragHandleProps}
                              {...providedSpace.draggableProps}
                              style={{
                                backgroundColor: snapshot.draggingOver
                                  ? "lightblue"
                                  : "white",
                                ...providedSpace.draggableProps.style,
                              }}>
                              <div
                                className="recommendCard"
                                draggable>
                                <div className="recommendCardContent">
                                  <S.RecommendMainTopWrapper>
                                    <S.RecommendMainTopLeftWrapper>
                                      <S.RecommendMainWorkout>
                                        {workoutName}
                                      </S.RecommendMainWorkout>
                                      <S.RecommendMainBodyPart>
                                        {bodyParts.map(
                                          (bodyPart: string, index: number) => (
                                            <p
                                              className="item_BodyPart"
                                              key={index}>
                                              {index === bodyParts?.length - 1
                                                ? bodyPart
                                                : `${bodyPart}, `}
                                            </p>
                                          ),
                                        )}
                                      </S.RecommendMainBodyPart>
                                    </S.RecommendMainTopLeftWrapper>
                                    <S.RecommendMainTopRightWrapper>
                                      <div className="amountContent">
                                        <div className="amountItem">
                                          <p className="amountTitle">중량</p>
                                          <span className="amountText">
                                            {weight === null ? 0 : weight}
                                            <p className="amountUnit">kg</p>
                                          </span>
                                        </div>
                                        <div className="amountItem">
                                          <p className="amountTitle">횟수</p>
                                          <span className="amountText">
                                            {rep === null ? 0 : rep}
                                            <p className="amountUnit">회</p>
                                          </span>
                                        </div>
                                        <div className="amountItem">
                                          <p className="amountTitle">세트 수</p>
                                          <span className="amountText">
                                            {setCount === null ? 0 : setCount}
                                            <p className="amountUnit">세트</p>
                                          </span>
                                        </div>
                                      </div>
                                      <div
                                        className="recommendMainBtn"
                                        onClick={() => {}}></div>
                                    </S.RecommendMainTopRightWrapper>
                                  </S.RecommendMainTopWrapper>
                                  <S.RecommendMainMiddleWrapper>
                                    <div className="recommendMainContent">
                                      <S.RecommendDescriptionWrapper>
                                        {description}
                                      </S.RecommendDescriptionWrapper>
                                      <S.RecommendVideoWrapper>
                                        <img
                                          src={imgPath}
                                          className="fitnessImg"
                                          alt="운동종류 이미지"></img>
                                        <div className="goTopRecommendVideo"></div>
                                      </S.RecommendVideoWrapper>
                                    </div>
                                  </S.RecommendMainMiddleWrapper>
                                </div>

                                <S.RecommendMoreButton>
                                  <p className="informationText">{caution}</p>
                                </S.RecommendMoreButton>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ),
                    )}
                    {provided.placeholder}

                    {/* 커스텀 placeholder */}
                    <div
                      className="drop-placeholder"
                      style={{
                        position: "absolute",
                        borderRadius: "16px",
                        top: placeholderProps.clientY + "px",
                        left: placeholderProps.clientX + "px",
                        height: placeholderProps.clientHeight + "px",
                        width: placeholderProps.clientWidth + "px",
                        backgroundColor: "#e4eaf0",
                        border: "2px" + " dashed" + " #d0d9e2",
                        transition:
                          "top 0.2s, left 0.2s, width 0.2s, height 0.2s",
                        display: isPlaceholderVisible ? "block" : "none", // 드래그 중에만 보여주기
                      }}
                    />
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </S.MypageMiddleContainer>
        </div>
      </S.MypageContainer>
    </>
  )
}

export default MyPage
