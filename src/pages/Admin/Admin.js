import React, { useState } from "react";
import * as S from "./AdminStyledComponents";
import { Modal } from "../../components/Modal/Modal";
const Admin = () => {
  const [modal, setModal] = useState(false);
  const TabMenu = ["Supplement", "Workout", "BodyPart", "Machine"];
  const CategoryList = [
    "englishName",
    "koreanName",
    "flavor",
    "price",
    "servings",
    "조회",
    "수정",
    "삭제",
  ];
  // dummydata
  const DataItemInfo = [
    [
      "(MY PROTEIN) impact WHEY PROTEIN",
      "(마이 프로틴) 임팩트 웨이 프로틴",
      "무맛",
      "20900 ￦",
      40,
      "조회",
      "수정",
      "삭제",
    ],
    [
      "(MY PROTEIN) impact WHEY PROTEIN",
      "(마이 프로틴) 임팩트 웨이 프로틴",
      "무맛",
      "20900 ￦",
      40,
      "조회",
      "수정",
      "삭제",
    ],
    [
      "(MY PROTEIN) impact WHEY PROTEIN",
      "(마이 프로틴) 임팩트 웨이 프로틴",
      "무맛",
      "20900 ￦",
      40,
      "조회",
      "수정",
      "삭제",
    ],
  ];

  return (
    <S.Wrapper modal={modal} className={modal ? "blur" : ""}>
      {modal && <Modal onClose={() => setModal(false)} setModal={setModal} />}
      <S.NavBar>
        {TabMenu.map((tab) => {
          return <S.TabMenu>{tab}</S.TabMenu>;
        })}
      </S.NavBar>

      <S.Table>
        <S.CategoryList>
          {CategoryList.map((category) => {
            return <S.CategoryItem>{category}</S.CategoryItem>;
          })}
        </S.CategoryList>
        <S.DataList>
          {DataItemInfo.map((datas) => {
            return (
              <S.DataItem>
                {datas.map((data, index) => {
                  if (index < 5) {
                    return <S.DataItemInfo>{data}</S.DataItemInfo>;
                  } else {
                    return <S.ButtonItemInfo>{data}</S.ButtonItemInfo>;
                  }
                })}
              </S.DataItem>
            );
          })}
        </S.DataList>
        <S.NavControls>
          <S.Button>Prev</S.Button>
          <S.Button>Next</S.Button>
          <S.Button
            onClick={() => {
              setModal(!modal);
            }}
          >
            추가
          </S.Button>
        </S.NavControls>
      </S.Table>
    </S.Wrapper>
  );
};

export default Admin;
