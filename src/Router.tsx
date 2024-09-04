import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/LoginPage';

const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/user:userId",
       
    }
]);

export default appRoutes;
