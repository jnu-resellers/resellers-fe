import { createBrowserRouter } from 'react-router-dom';
import { PurchasePage } from '../pages/Purchase.page';
import App from '../App';
import ProductFormPage from '../pages/ProductFormPage';
import TransactionInformationPage from '@/pages/TransactionInformationPage';
import MainPage from '@/pages/MainPage';
import { AuctionPurchasePage } from '@/pages/AuctionPurchase.page';
import AuctionListPage from '@/pages/AuctionListPage';
import AuctionFormPage from '../pages/AuctionFormPage';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';
import InfoPage from '@/pages/InfoPage';
import { DeliveryPartnerPage } from '@/pages/DeliveryPartnerPage';

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
        path: 'transaction-information/:id',
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
      {
        path: `signin`,
        element: <SignInPage />,
      },
      {
        path: `signup`,
        element: <SignUpPage />,
      },
      {
        path: `community`,
        element: <InfoPage />,
      },
      {
        path: `delivery-partner`,
        element: <DeliveryPartnerPage />,
      },
    ],
  },
]);
export default routes;
