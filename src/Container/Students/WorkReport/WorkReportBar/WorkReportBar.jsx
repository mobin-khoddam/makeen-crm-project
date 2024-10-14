import addIcon from '/src/assets/images/Students/WorkReports/add.svg'
import editIcon from '/src/assets/images/Students/WorkReports/edit-2.svg'
import messageIcon from '/src/assets/images/Students/WorkReports/message-text.svg'
import sendIcon from '/src/assets/images/Students/WorkReports/send-2.svg'
import taskIcon from '/src/assets/images/Students/WorkReports/task.svg'
import {Link} from "react-router-dom";

const WorkReportBar = () => {
    return (
        <div className="w-full bg-white rounded-2xl flex mb-[43px] cursor-pointer">
            <Link to="/work-report/add" className="bg-[#FACA15] p-4  text-white flex items-center justify-center gap-2 w-full rounded-r-2xl">
                <img src={`${editIcon}`} alt=""/>
                <span>ثبت گزارش کار</span>
            </Link>
            <Link to="/work-report/see-reports" className=" p-4 flex items-center justify-center gap-2 w-full border-x">
                <img src={`${taskIcon}`} alt=""/>
                <span>مشاهده گزارش کارها</span>
            </Link>
            <Link to="/work-report/report-card" className=" p-4 flex items-center justify-center gap-2 w-full rounded-l-2xl shadow-sm">
                <img src={`${messageIcon}`} alt=""/>
                <span>کارنامه</span>
            </Link>
        </div>
    )
}

export default WorkReportBar