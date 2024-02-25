import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './Components/About.jsx';
import './index.css'
import RootLayout from './RootLayout.jsx';
import Product from './Components/Product.jsx';
import Error from './Components/Error.jsx';
import Home from './Home.jsx'


import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/product/:productid" element={<Product/>} />
      <Route path="*" element={<Error/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} /> 
  </React.StrictMode>,
)
