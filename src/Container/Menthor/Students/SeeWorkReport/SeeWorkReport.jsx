import {mentorPageStudentsWorkReport} from "../../../../helper/ProjectData/Data.jsx";
import TableList from "../../../../Componants/TableList.jsx";
import DatePicker from "../../../../Componants/Datepicker/DatePicker.jsx";
import { useState } from "react";
import CategoriesFilter from "../../../../Componants/CategoriesFilter/CategoriesFilter.jsx";

const SeeWorkReport = ({ showCategories, setShowCategories }) => {
  const [date, setDate] = useState("YY/MM/DD");

  return (
    <div>
      <div className="flex items-center gap-4 mt-10 max-sm:flex-col max-sm:items-start">
        <div className="w-[362px] max-[440px]:w-full">
          <DatePicker date={date} setDate={setDate} />
        </div>
        <div>
          <CategoriesFilter
            showCategories={showCategories}
            setShowCategories={setShowCategories}
          />
        </div>
      </div>
      <TableList
        head={mentorPageStudentsWorkReport.tableHead}
        body={mentorPageStudentsWorkReport.tableBody}
      />
    </div>
  );
};
export default SeeWorkReport;
