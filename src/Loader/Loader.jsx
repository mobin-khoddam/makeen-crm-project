import {createBrowserRouter} from "react-router-dom";
import LoginForm from "../Container/Login/LoginForm/LoginForm.jsx";
import ForgetPassword from "../Container/Login/ForgetPassword/ForgetPassword.jsx";
import DashboardPage from "../pages/Students/Dashboard/DashboardPage.jsx";
import Page404 from "../pages/Page404.jsx";
import WorkReportPage from '../pages/Students/WorkReport/WorkReportPage.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginForm />
    },
    {
        path: "/forget-password",
        element: <ForgetPassword/>,
    },
    {
        path: "/dashboard",
        element: <DashboardPage/>,
    },
    {
        path: "/work-report",
        element: <WorkReportPage />,
    },
    {
        path: "*",
        element: <Page404 />,
    },
])

export default router;