import { createBrowserRouter } from 'react-router-dom';
import { PurchasePage } from '../pages/Purchase.page';
import App from '../App';
import ProductFormPage from '../pages/ProductFormPage';
import TransactionInformationPage from '@/pages/TransactionInformationPage';
import MainPage from '@/pages/MainPage';
import { AuctionPurchasePage } from '@/pages/AuctionPurchase.page';
import AuctionListPage from '@/pages/AuctionListPage';
import AuctionFormPage from '../pages/AuctionFormPage';

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
        path: 'purchase/:id',
        element: <PurchasePage />,
      },
      {
        path: 'auction-purchase/:id',
        element: <AuctionPurchasePage />,
      },
      {
        path: 'auction',
        element: <AuctionListPage />,
      },
      {
        element: <AuctionFormPage />,
        path: 'auction-form',
      },
    ],
  },
]);
export default routes;
