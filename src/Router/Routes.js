import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Pages/Home/Home/Home";
import Review from "../components/Pages/Home/Review/Review";
import AllServices from "../components/Pages/Home/Service/AllServices";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'review',
                element: <Review></Review>
            },
            {
                path: 'allservices',
                element: <AllServices></AllServices>
            }
        ]
    }
])

export default routes;