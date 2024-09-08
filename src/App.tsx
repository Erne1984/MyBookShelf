import './App.css';

import { RouterProvider } from "react-router-dom";
import appRoutes from './Router';

import Footer from './layouts/Footer/Footer';

function App() {

  return (
    <>

      <RouterProvider router={appRoutes} />

      <Footer />

    </>
  )
}

export default App