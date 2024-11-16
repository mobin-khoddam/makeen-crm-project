import TableList from "../../../Students/TableList.jsx";
import { mentorPageStudentsReportCard } from "../../../../helper/ProjectData/Data.jsx";
import SearchInput from "../SearchInput.jsx";
import MonthPicker from "../../../../Componants/MonthPicker.jsx";

const ReportCard = () => {
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap">
        <div className="w-[150px]">
          <MonthPicker />
        </div>
        <SearchInput />
      </div>
      <TableList
        body={mentorPageStudentsReportCard.tableBody}
        head={mentorPageStudentsReportCard.tableHead}
      />
    </div>
  );
};
export default ReportCard;
