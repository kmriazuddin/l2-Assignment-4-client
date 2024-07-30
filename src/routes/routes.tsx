import App from "@/App";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import CheckOut from "@/pages/OrderProcess/CheckOut";
import OrderConfirmed from "@/pages/OrderProcess/OrderConfirmed";
import ProductManage from "@/pages/ProductManage";
import AllProducts from "@/pages/products/AllProducts";
import Cart from "@/pages/products/Cart";
import SingleProduct from "@/pages/products/SingleProduct";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product-manage",
        element: <ProductManage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/order-confirmed",
        element: <OrderConfirmed />,
      },
    ],
  },
]);

export default router;
