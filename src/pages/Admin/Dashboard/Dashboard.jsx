import OriginalTemplatePage from "../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import CourseCard from "../../../Container/Admin/Dashboard/CourseCard/CourseCard.jsx";
import {CourseCardList} from "../../../helper/ProjectData/Data.jsx";
import CourseList from "../../../Container/Admin/Dashboard/CourseCard/CourseList.jsx";

const AdminDashboard = () => {
  return(
      <OriginalTemplatePage>
          <CourseList />
      </OriginalTemplatePage>
  )
}
export default AdminDashboard;