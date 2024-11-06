import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import GadgetCards from "../Components/GadgetCards";
import Home from "../Components/Home";
import MainLayout from "../layout/MainLayout";
import DashBoard from "../Pages/Dashboard";
import GadgetDetails from "../Pages/GadgetDetails";
import Gadgets from "../Pages/gadgets";
import Statistics from "../Pages/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<ErrorPage/>,
    
    children:[
      {
        path:"/",
        element: <Home />, 
        loader: ()=> fetch('../categories.json'),
          children:[
            {
              path:"/",
              element: <GadgetCards/>,
              loader:()=> fetch('../gadgets.json'),
            },
            {
              path:"/category/:category",
              element: <GadgetCards/>,
              loader:()=> fetch('../gadgets.json'),
            },
          ]
      },
      {
        path:"/gadgets",
        element: <Gadgets/>,
        loader:()=> fetch('../gadgets.json'),
    
      },
      {
        path:"/dashboard",
        element: <DashBoard/>, 
    
      },
      {
        path:"/gadget/:product_id",
        element: <GadgetDetails/>, 
        loader:()=> fetch('../gadgets.json'),
    
      },
      {
        path:"/statistics",
        element: <Statistics />, 
    
      },
      
    ]
  },
]);
export default router