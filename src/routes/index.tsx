import { createBrowserRouter } from 'react-router-dom';
import { PurchasePage } from "../pages/Purchase.page";
import App from '../App';
import ProductFormPage from '../pages/ProductFormPage';
import TransactionInformationPage from '@/pages/TransactionInformationPage';

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
        path: 'transaction-information',
        element: <TransactionInformationPage />,
      },
      {
        path: "purchase",
        element: <PurchasePage />,
      },
      },
    ],
  },
]);

export default routes;
