import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LoginPage />
    }
  ]);

  return (
    <>
      <Header />

      <RouterProvider router={router} />

      <Footer />

    </>
  )
}

export default App