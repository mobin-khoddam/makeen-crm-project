import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../Container/Login/LoginForm/LoginForm.jsx";
import ForgetPassword from "../Container/Login/ForgetPassword/ForgetPassword.jsx";
import DashboardPage from "../pages/Students/Dashboard/DashboardPage.jsx";
import Page404 from "../pages/Page404.jsx";
import WorkReportPage from "../pages/Students/WorkReport/WorkReportPage.jsx";
import Finance from "../pages/Students/Finance/FinancePage.jsx";
import Messages from "../pages/Students/LeaveRequest/Messages/Messages.jsx";
import LeaveRequest from "../pages/Students/LeaveRequest/LeaveRequest.jsx";
import PersonalInformation from "../pages/Students/PersonalInformation/PersonalInformation.jsx";
import DashboardMenthor from "../pages/Mentor/Dashboard/DashboardMenthor.jsx";
import Students from "../pages/Mentor/Students/Students.jsx";
import MessagesPage from "../pages/Mentor/Messages/MessagesPage.jsx";


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
    path: "/student/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/student/messages",
    element: <Messages />,
  },
  {
    path: "/student/work-report",
    element: <WorkReportPage />,
  },
  {
    path: "/student/finance",
    element: <Finance />,
  },
  {
    path: "/student/leave-request",
    element: <LeaveRequest />,
  },
  {
    path: "/student/personal-information",
    element: <PersonalInformation />,
  },
  {
    path: "/mentor/dashboard",
    element: <DashboardMenthor />,
  },
  {
    path: "/mentor/students",
    element: <Students />,
  },
  {
    path: "/mentor/messages",
    element: <MessagesPage />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
