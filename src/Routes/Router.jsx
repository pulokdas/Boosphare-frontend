import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Addbooks from "../Pages/Add book/Addbooks";
import Allbooks from "../Pages/All Books/Allbooks";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Privaterout from "./Privaterout";
import Bookdeails from "../Pages/BookDetails/Bookdeails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path: "/",
            element:<Home/>,
            loader: ()=> fetch('http://localhost:5000/allbooks')
        },
        {
            path:"/allbooks",
            element: <Privaterout><Allbooks/></Privaterout>,
            loader: ()=> fetch('http://localhost:5000/allbooks')
        },
        {
            path: "/addbooks",
            element: <Addbooks/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
          path: "/book/:id",
          element: <Bookdeails/>,
          loader: (params)
        }
      ]
    },
  ]);

  export default router;