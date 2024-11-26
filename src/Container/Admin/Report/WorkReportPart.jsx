import WorkReportsTable from "./WorkReportsTable";
import { AdminWorkReport } from "../../../helper/ProjectData/Data";
import Pagination from "../../../Componants/Pagination/Pagination";
import FilterStudents from "../FilterStudents.jsx";
import SearchInput from "../SearchInput.jsx";

const WorkReportPart = () => {
  return (
    <>
      <div className="mb-[48px] flex lg:justify-between items-center 2xl:flex-row flex-col justify-normal max-sm:gap-x-3 gap-10">
        <span className="text-[14px] max-lg:block ">
          نمایش بر اساس:
        </span>
        <div className="flex items-center ">
          <FilterStudents />
        </div>
        <SearchInput placholder='جستجوی نام دانشجو/شماره گزارش' />
      </div>
      <WorkReportsTable
        body={AdminWorkReport.body}
        head={AdminWorkReport.head}
      />
      <Pagination />
    </>
  );
};

export default WorkReportPart;
