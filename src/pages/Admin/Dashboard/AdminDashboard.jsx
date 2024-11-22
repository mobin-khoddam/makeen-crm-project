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
            <div className='flex gap-6 justify-between max-xl:flex-col-reverse items-center max-sm:text-sm h-[350px] max-xl:h-full'>
                <div className='flex flex-col justify-between w-[65%] h-full max-xl:w-full'>
                    <CourseList />
                    <StudentsAreLate />
                </div>
                <div className="w-[35%] max-lg:w-full flex justify-center items-center">
                    <div className="w-[340px] max-[370px]:w-full">
                        <DateReadOnly />
                    </div>
                </div>
            </div>
            <div className="mt-6 bg-[#F9FAFB] p-6 rounded-lg">
                <LeaveRequestContainer modalRef={modalRef} onClick={() => modalRef.current.showModal()} />
            </div>
        </OriginalTemplatePage>
    )
}
export default AdminDashboard;