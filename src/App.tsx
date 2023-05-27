import React from "react";
import Navbar from "./Navigation/Navbar";
import './css/style.scss'
import Generator from "./Generator/Generator";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Error Page/Errorpage";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      errorElement: <ErrorPage />,
      children:[
      {
        path :"/",
        element: <Generator/>,
        errorElement: <ErrorPage />,
      }]
      // {
      //   path :"/sobre",
      //   element: <Sobre/>,
      //   errorElement: <ErrorPage />,
      // }
      // ],
    },
  ]);
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}
