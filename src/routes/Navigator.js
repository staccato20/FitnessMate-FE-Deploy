import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import { Home, Admin } from "../pages/index";
import Signup from "../pages/Signup/Signup";
import { signUpAction } from "../pages/Signup/SignupProfile/SignupProfile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/signup/*" element={<Signup />} action={signUpAction} />
      <Route path="*" element={<div>없는페이지</div>} />
    </Route>
  )
);

const Navigator = (props) => {
  return <RouterProvider router={router} />;
};
export default Navigator;
