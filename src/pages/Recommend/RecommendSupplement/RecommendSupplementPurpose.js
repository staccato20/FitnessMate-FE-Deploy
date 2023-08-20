import { useNavigate } from "react-router-dom";
import {
  BeforeButton,
  SmallButton,
  SmallTextCheckbox,
  TextCheckbox,
} from "../../../components";
import {
  RecommendButtonContainer,
  RecommendContainer,
  RecommendTitle,
  RecommendTitleHide,
  TextCheckboxContainer,
} from "../StyledRecommend";
import theme from "../../../styles/theme";

const RecommendSupplementPurpose = () => {
  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate(-1);
  };

  const handleNextPage = () => {};
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
        <TextCheckbox>근력 성장</TextCheckbox>
        <TextCheckbox>체중 감량</TextCheckbox>
        <TextCheckbox>체중 증가</TextCheckbox>
        <TextCheckbox>데피니션(근선명도) 증가</TextCheckbox>
      </TextCheckboxContainer>
      <RecommendButtonContainer>
        <BeforeButton handleSubmit={handleBackPage}></BeforeButton>
        <SmallButton handleSubmit={handleNextPage}>다음</SmallButton>
      </RecommendButtonContainer>
    </RecommendContainer>
  );
};

export default RecommendSupplementPurpose;
