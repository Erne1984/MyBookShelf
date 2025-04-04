import { createBrowserRouter } from "react-router-dom";

import Home from './pages/Home/Home';
import LoginPage from './pages/Login/LoginPage';
import SignUp from "./pages/SignUp/SignUp";
import BookPage from "./pages/BookPage/BookPage";
import UserPage from "./pages/UserPage/UserPage";
import AuthorPage from "./pages/AuthorPage/AuthorPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import UserListsPage from "./pages/UserListsPage/UserListsPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import UserConfigPage from "./pages/UserConfigPage/UserConfigPage";
import UserVisitingPage from "./pages/UserVisitingPage/UserVisitingPage";

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
        path: "/user/:userId/lists", 
        element: <UserListsPage /> 
    },
    {
        path: "/user/:userId/config", 
        element: <UserConfigPage /> 
    },
    {
        path: "/userVisiting/:userId", 
        element: <UserVisitingPage /> 
    },
    {
        path: "/book/:bookISBN", 
        element: <BookPage /> 
    },
    {
        path: "/author/:authorKey",
        element: <AuthorPage/>
    },
    {
        path: "/search/:query",
        element: <SearchPage/> 
    },
    {
        path: "/aboutUs",
        element: <AboutUsPage/> 
    }
]);

export default appRoutes;