import Pagination from "../../../Componants/Pagination/Pagination";
import { ArrearsTableData } from "../../../helper/ProjectData/Data";
import ArrearsTable from "./ArrearsTable";

const Arrears = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 mb-[40px]  lg:items-center lg:flex-row">
        <h1 className="font-semibold min-w-[140px] block text-[16px]">
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
          <div className="w-[140px] h-full relative">
            <select
              className="select !h-[41px]  !p-0 !text-center max-h-[41px] !outline-none select-bordered w-full text-[#4318FF] min-w-[140px] appearance-none"
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
        </div>
        <div className="  w-full lg:max-w-[350px] h-[40px] relative flex items-center ">
          <svg
            className="absolute top-1/2 -translate-y-1/2 right-2"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.75 15.75L11.25 11.25M12.75 7.5C12.75 8.18944 12.6142 8.87213 12.3504 9.50909C12.0865 10.146 11.6998 10.7248 11.2123 11.2123C10.7248 11.6998 10.146 12.0865 9.50909 12.3504C8.87213 12.6142 8.18944 12.75 7.5 12.75C6.81056 12.75 6.12787 12.6142 5.49091 12.3504C4.85395 12.0865 4.2752 11.6998 3.78769 11.2123C3.30018 10.7248 2.91347 10.146 2.64963 9.50909C2.3858 8.87213 2.25 8.18944 2.25 7.5C2.25 6.10761 2.80312 4.77226 3.78769 3.78769C4.77226 2.80312 6.10761 2.25 7.5 2.25C8.89239 2.25 10.2277 2.80312 11.2123 3.78769C12.1969 4.77226 12.75 6.10761 12.75 7.5Z"
              stroke="#6B7280"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            type="text"
            className="w-full h-full rounded-lg outline-none border-[1px] border-solid border-[#E5E7EB] px-[32px]"
            placeholder="جستجوی نام دانشجو"
          />
        </div>
      </div>
      <ArrearsTable body={ArrearsTableData.body} head={ArrearsTableData.head} />
      <Pagination />
    </div>
  );
};

export default Arrears;
