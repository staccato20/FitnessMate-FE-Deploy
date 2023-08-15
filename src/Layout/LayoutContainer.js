// < 네브바 포함 레이아웃 >

import React, { useEffect } from "react";
import * as S from "./StyledLayoutContainer";
import LoginContext from "../Contexts/login-context";
import { Link, Outlet } from "react-router-dom";

// const ShowIfLoggedIn = (props) => {
// 	const loginCtx = props.loginCtx;

// 	const handleSignOut = (event) => {
// 		loginCtx.setIsAdmin(false);
// 		loginCtx.setIsLoggedIn(false);
// 		loginCtx.setLoginEmail("");
// 		localStorage.setItem("loginEmail", "");
// 	}

// 	return (
// 		<S.LayoutContainer>
// 			<div class="navigation">
// 				<S.NavLogo>
// 					<Link to="/">
// 						<div class="nav-logo"></div>
// 					</Link>
// 				</S.NavLogo>

// 				<S.NavLink>
// 					<Link to="/">
// 						<S.NavText>검색하기</S.NavText>
// 					</Link>
// 					<Link to="/">
// 						<S.NavText>추천받기</S.NavText>
// 					</Link>
// 					<Link to="/">
// 						<S.NavText>내 운동</S.NavText>
// 					</Link>
// 					<Link to="/">
// 						<S.NavText onClick={handleSignOut}>로그아웃</S.NavText>
// 					</Link>
// 				</S.NavLink>
// 			</div>
// 			<Outlet />
// 		</S.LayoutContainer>
// 	);

// }

// export const RootLayout = (props) => {

// 	const loginCtx = React.useContext(LoginContext);

// 	useEffect(() => {
// 		if (localStorage.getItem("loginEmail") !== "") {
// 			loginCtx.setIsLoggedIn(true);
// 			loginCtx.setLoginId(localStorage.getItem("loginEmail"));
// 		}
// 	}, []);

// 	return (
// 		<div>
// 			<header>
// 				{(loginCtx.isLoggedIn || loginCtx.isAdmin) ?
// 					<ShowIfLoggedIn loginCtx={loginCtx} /> : <LayoutContainer />}
// 			</header>
// 		</div>
// 	);
// };


export const LayoutContainer = () => {
	return (
		<S.LayoutContainer>
			<div class="navigation">
				<S.NavLogo>
					<Link to="/">
						<div class="nav-logo"></div>
					</Link>
				</S.NavLogo>

				<S.NavLink>
					<Link to="/">
						<S.NavText>검색하기</S.NavText>
					</Link>
					<Link to="/">
						<S.NavText>추천받기</S.NavText>
					</Link>
					<Link to="/">
						<S.NavText>내 운동</S.NavText>
					</Link>
					<Link to="/login">
						<S.NavText className="login">로그인</S.NavText>
					</Link>
				</S.NavLink>
			</div>
			<Outlet />
		</S.LayoutContainer>
	);
}

export default LayoutContainer;