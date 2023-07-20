import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Home from "../components/Home";
import Blog from "../Blog";
import ChefDetails from "../components/ChefDetails/ChefDetails";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";





const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/chef')
            },
            {
                path: ':id',
                element: <ChefDetails />
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