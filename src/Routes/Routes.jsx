import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Home from "../components/Home";
import ChefDetails from "../components/ChefDetails/ChefDetails";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "./PrivateRoute";





const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://chef-recipe-hunter-server-rakibmahmud139.vercel.app/chef')
            },
            {
                path: 'chef/:id',
                element: <PrivateRoute><ChefDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-rakibmahmud139.vercel.app/chef/${params.id}`)
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
])



export default router;