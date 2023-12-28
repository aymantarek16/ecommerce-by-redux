import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/cart/Cart";
import ProductDetails from "./pages/details/Product-details";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>

      <Route index element={<Home />} />
      <Route path="ProductDetails/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />

      <Route path="*" element={<NotFound />} />

    </Route>
  )
);



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
