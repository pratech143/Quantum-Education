import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Destinations from "../Pages/Destinations";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Alumni from "../Pages/Alumni";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "destinations", element: <Destinations /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "alumni", element: <Alumni /> },
    ],
  },
]);
