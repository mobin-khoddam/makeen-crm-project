import ReportTimesCard from "../../../Container/Students/Dashboard/ReportTimeCard/ReportTimesCard.jsx";
import LastReportCard from "../../../Container/Students/Dashboard/LastReports/LastReportCard.jsx";
import LatestMessagesCard from "../../../Container/Students/Dashboard/LatestMessages/LatestMessagesCard.jsx";
import OriginalTemplatePage from "../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";

const DashboardPage = () => {
    return (
        <OriginalTemplatePage>
            <ReportTimesCard />
            <LastReportCard />
            <LatestMessagesCard />
        </OriginalTemplatePage>
    )
}

export default DashboardPage