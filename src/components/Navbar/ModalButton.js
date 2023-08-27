import { Children, useState } from "react";
import styled from "styled-components";
import NavModal from "./NavModal";

function ModalButton() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = ({Children}) => {
    setIsOpen(true);
  };

  return (
    <AppWrap>
      <Button onClick={onClickButton}>{Children}</Button>
      {isOpen && (<NavModal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />)}
    </AppWrap>
  );
}

const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #fa9f98;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #fac2be;
  }
`;

const AppWrap = styled.div`
  text-align: center;
  margin: 50px auto;
`;
export default ModalButton;