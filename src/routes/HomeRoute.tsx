import path from "@/constants/path";
import Home from "@/pages/Home";
import Login from "@/pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AuthPageRoute from "./AuthPageRoute";

const HomeRoutes = [
  {
    path: path.HOME,
    element: <Home />,
  },
  {
    path: path.LogIn,
    element: <AuthPageRoute element={Login} />,
  },
  {
    path: path.Register,
    element: <AuthPageRoute element={Register} />,
  }
];

export default HomeRoutes;
