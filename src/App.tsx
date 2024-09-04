import './App.css';

import { RouterProvider } from "react-router-dom";
import appRoutes from './Router';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';


function App() {

  return (
    <>
      <Header />

      <RouterProvider router={appRoutes} />

      <Footer />

    </>
  )
}

export default App