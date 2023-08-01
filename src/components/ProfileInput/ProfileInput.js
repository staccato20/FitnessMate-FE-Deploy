import ProfileInputContent from "./ProfileInputContet";
import * as S from "./StyledProfileInput";

// 회원정보 입력창
const ProfileInput = ({
  isChecked,
  isEmailChecked,
  setIsEmailChecked,
  placeholder,
  children,
}) => {
  /* 이메일 input인지 부터 체크 */
  const isEmailInput = children === "이메일";

  // isChecked : 체크여부
  // placeholder : Input창 마다 다양해서 Home에서 받아옴
  // children : 아이디/비밀번호/이메일 등등..
  return (
    <S.ProfileInputContainer content={children}>
      <S.InputName>
        {children}
        <span className="essentialSymbol"> *</span>
        </S.InputName>
      {/* 체크가 되지 않았을때만 Warning 문구 */}
      <ProfileInputContent
        isChecked={isChecked}
        placeholder={placeholder}
        isEmailChecked={isEmailChecked}
      />
      {isEmailInput && (
        <button
          className="duplicateButton"
          onClick={(e) => {
            e.preventDefault();
            setIsEmailChecked(true);
          }}
        >
          중복확인
        </button>
      )}

      {/*  우선 isChecked를 통해서 생성 규칙을 검사(입력했는지 안했는지)하고, 통과하면
      이메일 중복체크를 검사  */}
      {isEmailInput ? (
        !isChecked ? (
          <span className="profileInputWarning">
            {children} 생성 규칙에 맞지 않습니다.
          </span>
        ) : isEmailChecked ? (
          <span className="profileInputChecking">
            사용 가능한 이메일 입니다.
          </span>
        ) : (
          ""
        )
      ) : !isChecked ? (
        <span className="profileInputWarning">
          {children} 생성 규칙에 맞지 않습니다.
        </span>
      ) : (
        ""
      )}
      {/* 비밀번호 입력창에만 재확인 입력창을 하나 더 추가 */}
      {/* 비밀번호 입력창 */}
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
