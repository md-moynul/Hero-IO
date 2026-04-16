import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import AppsPage from "../pages/apps/AppsPage";
import InstallationsPage from "../pages/installations/InstallationsPage";


export const router = createBrowserRouter([
    {
        path: '/',
      Component : MainLayout,
      children: [
        {
            index :true,
            Component : HomePage
        },
        {
          path : 'apps',
          Component : AppsPage
        },
        {
          path : 'installations',
          Component : InstallationsPage
        }
      ],
      errorElement : <h2 className="text-red-500">404 error </h2>
    }
])