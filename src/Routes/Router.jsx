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
import { Authprovider } from "../Provider/Authprovider";
import Updatebook from "../Components/Updatebook";
import Mybooks from "../Pages/Mybooks/Mybooks";

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
            element: <Privaterout><Addbooks/></Privaterout>
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
          element: <Privaterout><Bookdeails/></Privaterout>,
          loader: async ({params}) => {
            const bookId = params.id;
            if (!bookId) {
              // Handle the case when id is undefined
              console.error('Book ID is undefined');
              return Promise.resolve(null); // or handle it as needed
            }
            return await fetch(`http://localhost:5000/book/${bookId}`).then((res) => res.json());
          }
        },
        {
          path: "/update/:id",
          element: <Privaterout><Updatebook/></Privaterout> ,
          loader: async ({params}) => {
            const bookId = params.id;
            if (!bookId) {
              // Handle the case when id is undefined
              console.error('Book ID is undefined');
              return Promise.resolve(null); // or handle it as needed
            }
            return await fetch(`http://localhost:5000/book/${bookId}`).then((res) => res.json());
          }
        },
        {
          path: "/mybooks/:email",
          element: <Privaterout><Mybooks/></Privaterout> ,
          
        }
      ]
    },
  ]);

  export default router;