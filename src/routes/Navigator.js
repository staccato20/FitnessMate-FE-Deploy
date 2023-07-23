import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "../Layout/RootLayout";
import Admin from "./../pages/Admin/Admin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="admin" element={<Admin />} />
    </Route>
  )
);

const Navigator = (props) => {
  return <RouterProvider router={router} />;
};

export default Navigator;
