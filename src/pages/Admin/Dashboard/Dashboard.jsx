import OriginalTemplatePage from "../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import CourseList from "../../../Container/Admin/Dashboard/CourseCard/CourseList.jsx";
import StudentsAreLate from "../../../Container/Admin/Dashboard/StudentsAreLate.jsx";
import DateReadOnly from "../../../Container/Admin/Dashboard/DateReadOnly.jsx";
import LeaveRequestContainer from "../../../Container/Admin/Dashboard/LeaveRequests/LeaveRequestContainer.jsx";
import './styles.css'

const AdminDashboard = () => {
    return (
        <OriginalTemplatePage>
            <div className='flex gap-6 justify-between max-xl:flex-col-reverse items-center max-sm:text-sm'>
                <div className='flex flex-col w-[65%] h-full max-xl:w-full'>
                    <CourseList />
                    <StudentsAreLate />
                </div>
                <div className="w-[35%] max-lg:w-full">
                    <div className="w-full">
                    <DateReadOnly />
                    </div>
                </div>
            </div>
            <div className="mt-6 bg-[#F9FAFB] p-6 rounded-lg">
                <LeaveRequestContainer />
            </div>
        </OriginalTemplatePage>
    )
}
export default AdminDashboard;