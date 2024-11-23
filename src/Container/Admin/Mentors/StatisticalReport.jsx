import Pagination from "../../../Componants/Pagination/Pagination";
import { MentorsCardData } from "../../../helper/ProjectData/Data";
import MentorCard from "./MentorCard";

const StatisticalReport = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col gap-5  lg:items-center lg:flex-row">
        <h1 className="font-semibold w-[140px] block text-[16px]">
          نمایش بر اساس :
        </h1>
        <div className="w-full flex items-center gap-x-8  h-fit overflow-auto pb-2">
          <div className="w-[140px] h-full relative">
            <select
              className="select !h-[41px]  !p-0 !text-center max-h-[41px] !outline-none select-bordered w-full min-w-[140px] text-[#4318FF] appearance-none"
              defaultValue=""
            >
              <option className="!text-[#4318FF] text-center" disabled value="">
                نام اصلی دوره
              </option>
              <option className="!text-[#4318FF]">ui/ux</option>
              <option className="!text-[#4318FF]">React</option>
              <option className="!text-[#4318FF]">Python</option>
            </select>
          </div>
          <div className="w-[140px] h-full relative">
            <select
              className="select !h-[41px]  !p-0 !text-center max-h-[41px] !outline-none select-bordered w-full text-[#4318FF] appearance-none min-w-[140px]"
              defaultValue=""
            >
              <option className="!text-[#4318FF] text-center" disabled value="">
                نام فرعی دوره{" "}
              </option>
              <option className="!text-[#4318FF]">ui/ux</option>
              <option className="!text-[#4318FF]">React</option>
              <option className="!text-[#4318FF]">Python</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-[292px] mx-auto h-[78px] bg-white flex items-center rounded-[8px] mt-[40px]">
        <span className=" w-full h-[59px] border-r-[3px] border-solid border-[#00FF47] px-[20px] flex items-center justify-between">
          تعداد کل اساتید
          <span>37</span>
        </span>
      </div>
      <MentorCard data={MentorsCardData} />
      <Pagination />
    </div>
  );
};

export default StatisticalReport;
