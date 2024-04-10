import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductFormPage from '../pages/ProductFormPage';
import MainPage from '@/pages/MainPage';

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
        path: '',
        element: <MainPage />,
      },
    ],
  },
]);

export default routes;
