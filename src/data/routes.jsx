import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Help from "../pages/Help";
import Account from "../pages/Account";
import Cart from "../pages/Cart";
import HomePage from "../pages/homePage";
import Man from "../pages/Man";
import Woman from "../pages/Woman";
import Search from "../pages/Search";

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
        path: 'Man',
        element: <Man />
    },
    {
        path: 'Woman',
        element: <Woman />
    },
    {
        path: 'Search',
        element: <Search />
    }
  ])

export default router;