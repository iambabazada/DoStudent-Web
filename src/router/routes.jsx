import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import Home from "../pages/home/Home"
import Vacancies from "../pages/vacancies/Vacancies"

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/vacancies",
        element: <Vacancies />
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