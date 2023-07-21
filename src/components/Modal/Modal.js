import { React, useState } from "react";
import * as S from "./ModalStyledComponents";

export const Modal = ({ setModal }) => {
  const InputList = [
    "englishName",
    "koreanName",
    "servings",
    "price",
    "marketURL",
    "description",
    "flavor",
    "source",
    "carbohydratePerServing",
    "proteinPerServing",
    "fatPerServing",
    "fileUpload",
  ];
  const [optionindex, setOptionindex] = useState("-1");
  const onSelect = (e) => {
    setOptionindex(e.target.value);
  };
  return (
    <S.ModalWrapper>
      <img
        src={require("../../assets/images/xbutton.png")}
        alt="모달 창 닫기 버튼"
        onClick={() => {
          setModal(false);
        }}
      />
      Select Supplement Type
      <select value={optionindex} onChange={onSelect}>
        <option value="-1">Protein</option>
        <option value="0">Gainer</option>
        <option value="1">BCAA</option>
      </select>
      <S.FormList>
        {InputList.map((input, index) => {
          return (
            <>
              <S.FormName>{input}</S.FormName>
              <input type="text"></input>
            </>
          );
        })}
      </S.FormList>
      <S.SubmitButton>등록</S.SubmitButton>
    </S.ModalWrapper>
  );
};
