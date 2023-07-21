import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import LoginContext from "../Contexts/Login";

//isAdmin이면 로그아웃만 할수있도록
const ShowIfLoggedIn = (props) => {
  const loginCtx = props.loginCtx;

  const handleSignOut = (event) => {
    loginCtx.setIsAdmin(false);
    loginCtx.setIsLoggedIn(false);
    loginCtx.setLoginId("");
    localStorage.setItem("loginId", "");
  };

  return (
    <div>
      <NavLink id="logout" to="admin" onClick={handleSignOut}>
        로그아웃
      </NavLink>
    </div>
  );
};

const ShowIfNonMember = () => {
  return (
    <div>
      <NavLink id="login" to="signin">
        로그인
      </NavLink>
    </div>
  );
};

const RootLayout = (props) => {
  const loginCtx = React.useContext(LoginContext);

  useEffect(() => {
    loginCtx.setIsLoggedIn(true);
    loginCtx.setIsAdmin(true);
    loginCtx.setLoginId("Administrator");
  }, []);
  return (
    <div>
      <header>
        {loginCtx.isLoggedIn || loginCtx.isAdmin ? (
          <ShowIfLoggedIn loginCtx={loginCtx} />
        ) : (
          <ShowIfNonMember />
        )}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
