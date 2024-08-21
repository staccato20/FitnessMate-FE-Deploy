import { useRef } from "react"
import { useNavigate } from "react-router-dom"

import Button from "@components/Button/Button"
import OutSideClick from "@components/Navbar/OutSideClick"

import * as S from "./StyledNavModal"

interface NavDropDownProps {
  userName: string
  isDropDownOpen: boolean
  setIsDropDownOpen: (dropDown: boolean) => void
}

const NavDropDown = ({
  userName,
  isDropDownOpen,
  setIsDropDownOpen,
}: NavDropDownProps) => {
  const navigate = useNavigate()

  const handleToggle = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }

  const modalRef = useRef(null)
  const handleClose = () => {
    setIsDropDownOpen(false)
  }
  OutSideClick(modalRef, handleClose)

  const handleLogout = async () => {
    try {
      // const res = await logoutPutAPI.get("", {
      //   headers: {
      //     Authorization: "Bearer " + localStorage.getItem("refreshToken"),
      //   },
      // })
      // localStorage.clear()
      // navigate("/")
    } catch (err) {}
  }

  const handleFixProfile = async () => {
    navigate("/mypage/fixprofile")
    setIsDropDownOpen(false)
  }

  const handleFixBodyInfo = async () => {
    navigate("/mypage/fixbodyinfo")
    setIsDropDownOpen(false)
  }

  return (
    <S.AppWrap ref={modalRef}>
      <S.NavButton onClick={handleToggle}>최훈오님</S.NavButton>
      {isDropDownOpen && (
        <S.ModalWrap>
          <S.Contents>
            <div>
              <p>안녕하세요.</p>
              <p>최훈오님!</p>
            </div>
            <div className="modalButton">
              <Button onClick={handleLogout}>로그아웃</Button>
              <Button onClick={handleFixProfile}>계정 정보 수정</Button>
              <Button onClick={handleFixBodyInfo}>신체 정보 수정</Button>
            </div>
          </S.Contents>
        </S.ModalWrap>
      )}
    </S.AppWrap>
  )
}

export default NavDropDown
