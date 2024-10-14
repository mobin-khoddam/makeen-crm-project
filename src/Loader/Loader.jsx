import {createBrowserRouter} from "react-router-dom";
import LoginForm from "../Container/Login/LoginForm/LoginForm.jsx";
import LoginPage from "../pages/Login/LoginPage.jsx";
import ForgetPassword from "../Container/Login/ForgetPassword/ForgetPassword.jsx";
import DashboardPage from "../pages/Students/Dashboard/DashboardPage.jsx";
import Page404 from "../pages/Page404.jsx";
import WorkReportPage from "../pages/Students/WorkReport/WorkReportPage.jsx";
import OriginalTemplatePage from "../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import ReportCardPage from "../Container/Students/WorkReport/WorkReportBar/ReportCardPage/ReportCard.jsx";
import AddWorkReportPage from "../Container/Students/WorkReport/WorkReportBar/AddWorkReportPage/AddWorkReportPage.jsx";
import SeeWorkReportListPage
    from "../Container/Students/WorkReport/WorkReportBar/SeeWorkReportsPage/SeeWorkReportsListPage.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage><LoginForm /></LoginPage>
    },
    {
        path: "/forget-password",
        element: <LoginPage><ForgetPassword/></LoginPage>,
    },
    {
        path: "/dashboard",
        element: <DashboardPage/>,
    },
    {
      path: "/work-report/add",
      element: <WorkReportPage><AddWorkReportPage /></WorkReportPage>,
    },
    {
        path: "/work-report/see-reports",
        element: <WorkReportPage><SeeWorkReportListPage /></WorkReportPage>,
    },
    {
        path: "/work-report/report-card",
        element: <WorkReportPage><ReportCardPage /></WorkReportPage>
    },
    {
        path: "*",
        element: <Page404 />,
    },
])

export default router;