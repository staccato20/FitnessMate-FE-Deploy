import { useEffect, useState } from "react"

import {
  DragDropContext,
  DragUpdate,
  Draggable,
  DropResult,
  Droppable,
} from "@hello-pangea/dnd"

import MyWorkout from "@components/MyWorkout/MyWorkout"

import MyFitAPI from "@apis/domain/myfit"

import { MyWorkoutIndex, MyWorkoutList } from "@typpes/type"

import * as S from "./StyledMyPage"

interface DragAndDropProps {
  selectedRoutineId?: number | null
}

const DragAndDrop: React.FC<DragAndDropProps> = (selectedRoutineId) => {
  const [myWorkouts, setMyWorkouts] = useState<MyWorkoutList[]>([])
  const [highlightedFrameIndex, setHighlightedFrameIndex] = useState<
    number | null
  >(null)

  useEffect(() => {
    const fetchWorkouts = async (routineId: number) => {
      const response: MyWorkoutList[] = await MyFitAPI.myWorkouts(routineId)
      setMyWorkouts(response)
    }

    if (selectedRoutineId) fetchWorkouts(Number(selectedRoutineId))
  }, [selectedRoutineId])

  const onDragUpdate = (update: DragUpdate) => {
    if (update.destination) {
      setHighlightedFrameIndex(update.destination.index) // 드래그가 놓일 위치 저장
    } else {
      setHighlightedFrameIndex(null) // 드래그 가능한 위치가 없을 때 초기화
    }
  }

  const handleDrop = async (droppedItem: DropResult) => {
    setHighlightedFrameIndex(null) // 드롭 후 placeholder 숨김

    if (!droppedItem.destination) return

    const updatedList: MyWorkoutList[] = [...myWorkouts]

    // drag item 삭제
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1)
    // drop item 추가
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem)

    updatedList.forEach((workout, index) => {
      workout.myWorkoutIndex = index + 1 // 인덱스를 다시 1부터 재설정
    })

    // UI 상태 즉시 업데이트
    setMyWorkouts(updatedList)

    const workout: MyWorkoutIndex = {
      myWorkoutIndex: droppedItem.destination.index + 1,
      weight: updatedList[droppedItem.destination.index].weight
        ? updatedList[droppedItem.destination.index].weight.toString()
        : "0",
      rep: updatedList[droppedItem.destination.index].rep
        ? updatedList[droppedItem.destination.index].rep.toString()
        : "0",
      setCount: updatedList[droppedItem.destination.index].setCount
        ? updatedList[droppedItem.destination.index].setCount.toString()
        : "0",
      caution: updatedList[droppedItem.destination.index].caution
        ? updatedList[droppedItem.destination.index].caution.toString()
        : "주의사항이 없습니다.",
    }

    try {
      await MyFitAPI.editMyWorkout(
        updatedList[droppedItem.destination.index].myWorkoutId,
        workout,
      )
    } catch (error) {
      console.error(error)
      setMyWorkouts(myWorkouts) // 요청 실패 시 이전 상태로 복원
    }
  }

  return (
    <S.DragAndDropWrapper>
      <S.WorkoutNumList>
        {myWorkouts?.map((_, index) => (
          <S.WorkoutNum key={index}>
            <S.NumCircle>{index + 1}</S.NumCircle>
            <div className="line"></div>
          </S.WorkoutNum>
        ))}
      </S.WorkoutNumList>
      <DragDropContext
        onDragUpdate={onDragUpdate}
        onDragEnd={handleDrop}>
        <Droppable droppableId="workout-list">
          {(provided) => (
            <div
              className="list-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ position: "relative" }}>
              {highlightedFrameIndex !== null && (
                <S.PlaceholderWrapper
                  isVisible={highlightedFrameIndex !== null}
                  top={`${highlightedFrameIndex * (157 + 13)}px`}
                />
              )}
              {myWorkouts?.map((workout, index) => (
                <Draggable
                  key={workout.workoutId}
                  draggableId={`item-${workout.workoutId}`}
                  index={index}>
                  {(providedSpace, snapshot) => (
                    <MyWorkout
                      bodyParts={workout.bodyParts.join(", ")}
                      caution={workout.caution || "주의사항이 없습니다."}
                      setCount={workout.setCount?.toString() || "0"}
                      rep={workout.rep?.toString() || "0"}
                      weight={workout.weight?.toString() || "0"}
                      onClick={() => {}}
                      draggableProps={providedSpace.draggableProps}
                      dragHandleProps={providedSpace.dragHandleProps}
                      innerRef={providedSpace.innerRef}
                      isDragging={snapshot.isDragging}>
                      {workout.workoutName}
                    </MyWorkout>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </S.DragAndDropWrapper>
  )
}

export default DragAndDrop
