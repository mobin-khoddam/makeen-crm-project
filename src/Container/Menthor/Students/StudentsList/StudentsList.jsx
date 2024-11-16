import { mentorPageStudentsList } from "../../../../helper/ProjectData/Data.jsx";
import TableList from "../../../Students/TableList.jsx";
import SearchInput from "../SearchInput.jsx";

const StudentsList = () => {
  return (
    <div>
      <SearchInput />
      <TableList
        head={mentorPageStudentsList.tableHead}
        body={mentorPageStudentsList.tableBody}
      />
    </div>
  );
};
export default StudentsList;
