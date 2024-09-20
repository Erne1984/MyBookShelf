import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/LoginPage';
import SignUp from "./pages/SignUp/SignUp";
import BookPage from "./pages/BookPage/BookPage";
import UserPage from "./pages/UserPage/UserPage";


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
        path: "/signUp",
        element: <SignUp />
    },
    {
        path: "/user/:userId", 
        element: <UserPage /> 
    },
    {
        path: "/book/:bookISBN", 
        element: <BookPage /> 
    },
]);

export default appRoutes;