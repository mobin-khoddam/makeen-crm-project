import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../Container/Login/LoginForm/LoginForm.jsx";
import ForgetPassword from "../Container/Login/ForgetPassword/ForgetPassword.jsx";
import DashboardPage from "../pages/Students/Dashboard/DashboardPage.jsx";
import Page404 from "../pages/Page404.jsx";
import WorkReportPage from "../pages/Students/WorkReport/WorkReportPage.jsx";
import Finance from "../pages/Students/Finance/FinancePage.jsx";
import Messages from "../pages/Students/Messages/Messages.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/messages",
    element: <Messages />,
  },
  {
    path: "/work-report",
    element: <WorkReportPage />,
  },
  {
    path: "/finance",
    element: <Finance />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
