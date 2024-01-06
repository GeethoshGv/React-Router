import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import Hero from "./components/hero/Hero.jsx";
import Category from "./components/about/Category.jsx";
import Nope from "./components/notfound/Nope.jsx";
import Feature from "./components/feature/Feature.jsx";
import Product from "./components/detalis/Product.jsx";
import Mobile from "./components/category/Mobile.jsx";
import Cartdetalis from "./components/category/Cartdetalis.jsx";
import CartFashion from "./components/category/CartFashion.jsx";
import Fashion from "./components/category/Fashion.jsx";
import Electronics from "./components/category/Electronics.jsx";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./Mock.js";
import Cart from "./components/cart/Cart.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Hero />} />
      <Route path="feature" element={<Feature />} />
      <Route path="feature/:id" element={<Product />} />
      <Route path="category" element={<Category />}>
        <Route path="mobile" element={<Mobile />} />
        <Route path="fashion" element={<Fashion />} />
        <Route path="electronic" element={<Electronics />} />
        <Route path="mobile/:id" element={<Cartdetalis />} />
        <Route path="fashion/:id" element={<CartFashion />} />
      </Route>
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<Nope />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
