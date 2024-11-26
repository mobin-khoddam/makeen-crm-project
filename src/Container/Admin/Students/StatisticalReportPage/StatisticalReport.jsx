import {adminPageStudentsInformation} from "../../../../helper/ProjectData/Data.jsx";
import LeaveRecordsTable from "../../../../pages/Admin/Dashboard/LeaveRecords/LeaveRecordsTable.jsx";

const StatisticalReport = () => {
    return (
        <div>
            <LeaveRecordsTable tableBody={adminPageStudentsInformation.tableBody} tableHead={adminPageStudentsInformation.tableHead} link={adminPageStudentsInformation.linK} />
        </div>
    )
}
export default StatisticalReport