import WorkReportPage from "../../../../../pages/Students/WorkReport/WorkReportPage.jsx";
import ReportCardChart from "./ReportCartChart/ReportCartChart.jsx";
import ReportCartStats from "./ReportCartStats/ReportCartStats.jsx";
import MonthReportCardPage from "./MonthReportCard/MonthReportCard.jsx";
import ReportCardMessages from "./ReportCardMessages/ReportCardMessages.jsx";

const ReportCardPage = () => {
    return (
        <WorkReportPage>
            <MonthReportCardPage />
           <div className="w-full bg-white rounded-2xl">
               <ReportCartStats />
               <div className="px-12 pb-9">
                   <ReportCardChart />
                   <ReportCardMessages />
               </div>
           </div>
        </WorkReportPage>
    )
}

export default ReportCardPage

