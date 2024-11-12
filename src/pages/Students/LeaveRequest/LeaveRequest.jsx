import OriginalTemplatePage from '../../../Componants/OriginalTemplate/OriginalTemplatePage'
import LeaveRequestForm from '../../../Container/Students/LeaveRequest/LeaveRequestForm'
import ReportCardTimeTemplate from '../../../Container/Students/ReportCardTimeTemplate'
import LeaveRules from "../../../Container/Students/LeaveRequest/LeaveRules.jsx";
import TableList from "../../../Container/Students/TableList.jsx";
import {LeaveRequestList} from "../../../helper/ProjectData/Data.js";
import {LeaveRequestTableList} from '../../../helper/ProjectData/Data.js'


const LeaveRequest = () => {
    return (
        <OriginalTemplatePage>
            <ReportCardTimeTemplate timeList={LeaveRequestList}/>
            <div className="flex gap-6 max-[1300px]:flex-col max-[1300px]:items-center">
                <LeaveRequestForm/>
                <LeaveRules/>
            </div>
            <TableList body={LeaveRequestTableList.tableBody} head={LeaveRequestTableList.tableHead}/>
        </OriginalTemplatePage>
    )
}

export default LeaveRequest
