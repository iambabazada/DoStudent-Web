import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import Home from "../pages/home/Home"

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },

]

export default routes