import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  import Layout from "./layout/Layout";
  import HomePage from "./pages/HomePage";
  
  export const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
        </Route>
      </>
    )
  );