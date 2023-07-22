import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import LoginContext from "../Contexts/Login";

const RootLayout = (props) => {
  const loginCtx = React.useContext(LoginContext);

  useEffect(() => {
    loginCtx.setIsLoggedIn(true);
    loginCtx.setIsAdmin(true);
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
