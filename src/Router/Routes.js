import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Pages/Home/Home/Home";
import EditReview from "../components/Pages/Home/Review/EditReview";
import MyReview from "../components/Pages/Home/Review/MyReview";
import AddService from "../components/Pages/Home/Service/AddService";
import AllServices from "../components/Pages/Home/Service/AllServices";
import Details from "../components/Pages/Home/Service/Details";
import ServiceDetails from "../components/Pages/Home/Service/ServiceDetails";
import Login from "../components/Pages/Login/Login";
import Signup from "../components/Pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";

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
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
            {
                path: 'addservice',
                element: <AddService></AddService>
            },
            {
                path: 'myreviews',
                element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            },
            {
                path: '/editreview/:id',
                element: <EditReview></EditReview>
            }
        ]
    }
])

export default routes;