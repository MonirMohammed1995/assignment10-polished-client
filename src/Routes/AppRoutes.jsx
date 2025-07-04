import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddPlant from "../pages/AddPlant";
import AllPlants from "../pages/AllPlants";
import MyPlants from "../pages/MyPlants";
import PlantDetail from "../pages/PlantDetail";
import UpdatePlant from "../pages/UpdatePlant";
import Error404 from "../pages/Error404";
import PrivateRoute from "./PrivateRoute";
import MainLayouts from "../layouts/MainLayouts";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <Error404 />,
    children: [
      { 
        path: "/", 
        loader:()=>fetch('https://plantcare-tracker-server.vercel.app/plants'),
        element: <Home /> 
      },
      { 
        path: "/login", 
        element: <Login /> 
      },
      { 
        path: "/register", 
        element: <Register /> 
      },
      { 
        path: "/all-plants",
        loader:()=>fetch('https://plantcare-tracker-server.vercel.app/plants'), 
        element: <AllPlants /> 
      },
      {
        path:"/dashboard",
        element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
        children:[
          {
            path:'/dashboard/my-plants',
            element:<MyPlants/>
          },
          {
            path:'/dashboard/add-plant',
            element:<AddPlant/>
          },
          {
            path:'/dashboard/all-plants',
            loader:()=>fetch('https://plantcare-tracker-server.vercel.app/plants'),
            element:<AllPlants/>
          },
        ]
      },
      {
        path: "/add-plant",
        element: <PrivateRoute><AddPlant /></PrivateRoute>,
      },
      {
        path: "/my-plants",
        element: <PrivateRoute><MyPlants /></PrivateRoute>,
      },
      {
        path: "/plants/:id",
        loader:()=>fetch('https://plantcare-tracker-server.vercel.app/plants'),
        element: <PrivateRoute><PlantDetail /></PrivateRoute>,
      },
      {
        path: "/update-plant/:id",
        element: <PrivateRoute><UpdatePlant /></PrivateRoute>,
      },
    ],
  },
]);

export default router;