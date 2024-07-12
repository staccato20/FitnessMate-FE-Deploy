// @ts-nocheck
import { StatusBarBox, StatusBarItem } from "./StyledStatusBar"

const StatusBar = ({ status }) => {
  return (
    <>
      <StatusBarBox $status={status}>
        <StatusBarItem $status={status} />
      </StatusBarBox>
    </>
  )
}

export default StatusBar
