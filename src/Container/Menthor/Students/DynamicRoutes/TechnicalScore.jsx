import TableList from "../../../../Componants/TableList.jsx";
import {dd} from "../../../../helper/ProjectData/Data.jsx";

const TechnicalScore = () => {
  return(
      <div>
          <TableList head={dd.tableHead} body={dd.tableBody} />
      </div>
  )
}
export default TechnicalScore