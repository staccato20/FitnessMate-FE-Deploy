import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "../Layout/RootLayout";
import SignIn from "../pages/SignIn/SignIn";
import { signInAction } from "./../pages/SignIn/SignIn";
import Admin from "./../pages/Admin/Admin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="admin" element={<Admin />} />
      <Route path="signIn" element={<SignIn />} action={signInAction} />
    </Route>
  )
);

const Navigator = (props) => {
  return <RouterProvider router={router} />;
};

export default Navigator;
