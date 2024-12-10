import DropDown from "@components/DropDown/DropDown"
import Icon from "@components/Icon/Icon"

import useDeleteMyWorkout from "@hooks/mutation/useDeleteMyWorkout"

interface MyWorkoutDropDownProps {
  myWorkoutId: number
  isRemoveSuccess: () => void
}

const MyWorkoutDropDown = ({
  myWorkoutId,
  isRemoveSuccess,
}: MyWorkoutDropDownProps) => {
  const { mutate: removeWorkout } = useDeleteMyWorkout({
    onSuccess: isRemoveSuccess,
  })

  return (
    <DropDown position="my">
      <DropDown.DropDownButton variant="grey">
        운동량 수정하기
        <Icon
          icon="PencilDarkGrey"
          size={18}
        />
      </DropDown.DropDownButton>
      <DropDown.DropDownButton
        variant="red"
        onClick={() => removeWorkout(myWorkoutId)}>
        운동 삭제하기
        <Icon
          icon="RedTrash"
          size={18}
        />
      </DropDown.DropDownButton>
    </DropDown>
  )
}

export default MyWorkoutDropDown
