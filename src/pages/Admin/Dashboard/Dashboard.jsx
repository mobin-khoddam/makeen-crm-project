import OriginalTemplatePage from "../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import CourseList from "../../../Container/Admin/Dashboard/CourseCard/CourseList.jsx";
import StudentsAreLate from "../../../Container/Admin/Dashboard/StudentsAreLate.jsx";
import DateReadOnly from "../../../Container/Admin/Dashboard/DateReadOnly.jsx";

const AdminDashboard = () => {
  return(
      <OriginalTemplatePage>
          <div className='flex gap-6'>
              <div className='flex flex-col w-[66%]'>
                  <CourseList />
                  <StudentsAreLate />
              </div>
              <div className="w-[34%]">
                  <DateReadOnly />
              </div>
          </div>
      </OriginalTemplatePage>
  )
}
export default AdminDashboard;