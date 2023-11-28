import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Addbooks from "../Pages/Add book/Addbooks";
import Allbooks from "../Pages/All Books/Allbooks";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path: "/",
            element:<Home/>
        },
        {
            path:"/allbooks",
            element: <Allbooks/>
        },
        {
            path: "/addbooks",
            element: <Addbooks/>
        }
      ]
    },
  ]);

  export default router;