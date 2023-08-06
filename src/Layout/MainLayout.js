import React from "react";
import { Outlet } from "react-router-dom";
import { MainLayoutWrapper } from "./StyledMainLayout";

const MainLayout = () => {
  return (
    <MainLayoutWrapper>
      <Outlet />
    </MainLayoutWrapper>
  );
};

export default MainLayout;
