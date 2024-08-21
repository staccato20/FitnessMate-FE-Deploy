import { useNavigate } from "react-router-dom"

import StatusBar from "@components/StatusBar/StatusBar"

const Prolog = () => {
  const navigate = useNavigate()
  const handleBackPage = () => {
    navigate(-1)
  }
  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <StatusBar status={1} />
    </div>
  )
}
export default Prolog
{
  /* <S.RecommendWrapper>
<S.Status>
  <StatusBar status={1} />
</S.Status>
</S.RecommendWrapper> */
}
