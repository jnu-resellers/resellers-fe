import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductFormPage from '../pages/ProductFormPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'product-form',
        element: <ProductFormPage />,
      },
    ],
  },
]);

export default routes;
