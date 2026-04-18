import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom';
import { router } from './routers/Router';
import InstalledAppProvider from './context/InstalledAppProvider';
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstalledAppProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </InstalledAppProvider>
  </StrictMode>

)
