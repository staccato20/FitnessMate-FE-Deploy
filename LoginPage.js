// < 로그인 페이지 >

import { React, useEffect, useState } from "react";
import * as S from "./StyledLogin";
import { NoneScrollContainerWrapper } from "../../Layout/NoneScrollContainer";
import { BigButtonWrapper } from "../../components/index";
import { Form, redirect, useActionData } from "react-router-dom";
import theme from "../../styles/theme";
// import { LoginEmailInput, LoginPWInput } from "./LoginInput";
import { Link } from "react-router-dom";
import { loginPostAPI } from "../../apis/API";
import axios from "axios";


const LoginPage = () => {
	// const [isEmailClicked, setIsEmailClicked] = useState(false);
	// const [isPWClicked, setIsPWClicked] = useState(false);

	useEffect(() => {
		console.log("LoginPage render ... ");
	})

	return (
		<NoneScrollContainerWrapper>
			<S.LoginContainer>
				<S.Title>로그인</S.Title>
				<Form method="post" action="/login">
					<S.InputFrame>
						<S.LoginInput placeholder="아이디" type='text' name="email" required ></S.LoginInput>
						<S.LoginInput placeholder="비밀번호" type='password' name='password' required ></S.LoginInput>
					</S.InputFrame>
					<S.AutomaticLogin>
						<input type="checkbox" />
						자동 로그인
					</S.AutomaticLogin>
					<BigButtonWrapper onClick={joinHandler} type="submit">로그인</BigButtonWrapper>
				</Form>
				<Link to="/">
					<BigButtonWrapper backcolor={theme.White} fontcolor={theme.Brand}>
						홈으로
					</BigButtonWrapper>
				</Link>
			</S.LoginContainer>
		</NoneScrollContainerWrapper>

	);
};


export default LoginPage;

export const joinHandler = async ({ request, props }) => {

		const submission = await request.formData();
 
		const data = {
			loginEmail: submission.get('email'),
			password: submission.get('password'),
		}
	 console.log(data);

		try {
			axios.post("/api/login/", JSON.stringify(data), {
				headers: {
					"Content-Type": `application/json`,
				}
			})
				.then(res => {
					console.log("res.data.accessToken : " + res.data);
					axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
					props.loginCallBack(true);
					props.history.push("/");
				})
				.catch(ex => {
					console.log("login requset fail : " + ex);
				})
				.finally(() => { console.log("login request end") });
		} catch (e) {
			console.log(e);
		}
	
};
