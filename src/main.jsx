import { StrictMode ,lazy,Suspense} from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
//import About from "./components/About.jsx";
import Body from "./components/Body.jsx";
import Error from "./components/Error.jsx";
import Home from "./components/Home.jsx";
import Contactus from "./components/Contactus.jsx";
import Restaurantmenu from "./components/Restaurantmenu.jsx";
import Shimmer from "./components/Shimmer.jsx";
import Cart from "./components/Cart.jsx";

const About=lazy(()=>import("./components/About.jsx"))

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<Shimmer/>}><About /></Suspense>,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/restaurant/:resId",
        element:<Restaurantmenu />
      }
    ],
    errorElement:<Error/>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={approuter} />
  </StrictMode>
);
