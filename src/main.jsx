import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './Routes/Router.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Authprovider } from './Provider/Authprovider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Authprovider>
      <RouterProvider router={router}/>
      
    </Authprovider>
  </React.StrictMode>,
)
