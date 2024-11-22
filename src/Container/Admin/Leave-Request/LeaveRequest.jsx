import { LeaveRequestData } from "../../../helper/ProjectData/Data";
import LeaveRequestTable from "./LeaveRequestTable";
import FilterComponent from "./filterComponent";

const LeaveRequest = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-5  lg:items-center lg:flex-row">
        <h1 className="font-semibold w-[140px] block text-[16px]">
          نمایش بر اساس :
        </h1>
        <FilterComponent />
      </div>
      <div className="flex w-full h-fit lg:items-center lg:flex-row flex-col gap-4   overflow-auto gap-x-[63px] mt-[40px] mb-[32px]">
        <span className="text-[16px] font-semibold">مرتب سازی :</span>
        <div className="flex items-center gap-x-4">
          <span className="inline-flex w-[105px] h-[41px] items-center justify-center rounded-[8px] border-[1px] border-[#3E3838] border-solid text-center">
            تایید شده
          </span>
          <span className="inline-flex w-[105px] h-[41px] items-center justify-center rounded-[8px] border-[1px] border-[#3E3838] border-solid text-center">
            رد شده{" "}
          </span>
          <span className="inline-flex w-[105px] h-[41px] items-center justify-center rounded-[8px] border-[1px] border-[#3E3838] border-solid text-center">
            بررسی نشده{" "}
          </span>
        </div>
      </div>
      <LeaveRequestTable
        head={LeaveRequestData.head}
        body={LeaveRequestData.body}
      />
    </div>
  );
};

export default LeaveRequest;
