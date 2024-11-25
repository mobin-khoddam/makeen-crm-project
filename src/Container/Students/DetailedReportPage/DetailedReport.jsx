import MembersSectionField from "../../Admin/Students/MembersSection/MembersSectionField.jsx";
import StudentsCollapse from "../../Admin/Students/StudentsCollapse/StudentsCollaps.jsx";
import CourseInformation from "../../Admin/Students/CourseInformation.jsx";
import {coursesDataListStudents, courseStudentsCollapse} from "../../../helper/ProjectData/Data.jsx";

const DetailedReport = () => {
  return (
      <div className='flex flex-col gap-10 font-semibold'>
          <MembersSectionField/>
          <StudentsCollapse data={courseStudentsCollapse}/>
          <CourseInformation data={coursesDataListStudents}/>
      </div>
  )
}
export default DetailedReport