import WorkStatusCard from "../../../Container/Students/WorkReport/WorkStatus/WorkStatusCard.jsx";
import WorkReportBar from "../../../Container/Students/WorkReport/WorkReportBar/WorkReportBar.jsx";
import OriginalTemplatePage from "../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import AddWorkReportPage from "../../../Container/Students/WorkReport/WorkReportBar/AddWorkReportPage/AddWorkReportPage.jsx";
import SeeWorkReportListPage from "../../../Container/Students/WorkReport/WorkReportBar/SeeWorkReportsPage/SeeWorkReportsListPage.jsx";
import ReportCardPage from "../../../Container/Students/WorkReport/WorkReportBar/ReportCardPage/ReportCard.jsx";
import { useState } from "react";

const WorkReportPage = () => {
    const [selectPageRender, setSelectPageRender] = useState('AddWorkReportPage')
    const [showCategories, setShowCategories] = useState(false)


    return (
        <div onClick={() => setShowCategories(false)}>
            <OriginalTemplatePage>
                <WorkStatusCard />
                <WorkReportBar setSelectPageRender={setSelectPageRender} selectPageRender={selectPageRender}/>
                {
                    selectPageRender === 'AddWorkReportPage' ? <AddWorkReportPage /> :
                    selectPageRender === 'SeeWorkReportListPage' ? <SeeWorkReportListPage showCategories={showCategories} setShowCategories={setShowCategories}/> :
                    selectPageRender === 'ReportCardPage' && <ReportCardPage />
                }
            </OriginalTemplatePage>
        </div>
    )
}

export default WorkReportPage

