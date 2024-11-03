import WorkStatusCard from "../../../Container/Students/WorkReport/WorkStatus/WorkStatusCard.jsx";
import WorkReportBar from "../../../Container/Students/WorkReport/WorkReportBar/WorkReportBar.jsx";
import OriginalTemplatePage from "../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";

const WorkReportPage = ({children}) => {
    return (
        <div>
            <OriginalTemplatePage>
                <WorkStatusCard />
                <WorkReportBar />
                {children}
            </OriginalTemplatePage>
        </div>
    )
}

export default WorkReportPage