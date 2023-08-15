// < 로그인 페이지 >

import { React, useState } from "react";
import * as S from "./StyledLogin";
import { NoneScrollContainerWrapper } from "../../Layout/NoneScrollContainer";
import { BigButtonWrapper } from "../../components/index";
import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import theme from "../../styles/theme";
// import { LoginEmailInput, LoginPWInput } from "./LoginInput";
import { Link } from "react-router-dom";
import { loginPostAPI } from "../../apis/API";
import axios from "axios";


const Login = (props) => {

	// placeholder
	let [isEmailClicked, setIsEmailClicked] = useState(false);
	let [isPWClicked, setIsPWClicked] = useState(false);

	const navigate = useNavigate();

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("");

	const onClickLogin = (e) => {
		e.preventDefault();

		const submission = {
			loginEmail: email,
			password: password,
		}
		console.log(submission);

		loginPostAPI.post("", submission)
			.then((res) => {
				console.log(res.status);
				if (res.status === 200) {
					localStorage.setItem("Jwt", "tmp")
					alert(`로그인 성공`);
					console.log(res.data)
					navigate('/');
				}
			})
			.catch(error => {
				if (error.response.status === 401) {
					alert(`로그인 실패! 정보를 다시 확인해주세요.`);
				}
				if (error.response.code === 400) {
					alert("ID, Password가 비어있습니다.");
				}
				if (error.response.code === 402) {
					alert("Password가 틀립니다.");
				}
			})

	}

	return (
		<NoneScrollContainerWrapper>
			<S.LoginContainer>
				<S.Title>로그인</S.Title>
				<form onSubmit={onClickLogin}>
					<S.InputFrame>
						<S.LoginInput
							type='text' name="email"
							value={email} onChange={(e) => setEmail(e.target.value)}
							onFocus={() => {
								setIsEmailClicked(true);
							}}
							onBlur={() => {
								setIsEmailClicked(false);
							}}
							placeholder={isEmailClicked === true ? "" : "이메일"}
							required />
						<S.LoginInput 
							type='password' name='password' 
							value={password} onChange={(e) => setPassword(e.target.value)}
							onFocus={() => {
								setIsPWClicked(true);
							}}
							onBlur={() => {
								setIsPWClicked(false);
							}}
							placeholder={isPWClicked === true ? "" : "비밀번호"}
							required />
					</S.InputFrame>
					<S.AutomaticLogin>
						<input type="checkbox" />
						자동 로그인
					</S.AutomaticLogin>
					<BigButtonWrapper email={props.email} type="submit">로그인</BigButtonWrapper>
				</form>
				<Link to="/">
					<BigButtonWrapper backcolor={theme.White} fontcolor={theme.Brand}>
						홈으로
					</BigButtonWrapper>
				</Link>
			</S.LoginContainer>
		</NoneScrollContainerWrapper>

	);
};

export default Login;