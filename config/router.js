import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  Navigate,
} from "react-router-dom";

import Albums from "../views/Albums";
import Photos from "../views/Photos";
import Header from "../views/Header";
import Users from "../views/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/Albums",
        element: <Albums />,
      },
      {
        path: "/Albums/:id",
        element: <Users />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

function Main() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Router;
