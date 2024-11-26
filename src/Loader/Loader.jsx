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
import StudentSinglePage from "../pages/Mentor/Students/StudentSinglePage.jsx";
import AdminReportPage from "../pages/Admin/ReportPage/AdminReportPage.jsx";
import ReportSingle from "../Container/Admin/Report/ReportSingle.jsx";
import LeaveRequestPage from "../pages/Admin/Leave-Request/LeaveRequestPage.jsx";
import LeaveRecords from "../pages/Admin/Dashboard/LeaveRecords/LeaveRecords.jsx";
import AdminDashboard from "../pages/Admin/Dashboard/AdminDashboard.jsx";
import AdminMentorsPage from "../pages/Admin/Mentors/AdminMentorsPage.jsx";
import StudentsPage from "../pages/Admin/Students/StudentsPage.jsx";
import SendNotificationPage from "../pages/Admin/SendNotification/SendNotificationPage.jsx";
import AdminFinancePage from "../pages/Admin/Finance/AdminFinancePage.jsx";
import * as path from "node:path";
import StudentsInformationTabBar from "../pages/Admin/Students/StudentsInformation/StudentsInformationTabBar.jsx";

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
    path: "/mentor/students/:student",
    element: <StudentSinglePage />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/dashboard/leave-records",
    element: <LeaveRecords />,
  },
  {
    path: "/admin/work-report-and-report-card",
    element: <AdminReportPage />,
  },
  {
    path: "/admin/work-report-and-report-card/:fullName",
    element: <ReportSingle />,
  },
  {
    path: "/admin/leave-request",
    element: <LeaveRequestPage />,
  },
  {
    path: "/admin/students",
    element: <StudentsPage />,
  },
  {
    path: "/admin/mentors",
    element: <AdminMentorsPage />,
  },
  {
    path: "/admin/send-notification",
    element: <SendNotificationPage />,
  },
  {
    path: "/admin/financial-affairs",
    element: <AdminFinancePage />,
  },
  {
    path: "/admin/students/:id",
    element: <StudentsInformationTabBar />
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
