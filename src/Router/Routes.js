import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Pages/Home/Home/Home";
import Review from "../components/Pages/Home/Review/Review";
import AllServiceDetails from "../components/Pages/Home/Service/AllServiceDetails";
import AllServices from "../components/Pages/Home/Service/AllServices";
import Details from "../components/Pages/Home/Service/Details";
import ServiceDetails from "../components/Pages/Home/Service/ServiceDetails";

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
            },
            {
                path: '/servicedetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path: 'del',
                element: <Details></Details>
            }
        ]
    }
])

export default routes;