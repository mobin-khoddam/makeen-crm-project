import editIcon from '/src/assets/images/Students/WorkReports/edit-2.svg'
import messageIcon from '/src/assets/images/Students/WorkReports/message-text.svg'
import taskIcon from '/src/assets/images/Students/WorkReports/task.svg'
import {Link, useLocation} from "react-router-dom";

const WorkReportBar = () => {
    const location = useLocation()
    const isActive = ((path) => location.pathname === path)
    return (<div
        className="w-full bg-white rounded-2xl flex mb-[43px] cursor-pointer [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a]:gap-2 [&>a]:w-full [&>a]:p-4 max-lg:flex-col">
        <Link to="/work-report/add"
              className={`rounded-r-2xl max-lg:rounded-none max-lg:rounded-t-2xl  ${isActive('/work-report/add') && 'bg-[#FACA15] text-white'}`}>
            <div style={{mask: `url(${editIcon}) center no-repeat`}}
                 className={`w-6 h-6  ${isActive('/work-report/add') ? 'bg-white' : 'bg-black'}`}></div>
            <span>ثبت گزارش کار</span>
        </Link>
        <Link to="/work-report/see-reports"
              className={`border-x ${isActive('/work-report/see-reports') && 'bg-[#FACA15] text-white'}`}>
            <div style={{mask: `url(${taskIcon}) center no-repeat`}}
                 className={`w-6 h-6  ${isActive('/work-report/see-reports') ? 'bg-white' : 'bg-black'}`}></div>
            <span>مشاهده گزارش کارها</span>
        </Link>
        <Link to="/work-report/report-card"
              className={` rounded-l-2xl max-lg:rounded-none max-lg:rounded-b-2xl shadow-sm ${isActive('/work-report/report-card') && 'bg-[#FACA15] text-white'}`}>
            <div style={{mask: `url(${messageIcon}) center no-repeat`}}
                 className={`w-6 h-6  ${isActive('/work-report/report-card') ? 'bg-white' : 'bg-black'}`}></div>

            <span>کارنامه</span>
        </Link>
    </div>)
}

export default WorkReportBar