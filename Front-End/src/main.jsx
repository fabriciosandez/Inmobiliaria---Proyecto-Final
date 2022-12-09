import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./Pages/Home/Homepage";
import PropertyUpload from "./Pages/Upload/PropertyUpload";
import SiteConstruction from "./Pages/UnderConstruction/UnderConstruction";
import Error404 from "./Components/Error/Error404";
import Descripcion from "./Components/Descripcion/Descripcion";
import RealEstatePage from "./Pages/RealEstate/RealEstatePage";
import Empresa from "./Pages/Nosotros/Nosotros";

const ProtectedRoutes = ({children})=>{
 const token = localStorage.getItem("token")
if(!token) {return(<Navigate to="/"></Navigate>)}
return( children )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Error404 />,
  },
  {
    path: "upload",
    element: <ProtectedRoutes><PropertyUpload /></ProtectedRoutes>,
  },
  {
    path: "underconstruction",
    element: <SiteConstruction />,
  },
  {
    path: "inmueble/:id",
    element: <Descripcion />,
  },
  {
    path: "/propiedades",
    element: <RealEstatePage />,
  },
  {
    path: "/empresa",
    element: <Empresa/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
