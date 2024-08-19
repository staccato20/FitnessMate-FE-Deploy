import { useNavigate } from "react-router-dom"

import IconButton from "@components/IconButton/IconButton"
import StatusBar from "@components/StatusBar/StatusBar"

import * as S from "../StyledRecommend"

const Prolog = () => {
  const navigate = useNavigate()
  const handleBackPage = () => {
    navigate(-1)
  }
  return (
    <S.RecommendWrapper>
      <S.Status>
        <IconButton
          src=""
          onClick={handleBackPage}
        />
        <StatusBar status={"1"} />
      </S.Status>
    </S.RecommendWrapper>
  )
}
export default Prolog
