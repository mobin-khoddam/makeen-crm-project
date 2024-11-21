import { useState } from "react";
import OriginalTemplatePage from "../../../Componants/OriginalTemplate/OriginalTemplatePage";
import { useLocation } from "react-router-dom";
import StudentProfile from "../../Menthor/Students/SinglePage/StudentProfile";
import FilterDatePicker from "../../../Componants/DatePicker";
import CategoriesFilter from "../../../Componants/CategoriesFilter/CategoriesFilter";
import StudentReportList from "../../Menthor/Students/SinglePage/StudentReportList";
import Pagination from "../../../Componants/Pagination/Pagination";

const ReportSingle = () => {
  const location = useLocation();
  const profile = location.state;
  console.log(location.state);
  const [state, setState] = useState(false);
  return (
    <OriginalTemplatePage>
      <StudentProfile profile={profile} />
      <div className="w-full mt-[61px] mx-auto flex items-center gap-[10px] ">
        <div className="w-[32%] bg-white rounded-md">
          <FilterDatePicker />
        </div>
        <CategoriesFilter showCategories={state} setShowCategories={setState} />
      </div>
      <StudentReportList />
      <Pagination />
    </OriginalTemplatePage>
  );
};

export default ReportSingle;
