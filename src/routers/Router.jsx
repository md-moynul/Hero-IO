import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import AppsPage from "../pages/apps/AppsPage";
import InstallationsPage from "../pages/installations/InstallationsPage";
import ErrorPage from "../pages/error/ErrorPage";
import AppDetails from "../pages/appDetails/AppDetails";


export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: 'apps/:appId',
        Component: AppDetails
      },
      {
        path: 'apps',
        Component: AppsPage
      },
      {
        path: 'installations',
        Component: InstallationsPage
      }
    ],
    errorElement: <ErrorPage />
  }
])