import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { PurchasePage } from "../pages/Purchase.page";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "purchase",
        element: <PurchasePage />,
      },
    ],
  },
]);

export default routes;
