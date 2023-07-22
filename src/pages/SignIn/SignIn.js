import React from "react";
import { Form, NavLink } from "react-router-dom";
import { loginAdminPostAPI } from "../../apis/API";

export const SignIn = async () => {
  const submission = {
    loginId: "administrator",
    password: "administrator",
  };

  // 관리자 로그인 세션 획득
  let response = await loginAdminPostAPI.post("", submission);
};

SignIn();

export default SignIn;
