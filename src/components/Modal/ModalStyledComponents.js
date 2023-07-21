import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 400px;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 2;
  img {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 12px;
    right: 12px;
    cursor: pointer;
  }
`;

export const FormList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FormName = styled.div`
  font-size: 18px;
  font-weight: 800;
`;

export const SubmitButton = styled.button`
  background: #e78111;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  border: none;
  focus: none;
  outline: none;
  cursor: pointer;
`;
