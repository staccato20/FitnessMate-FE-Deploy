import ProfileInputContent from "./ProfileInputContet";
import * as S from "./StyledProfileInput";

// 회원정보 입력창

const ProfileInput = ({ isChecked, placeholder, children }) => {
  // isChecked : 체크여부
  // placeholder : Input창 마다 다양해서 Home에서 받아옴
  // children : 아이디/비밀번호/이메일 등등..
  return (
    <S.ProfileInputContainer>
      <span className="InputName">
        {children}
        <span className="essentialSymbol"> *</span>
      </span>
      {/* 체크가 되지 않았을때만 Warning 문구 */}
      <ProfileInputContent isChecked={isChecked} placeholder={placeholder} />

      {!isChecked && (
        <span className="profileInputWarning">
          {children} 생성 규칙에 맞지 않습니다.
        </span>
      )}
      {/* 비밀번호 입력창에만 재확인 입력창을 하나 더 추가 */}
      {children === "비밀번호" && (
        <ProfileInputContent
          isChecked={isChecked}
          placeholder="비밀번호 재확인"
        />
      )}
    </S.ProfileInputContainer>
  );
};

export default ProfileInput;
