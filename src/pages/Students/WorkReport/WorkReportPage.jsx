import WorkStatusCard from "../../../Container/Students/WorkReport/WorkStatus/WorkStatusCard.jsx";
import WorkReportBar from "../../../Container/Students/WorkReport/WorkReportBar/WorkReportBar.jsx";
import OriginalTemplatePage from "../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import { useState } from "react";
import AddWorkReportPage from "../../../Container/Students/WorkReport/WorkReportBar/AddWorkReportPage/AddWorkReportPage.jsx";
import SeeWorkReportListPage from "../../../Container/Students/WorkReport/WorkReportBar/SeeWorkReportsPage/SeeWorkReportsListPage.jsx";
import ReportCardPage from "../../../Container/Students/WorkReport/WorkReportBar/ReportCardPage/ReportCard.jsx";

const WorkReportPage = ({children}) => {
    const [showWorkPage, setShowWorkPage] = useState([<AddWorkReportPage />, <SeeWorkReportListPage />, <ReportCardPage />])
    // const [showWorkPage, setShowWorkPage] = useState([])
    // const [showWorkPage, setShowWorkPage] = useState([])
    // const [showWorkPage, setShowWorkPage] = useState([])
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