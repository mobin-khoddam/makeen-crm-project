import LastReportCard from "../../../Container/Students/Dashboard/LastReports/LastReportCard.jsx";
import LatestMessagesCard from "../../../Container/Students/Dashboard/LatestMessages/LatestMessagesCard.jsx";
import OriginalTemplatePage from "../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import ReportCardTimeTemplate from "../../../Componants/ReportCardTimeTemplate.jsx";
import { ReportTimeCardList } from "../../../helper/ProjectData/Data.jsx"

const DashboardPage = () => {
    return (
        <OriginalTemplatePage>
            <ReportCardTimeTemplate timeList={ReportTimeCardList} />
            <LastReportCard />
            <LatestMessagesCard />
        </OriginalTemplatePage>
    )
}

export default DashboardPage