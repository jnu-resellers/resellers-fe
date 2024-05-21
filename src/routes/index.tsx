import { createBrowserRouter } from 'react-router-dom';
import { PurchasePage } from '../pages/Purchase.page';
import App from '../App';
import ProductFormPage from '../pages/ProductFormPage';
import TransactionInformationPage from '@/pages/TransactionInformationPage';
import MainPage from '@/pages/MainPage';
import AuctionListPage from '@/pages/AuctionListPage';

const routes = createBrowserRouter([
  {
    path: '/',
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
        path: '',
        element: <MainPage />,
      },
      {
        path: 'purchase',
        element: <PurchasePage />,
      },
      {
        path: 'auction',
        element: <AuctionListPage />,
      },
    ],
  },
]);
export default routes;
