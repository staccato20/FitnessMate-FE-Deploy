import { AfterArrowButtonWrapper } from "./StyledButton";
import rightarrow from "../../assets/images/rightarrow3.svg";
import { useNavigate } from "react-router-dom";

export const AfterArrowButton = ({ handleClick, children }) => {
  const navigate = useNavigate();

  return (
    <AfterArrowButtonWrapper onClick={handleClick}>
      <span className="afterArrowBTtText">{children}</span>
      <img
        src={rightarrow}
        alt="다음 버튼 이미지"
        className="afterArrowBtnImg"
      />
    </AfterArrowButtonWrapper>
  );
};

export default AfterArrowButton;
