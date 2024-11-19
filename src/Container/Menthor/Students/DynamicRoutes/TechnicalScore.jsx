import TableList from "../../../../Componants/TableList.jsx";
import {technicScoreStudents} from "../../../../helper/ProjectData/Data.jsx";

const TechnicalScore = () => {
  return(
      <div>
          <TableList head={technicScoreStudents.tableHead} body={technicScoreStudents.tableBody} />
      </div>
  )
}
export default TechnicalScore