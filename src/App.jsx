import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import SingleProduct from "./components/SingleProduct";
import Navabar from "./components/Navbar";
import Error from "./components/Error";
import SignIn from "./components/SignIn";
import Cart from "./components/Cart";

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
    ],
    errorElement: <Error />,
  },
]);

export default App;
