import { useState } from "react"

import {
  DragDropContext,
  DragUpdate,
  Draggable,
  DropResult,
  Droppable,
} from "@hello-pangea/dnd"

import { useQueryClient } from "@tanstack/react-query"

import MyWorkout from "@components/MyWorkout/MyWorkout"

import MyFitAPI from "@apis/domain/myfit"

import { MyWorkoutIndex, MyWorkoutList } from "@typpes/type"

import useGetMyWorkouts from "@hooks/query/useGetMyWorkouts"

import * as S from "./StyledMyPage"

interface DragAndDropProps {
  selectedRoutineId: number
}

const DragAndDrop: React.FC<DragAndDropProps> = ({ selectedRoutineId }) => {
  const queryClient = useQueryClient()
  const [highlightedFrameIndex, setHighlightedFrameIndex] = useState<
    number | null
  >(null)

  const { myWorkouts } = useGetMyWorkouts(selectedRoutineId || 0)
  const onDragUpdate = (update: DragUpdate) => {
    if (update.destination) {
      setHighlightedFrameIndex(update.destination.index)
    } else {
      setHighlightedFrameIndex(null)
    }
  }

  const handleDrop = async (droppedItem: DropResult) => {
    setHighlightedFrameIndex(null)

    if (!droppedItem.destination) return

    const updatedList: MyWorkoutList[] = [...myWorkouts]

    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1)
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem)

    updatedList.forEach((workout, index) => {
      workout.myWorkoutIndex = index + 1
    })

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
      queryClient.invalidateQueries({
        queryKey: ["workoutList", selectedRoutineId],
      })
    } catch (error) {
      console.error(error)
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
              {myWorkouts.map((workout, index) => {
                const {
                  workoutId,
                  myWorkoutId,
                  bodyParts,
                  caution,
                  setCount,
                  rep,
                  weight,
                  workoutName,
                } = workout
                return (
                  <Draggable
                    key={workoutId}
                    draggableId={`item-${workoutId}`}
                    index={index}>
                    {(providedSpace, snapshot) => (
                      <MyWorkout
                        routineId={selectedRoutineId || 0}
                        workoutId={workoutId}
                        myWorkoutId={myWorkoutId}
                        bodyParts={bodyParts.join(", ")}
                        caution={caution || "주의사항이 없습니다."}
                        setCount={setCount?.toString() || "0"}
                        rep={rep?.toString() || "0"}
                        weight={weight?.toString() || "0"}
                        onClick={() => {}}
                        draggableProps={providedSpace.draggableProps}
                        dragHandleProps={providedSpace.dragHandleProps}
                        innerRef={providedSpace.innerRef}
                        isDragging={snapshot.isDragging}>
                        {workoutName}
                      </MyWorkout>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </S.DragAndDropWrapper>
  )
}

export default DragAndDrop
