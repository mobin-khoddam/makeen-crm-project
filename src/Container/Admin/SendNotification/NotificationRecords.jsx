import React from "react";
import NotificationRecordsTable from "./NotificationRecordsTable";
import { NotificationRecordsData } from "../../../helper/ProjectData/Data";

const NotificationRecords = () => {
  return (
    <>
      <div className="l w-full h-[43px] relative flex items-center mt-[31px] mb-[32px] ">
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
          placeholder="جستجوی دانشجو"
        />
      </div>
      <NotificationRecordsTable
        head={NotificationRecordsData.head}
        body={NotificationRecordsData.body}
      />
    </>
  );
};

export default NotificationRecords;
