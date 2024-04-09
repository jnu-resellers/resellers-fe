import { createBrowserRouter } from 'react-router-dom';
import { PurchasePage } from "../pages/Purchase.page";
import App from '../App';
import ProductFormPage from '../pages/ProductFormPage';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'product-form',
        element: <ProductFormPage />,
      },
      {
        path: "purchase",
        element: <PurchasePage />,
      },
    ],
  },
]);

export default routes;
