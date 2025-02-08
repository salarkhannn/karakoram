import { createBrowserRouter } from "react-router-dom";
import Help from "../pages/Help";
import Cart from "../pages/Cart";
import HomePage from "../pages/homePage";
import Shop from "../pages/Shop";
import Search from "../pages/Search";
import Product from "../pages/Product";

import top from "../productData/hoodies";
import About from "../pages/About";

const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/help',
      element: <Help />
    },
    {
      path: '/cart',
      element: <Cart />
    },
    {
      path: '/shop',
      element: <Shop />
    },
    {
      path: '/search',
      element: <Search />
    },
    {
      path: '/product/:id',
      element: <Product/>
    },
    {
      path: '/about',
      element: <About />
    }
  ])

export default router;