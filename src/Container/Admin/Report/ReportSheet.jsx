import React from "react";
import ReportSheetTable from "./ReportSheetTable";
import { ReportSheetData } from "../../../helper/ProjectData/Data";
import Pagination from "../../../Componants/Pagination/Pagination";

const ReportSheet = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center mb-[24px]">
        <span className="text-[16px] text-black ">نمایش بر اساس:</span>
        <div className="w-[62.7906%] h-[42px] flex items-center justify-center ">
          جای کار مبین
        </div>
        <button className="w-[162px] h-[41px] bg-[#4318FF] text-white text-[16px]  rounded-[10px] active:scale-95 transition-all duration-150 ease-linear">
          فیلتر کردن
        </button>
      </div>
      <div className="w-full relative mb-[24px]">
        <input
          type="text"
          className="block w-full h-[43px]  px-[40px] border-[1px] border-[#E5E7EB] border-solid rounded-[8px] text-[#6B7280] outline-none "
          placeholder="جستجوی نام دانشجو"
        />
        <span className="absolute top-[51.5%] -translate-y-1/2 right-[16px]">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.75 16.25L11.25 11.75M12.75 8C12.75 8.68944 12.6142 9.37213 12.3504 10.0091C12.0865 10.646 11.6998 11.2248 11.2123 11.7123C10.7248 12.1998 10.146 12.5865 9.50909 12.8504C8.87213 13.1142 8.18944 13.25 7.5 13.25C6.81056 13.25 6.12787 13.1142 5.49091 12.8504C4.85395 12.5865 4.2752 12.1998 3.78769 11.7123C3.30018 11.2248 2.91347 10.646 2.64963 10.0091C2.3858 9.37213 2.25 8.68944 2.25 8C2.25 6.60761 2.80312 5.27226 3.78769 4.28769C4.77226 3.30312 6.10761 2.75 7.5 2.75C8.89239 2.75 10.2277 3.30312 11.2123 4.28769C12.1969 5.27226 12.75 6.60761 12.75 8Z"
              stroke="#6B7280"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
      <ReportSheetTable
        head={ReportSheetData.row}
        body={ReportSheetData.body}
      />
      <button className="w-full h-[41px] border-[1px] border-[#4318FF] border-solid rounded-[10px] text-[#4318FF] mt-[32.5px]  mb-[79px]">
        صدور کارنامه
      </button>
      <Pagination />
    </>
  );
};

export default ReportSheet;
