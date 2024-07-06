import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import ProductPage from "./ProductPage/ProductPage";
import RegisterPage from "./AuthPage/Register/RegisterPage";
import LoginPage from "./AuthPage/Login/LoginPage";
import CartPage from "./CartPage/CartPage";

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
  {
    path : '/cart',
    Component: CartPage
  }
]);
