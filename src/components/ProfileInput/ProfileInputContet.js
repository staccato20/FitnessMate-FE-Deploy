import { useState } from "react";
import { ProfileInputContentWrapper } from "./StyledProfileInput";

const ProfileInputContent = ({ isChecked, placeholder }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <ProfileInputContentWrapper
      isChecked={isChecked}
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
