import { RecommendContainer } from "../StyledRecommend";
import thumbs from "../../../../src/assets/images/thumbs.png";
import BigButton from "./../../../components/Button/BigButton";
import { useNavigate } from "react-router-dom";

// 버튼과 이미지의 간격을 어떻게 줄지 고민해 봐야함.
const RecommendInfo = () => {
  const navigate = useNavigate();
  const goNextPage = () => {
    navigate(-1);
  };
  return (
    <RecommendContainer>
      <span className="recommendTitle">
        Chat GPT로
        <br />
        10초만에
        <span className="emphasisTitle"> 운동/보조제</span>
        <br />
        <span className="emphasisTitle2">추천받기</span>
      </span>
      <img src={thumbs} alt="따봉 이미지" className="goodImg" />
      <BigButton handleSubmit={goNextPage}>추천 받으러 가기</BigButton>
    </RecommendContainer>
  );
};

export default RecommendInfo;
