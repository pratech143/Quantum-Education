import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Destinations from "../Pages/Destinations";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Alumni from "../Pages/Alumni";
import Country from "../Pages/Country";
import UniversityDetails from "../Pages/UniversityDetails";
import Certifications from "../Pages/Certifications";
import AdminLayout from "../admin/AdminLayout";
import Login from "../admin/pages/Login";
import Dashboard from "../admin/pages/Dashboard";
import AdminManagement from "../admin/pages/AdminManagement";
import ContactMessages from "../admin/pages/ContactMessages";
import Profile from "../admin/pages/Profile";
import DestinationsManagement from "../admin/pages/DestinationsManagement";
import UniversitiesManagement from "../admin/pages/UniversitiesManagement";
import AlumniManagement from "../admin/pages/AlumniManagement";
import { AuthProvider } from "../admin/AuthContext";

const AdminWrapper = () => (
  <AuthProvider>
    <AdminLayout />
  </AuthProvider>
);

const LoginWrapper = () => (
  <AuthProvider>
    <Login />
  </AuthProvider>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "destinations", element: <Destinations /> },
      { path: "countries", element: <Destinations /> },
      { path: "countries/:countryName", element: <Country /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "alumni", element: <Alumni /> },
      { path: "certifications", element: <Certifications /> },
      { path: "universities/:slug", element: <UniversityDetails /> },
    ],
  },
  {
    path: "/admin/login",
    element: <LoginWrapper />,
  },
  {
    path: "/admin",
    element: <AdminWrapper />,
    children: [
      { index: true, element: <Navigate to="/admin/dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "admins", element: <AdminManagement /> },
      { path: "messages", element: <ContactMessages /> },
      { path: "destinations", element: <DestinationsManagement /> },
      { path: "universities", element: <UniversitiesManagement /> },
      { path: "alumni", element: <AlumniManagement /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);
