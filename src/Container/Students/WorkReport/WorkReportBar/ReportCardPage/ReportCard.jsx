import MonthReportCardPage from "./MonthReportCard/MonthReportCard.jsx";
import ReportCardMessages from "./ReportCardMessages/ReportCardMessages.jsx";
import ReportCartStats from "../../../../../Componants/ReportCartStats/ReportCartStats.jsx";
import ReportCardChart from "../../../../../Componants/ReportCartChart.jsx";

const ReportCardPage = () => {
    return (
        <>
            <MonthReportCardPage />
            <div className="w-full bg-white rounded-2xl">
                <ReportCartStats />
                <div className="px-12 pb-9">
                    <ReportCardChart />
                    <ReportCardMessages />
                </div>
            </div>
        </>
    )
}

export default ReportCardPage

