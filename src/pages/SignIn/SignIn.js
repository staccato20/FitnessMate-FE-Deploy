import React from "react";
import { Form, redirect, NavLink, useActionData } from "react-router-dom";
import { loginPostAPI } from "../../apis/API";

const SignIn = (props) => {
  return (
    <>
      <header>
        <h1>로그인</h1>
      </header>
      <main>
        <Form method="post" action="/signIn">
          <div>
            <label>
              <span>ID </span>
              <div>
                <input type="text" name="id" required />
              </div>
            </label>
          </div>
          <div>
            <label>
              <span>PassWord </span>
              <div>
                <input type="password" name="password" required />
              </div>
            </label>
          </div>
          <button>로그인</button>
        </Form>
      </main>
      <footer>
        <NavLink to="/admin">취소하고 홈으로 돌아가기</NavLink>
        {/* 취소 / 로그인 */}
      </footer>
    </>
  );
};

export const signInAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    loginId: data.get("id"),
    password: data.get("password"),
  };
  console.log(submission);

  //서버로 id, password를 보내서 있다면 로그인
  //없다면 없다고 띄워주기.

  //post요청
  let response;
  response = await loginPostAPI.post("", submission);
  //ok / fail check
  const responseStatus = response.data;
  console.log(responseStatus);
  if (responseStatus === "ok") {
    //cookie와 관련된 logic

    localStorage.setItem("loginId", submission.id);
    return redirect("/");
  } else {
    return { error: "Wrong login Info" };
  }
};

export default SignIn;
