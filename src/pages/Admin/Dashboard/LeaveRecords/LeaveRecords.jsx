import OriginalTemplatePage from "../../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import LeaveRecordsTable from "./LeaveRecordsTable.jsx";
import {adminPanelLeaveRecords} from "../../../../helper/ProjectData/Data.jsx";
import CategoriesFilter from "../../../../Componants/CategoriesFilter/CategoriesFilter.jsx";
import {useState} from "react";

const LeaveRecords = () => {
    const [state, setState] = useState()
    return (
        <OriginalTemplatePage>
            <div className='z-20'>
                <CategoriesFilter showCategories={state} setShowCategories={setState} />
            </div>
            <div className='z-10'>
                <LeaveRecordsTable tableBody={adminPanelLeaveRecords.tableBody} tableHead={adminPanelLeaveRecords.tableHead} />
            </div>
        </OriginalTemplatePage>
    )
}
export default LeaveRecords