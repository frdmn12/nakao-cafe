import {createBrowserRouter} from "react-router-dom"
import LandingPage from "./LandingPage"
import ProductPage from "./ProductPage"

export const router =  createBrowserRouter([
    {
        path : "/",
        Component : LandingPage
    },
    {
        path : "/product",
        Component : ProductPage
    },
])