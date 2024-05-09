import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <>
      <Body />
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/SingleProduct/:id",
    element: <SingleProduct />,
  },
]);

export default App;
