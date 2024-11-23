import OriginalTemplatePage from "../../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import LeaveRecordsTable from "./LeaveRecordsTable.jsx";
import {adminPanelLeaveRecords} from "../../../../helper/ProjectData/Data.jsx";
import FilterStudents from "../../../../Container/Admin/FilterStudents.jsx";

const LeaveRecords = () => {



    return (
        <div>
            <OriginalTemplatePage>
                <div className='flex gap-7 items-center flex-wrap max-[932px]:flex-col'>
                    <span>نمایش بر اساس :</span>
                    <FilterStudents date={true}/>
                </div>
                <div className='mt-10'>
                    <LeaveRecordsTable tableBody={adminPanelLeaveRecords.tableBody} tableHead={adminPanelLeaveRecords.tableHead} />
                </div>
            </OriginalTemplatePage>
        </div>
    )
}
export default LeaveRecords