// < 로그인 페이지 >

import { React, useState } from "react";
import * as S from "./StyledLogin";
import { NoneScrollContainerWrapper } from "../../Layout/NoneScrollContainer";
import { BigButtonWrapper } from "../../components/index";
import { useNavigate } from "react-router-dom";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";
import { loginPostAPI, userAPI } from "../../apis/API";

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
		console.log(submission.loginEmail);

		loginPostAPI.post("", submission)
		userAPI.get("", submission)
			.then((res) => {
				console.log(res.status);
				if (res.status === 200) {
					localStorage.setItem("Jwt", "tmp")
					userAPI.get("", submission)
					.then((data) => {
						console.log(data.data.loginEmail);
						if (submission.loginEmail === data.data.loginEmail) {
							alert(`로그인 성공`);
								console.log(data.data)
						} else {
							alert("입력하신 이메일은 존재하지 않습니다.");
							console.log(data.data)
						}
					})
				}
			})
			.catch(error => {
				if (error.response.status === 401) {
					alert(`로그인 실패! 정보를 다시 확인해주세요.`);
				}
				else {
					alert(`로그인 실패! 정보를 다시 확인해주세요.`);
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