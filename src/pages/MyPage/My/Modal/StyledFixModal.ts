// < nav modal 스타일 >
import styled from "styled-components"

import theme from "@styles/theme"

export const AppWrap = styled.div`
  text-align: center;
  margin: 10px auto;
	width: 100%
	display: flex;
  align-items: center;
  justify-content: center;
`

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #00000033;
  z-index: 9999;
`

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ModalWrap = styled.div`
  width: 470px;
  height: 620px;
  margin-bottom: 53px;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  justify-content: space-between;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 32px;

  span {
    color: ${theme.Brand400};
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    display: flex;
    justify-content: start;
    margin-bottom: 8px;
  }
`

export const ModalTitle = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  grid-template-rows: 24px;
  width: 100%;
  margin-bottom: 32px;

  h1 {
    grid-column: 2;
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 500;
    color: ${theme.Netural990};
    font-family: Pretendard;
    margin-bottom: 32px;
  }
`

export const CloseButton = styled.div`
  grid-column: 3;
  border-radius: 23.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    color: ${theme.Netural990};
    font-size: 30px;
    width: 17px;
    height: 17px;

    &:hover {
      opacity: 0.5;
    }
  }
`

export const Contents = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 422px;
  margin-bottom: 10px;
  gap: 14px;

  .contents-input {
    display: flex;
    align-items: center;
    background-color: ${theme.Netural100};
    border: 1px solid ${theme.Netural200};
    border-radius: 10px;
    gap: 14px;
    height: 56px;
    padding: 14px;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    width: 368px;
    display: flex;
    justify-content: start;
    cursor: pointer;
  }

  img {
    cursor: pointer;
  }

  input {
    font-size: 18px;
    font-weight: 500;
    width: 368px;
    display: flex;
  }
`

export const AddButton = styled.button`
  height: 34px;
  width: 34px;
  border-radius: 8px;
  background-color: ${theme.Brand400};
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 14px;
    width: 14px;
  }
`

export const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`

export const SaveButton = styled.button`
  width: 433px;
  height: 68px;
  padding: 22px 24px;

  background: ${({ theme }) => theme.Brand600};
  color: ${({ theme }) => theme.Netural0};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border-radius: 12px;
  font-family: Pretendard;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`
