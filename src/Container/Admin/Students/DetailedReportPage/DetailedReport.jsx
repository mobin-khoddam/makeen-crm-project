import MembersSectionField from "../MembersSection/MembersSectionField.jsx";
import StudentsCollapse from "../StudentsCollapse/StudentsCollaps.jsx";
import CourseInformation from "../CourseInformation.jsx";
import {coursesDataListStudents, courseStudentsCollapse} from "../../../../helper/ProjectData/Data.jsx";

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