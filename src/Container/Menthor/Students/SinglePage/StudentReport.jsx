import { useState } from "react";
import CategoriesFilter from "../../../../Componants/CategoriesFilter/CategoriesFilter";
import FilterDatePicker from "../../../../Componants/Datepicker/DatePicker.jsx";
import StudentReportList from "./StudentReportList";

const StudentReport = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <div className="w-full mt-[61px] mx-auto flex items-center gap-[10px] ">
        <div className="w-[32%] bg-white rounded-md">
          <FilterDatePicker />
        </div>
        <CategoriesFilter showCategories={state} setShowCategories={setState} />
      </div>
      <StudentReportList />
    </>
  );
};

export default StudentReport;
