import TableList from "../../../Students/TableList.jsx";
import { mentorPageStudentsTechnicalScore } from "../../../../helper/ProjectData/Data.jsx";

const TechnicalScore = () => {
  return (
    <div>
      <TableList
        head={mentorPageStudentsTechnicalScore.tableHead}
        body={mentorPageStudentsTechnicalScore.tableBody}
      />
    </div>
  );
};
export default TechnicalScore;
