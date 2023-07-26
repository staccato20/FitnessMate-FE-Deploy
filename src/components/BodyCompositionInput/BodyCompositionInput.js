import {
  InputContainer,
  InputContentBox,
} from "./BodyCompositionInputStyledComponents";

const BodyCompositionInput = ({ children }) => {
  return (
    <InputContainer>
      <span className="InputName">{children}</span>
      <InputContentBox>
        <span className="SubInputName">{`상체 ${children}`}</span>
        <input className="InputContent" placeholder="공식" />
      </InputContentBox>
      <InputContentBox>
        <span className="SubInputName">{`하체 ${children}`}</span>
        <input className="InputContent" placeholder="공식" />
      </InputContentBox>
    </InputContainer>
  );
};

export default BodyCompositionInput;
