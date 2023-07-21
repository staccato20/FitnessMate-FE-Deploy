import React, { useState, useEffect, useContext } from "react";
import * as S from "./AdminStyledComponents";
import { Modal } from "../../components/Modal/Modal";
import { axios } from "axios";
import LoginContext from "../../Contexts/Login";
import deepCopy, { supplement_type } from "./../../types/Type";
import { loginPostAPI, supplementAPI } from "../../apis/API";
import { redirect } from "react-router-dom";

const Admin = () => {
  const [modal, setModal] = useState(false);
  const dummy_supplement_type = deepCopy(supplement_type); // JSON 형식으로 변환된 type
  const [supplementBatch, setSupplementBatch] = useState([]); // 서버에 저장되어있는 supplement 객체
  const [supplement, setSupplement] = useState(supplement_type); // 선택된 보충제
  const [supplementId, setSupplementId] = useState(""); // 선택된 보충제 id
  const [currentPage, setCurrentPage] = useState(1); // 페이지 이동

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

  // CRUD 될때마다 데이터 업데이트
  const loadSupplementBatch = async () => {
    // 전체조회(데이터 10개 가져옴)
    const supplementResponse = await supplementAPI.get(`/list/${currentPage}`);
    const fitData = supplementResponse.data.map((obj) => {
      // 받아온 데이터에 보충제 타입 추가
      return {
        ...supplement_type,
        ...obj,
      };
    });

    // 데이터 갱신
    setSupplementBatch(fitData);
  };

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
