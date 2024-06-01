import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import routes from './routes/index.tsx';

const enableMocking = async () => {
  if (import.meta.env.PROD) {
    return;
  }
};

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  );
});
