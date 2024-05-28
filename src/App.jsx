import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import SingleProduct from "./components/SingleProduct";
import Navabar from "./components/Navbar";
import Error from "./components/Error";
import SignIn from "./components/SignIn";
import Cart from "./components/Cart";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Navabar />
      <SignIn />
      <Outlet />
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/SingleProduct/:id",
        element: <SingleProduct />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/SearchRestaurant",
        element: <Search />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
