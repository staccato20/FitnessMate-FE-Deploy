import lunge from "../../assets/images/lunge.png";
import { CardContainer } from "./FitnessTypeStyledComponents";

const FitnessType = ({ children, part }) => {
  return (
    <CardContainer>
      <div className="fitnessPart">{part}</div>
      <img src={lunge} className="fitnessImg" alt="운동종류 이미지"></img>
      <div className="fitnessInfo">
        <span className="fitnessTitle">{`${children}`}</span>
        <span className="fitnessExplain">
          런지(lunge)는 하체와 코어 근육의 근력을 강화할 수 있는 쉽고 효과적인
          운동이다. 쉽게 따라 할 ...
        </span>
      </div>
    </CardContainer>
  );
};

export default FitnessType;
