import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { App } from './App';
import { DripStoreLogin } from './components/DripStoreLogin/DripStoreLogin';
import './resets.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <DripStoreLogin />
      },
      {
        path: 'cadastrar',
        element: <div>Cadastrar</div>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
