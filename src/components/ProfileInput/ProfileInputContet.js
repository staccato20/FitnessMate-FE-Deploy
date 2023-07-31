import { useState } from "react";
import { ProfileInputContentWrapper } from "./StyledProfileInput";

const ProfileInputContent = ({ isChecked, placeholder, isEmailChecked }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <ProfileInputContentWrapper
      isChecked={isChecked}
      isEmailChecked={isEmailChecked}
      placeholder={isClicked === true ? "" : placeholder}
      onFocus={() => {
        setIsClicked(true);
      }}
      onBlur={() => {
        setIsClicked(false);
      }}
    />
  );
};

export default ProfileInputContent;
