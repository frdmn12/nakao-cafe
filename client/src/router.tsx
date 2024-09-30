import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import LoginPage from "./pages/AuthPage/LoginPage";
import SignUpPage from "./pages/AuthPage/SignUpPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/shop-coffe" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
    </>
  )
);
