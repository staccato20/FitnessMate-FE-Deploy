import { useNavigate } from "react-router-dom"

import * as S from "./StyeldLeaveModal"

const LoginModal = ({ setIsLoginModal }) => {
  const navigate = useNavigate()

  const handleCancle = () => {
    setIsLoginModal(false)
  }

  const handleLeave = () => {
    setIsLoginModal(false)
    navigate("login")
  }

  return (
    <S.ModalBox>
      <S.ModalWrapper>
        <span className="leaveModalTitle">
          로그인해야 이용 가능한 서비스입니다.
          <br />
          로그인 하시겠습니까?
        </span>
        <div className="leaveModalButtonWrapper">
          <button
            className="cancleBtn"
            onClick={handleCancle}>
            돌아갈래요
          </button>
          <button
            className="leaveBtn"
            onClick={handleLeave}>
            로그인 하러 갈래요
          </button>
        </div>
      </S.ModalWrapper>
    </S.ModalBox>
  )
}

export default LoginModal
