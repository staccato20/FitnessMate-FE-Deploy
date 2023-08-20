import { useNavigate } from "react-router-dom";
import { BeforeButton, SmallButton, TextCheckbox } from "../../../components";
import {
  RecommendButtonContainer,
  RecommendContainer,
  RecommendTitle,
  RecommendTitleHide,
  TextCheckboxContainer,
} from "../StyledRecommend";
import theme from "../../../styles/theme";
import { userSupplementAPI } from "../../../apis/API";
import { useEffect, useState } from "react";

const RecommendSupplementPurpose = () => {
  const navigate = useNavigate();

  // 목적 객체
  const [purposeList, setPurposeList] = useState([]);
  // 목적리스트 받아옴
  const fetchData = async () => {
    const response = await userSupplementAPI.get("/purposes", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Jwt"),
      },
    });
    const newArr = response.data.map((obj) => ({
      name: obj,
      isSelected: false,
    }));
    setPurposeList(newArr);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // 클릭 이벤트
  const handleSelect = (idx) => {
    // 배열 업데이트
    const newArr = [...purposeList];
    newArr[idx].isSelected = !newArr[idx].isSelected;
    setPurposeList(newArr);
  };

  const handleBackPage = () => {
    navigate(-1);
  };

  const handleNextPage = () => {
    navigate("/recommend/supplementtype");
  };

  return (
    <RecommendContainer>
      <div>
        <RecommendTitle ftsize="32px" ftcolor={theme.Black} ftweight="700">
          보조제 섭취 목적이 무엇인가요?
          <br />
        </RecommendTitle>
        <RecommendTitleHide>
          {/* 이름 로그인한 사람에게 받아와야 함 */}
          AI가 김정욱님께 최적화된 솔루션을 제공해줘요
        </RecommendTitleHide>
        <br />
      </div>
      <TextCheckboxContainer>
        {purposeList.map((item, idx) => (
          <TextCheckbox
            key={item.name}
            handleClick={handleSelect}
            elementidx={idx}
            isSelected={item.isSelected}
          >
            {item.name}
          </TextCheckbox>
        ))}
      </TextCheckboxContainer>
      <RecommendButtonContainer>
        <BeforeButton handleSubmit={handleBackPage}></BeforeButton>
        <SmallButton handleSubmit={handleNextPage}>다음</SmallButton>
      </RecommendButtonContainer>
    </RecommendContainer>
  );
};

export default RecommendSupplementPurpose;
