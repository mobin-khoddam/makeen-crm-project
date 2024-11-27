import ReportCardTimeTemplate from "../../../../Componants/ReportCardTimeTemplate.jsx";
import {adminPanelStudentsLeaveRequestData, LeaveRequestListAdminPanel} from "../../../../helper/ProjectData/Data.jsx";
import LeaveRecordsTable from "../../../../pages/Admin/Dashboard/LeaveRecords/LeaveRecordsTable.jsx";

const LeaveRequest = () => {
    return (
        <div>
            <ReportCardTimeTemplate timeList={LeaveRequestListAdminPanel}/>
            <LeaveRecordsTable tableHead={adminPanelStudentsLeaveRequestData.head}
                               tableBody={adminPanelStudentsLeaveRequestData.body}/>
        </div>
    )
}
export default LeaveRequest