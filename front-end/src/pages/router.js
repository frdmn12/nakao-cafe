import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProductPage from "./ProductPage";
import RegisterPage from "./AuthPage/Register";
import LoginPage from "./AuthPage/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/products",
    Component: ProductPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
]);
