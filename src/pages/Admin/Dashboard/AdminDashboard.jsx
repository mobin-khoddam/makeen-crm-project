import OriginalTemplatePage from "../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import CourseList from "../../../Container/Admin/Dashboard/CourseCard/CourseList.jsx";
import StudentsAreLate from "../../../Container/Admin/Dashboard/StudentsAreLate.jsx";
import DateReadOnly from "../../../Container/Admin/Dashboard/DateReadOnly.jsx";
import LeaveRequestContainer from "../../../Container/Admin/Dashboard/LeaveRequests/LeaveRequestContainer.jsx";
import { useRef } from "react";
import './styles.css'

const AdminDashboard = () => {
    const modalRef = useRef(null)
    return (
        <OriginalTemplatePage>
            <div className='flex gap-6 mb-6 max-xl:flex-col-reverse max-xl:items-center'>
                <div className='w-[70%] flex flex-col max-xl:w-full'>
                    <CourseList />
                    <StudentsAreLate />
                </div>
                <div className='w-[30%] max-xl:w-[250px]'>
                    <DateReadOnly />
                </div>
            </div>
            <div className="bg-[#F9FAFB] p-6 rounded-lg">
                <LeaveRequestContainer modalRef={modalRef} onClick={() => modalRef.current.showModal()} />
            </div>
        </OriginalTemplatePage>
    )
}
export default AdminDashboard;