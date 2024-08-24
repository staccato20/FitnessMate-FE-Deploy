import { ProgressBarBox, ProgressBarItem } from "./StyledProgressBar"

export interface ProgressBarProps {
  status: number
}

const ProgressBar = ({ status }: ProgressBarProps) => {
  return (
    <ProgressBarBox>
      <ProgressBarItem $status={status} />
    </ProgressBarBox>
  )
}

export default ProgressBar
