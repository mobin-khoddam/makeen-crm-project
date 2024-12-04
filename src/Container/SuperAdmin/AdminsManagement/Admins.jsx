import { useState } from "react";
import { AdminsData } from "../../../helper/ProjectData/Data";
const Admins = () => {
  const [admins, setAdmins] = useState(AdminsData);
  return (
    <div className="w-full h-fit  pt-6 rounded-[15px] mb-8  bg-white">
      <div className="flex items-center justify-between  w-[93%] mb-6 mx-auto">
        <h2 className="text-[16px] font-medium">عوامل اجرایی</h2>
        <button className="w-[102px] h-[33px] border-[1px] border-solid border-[#4318FF] text-[#4318FF] flex items-center justify-center gap-x-1 rounded-lg active:scale-95 transition-all ease-linear duration-150">
          افزودن
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 13.25H6C5.59 13.25 5.25 12.91 5.25 12.5C5.25 12.09 5.59 11.75 6 11.75H18C18.41 11.75 18.75 12.09 18.75 12.5C18.75 12.91 18.41 13.25 18 13.25Z"
              fill="#4318FF"
            />
            <path
              d="M12 19.25C11.59 19.25 11.25 18.91 11.25 18.5V6.5C11.25 6.09 11.59 5.75 12 5.75C12.41 5.75 12.75 6.09 12.75 6.5V18.5C12.75 18.91 12.41 19.25 12 19.25Z"
              fill="#4318FF"
            />
          </svg>
        </button>
      </div>
      <div className="w-[95%] mx-auto mb-6 grid lg:grid-cols-3 sm:grid-cols-2  items-center gap-6">
        {admins.map((admin) => {
          return (
            <div
              key={admin.id}
              className="w-full h-[283px]  flex flex-col items-center justify-start pt-8 gap-1 border-[1px] border-solid border-[#E5E7EB] rounded-[11px]"
            >
              <div className="w-[93%] ">
                <img
                  src={admin.image}
                  alt="adminImage"
                  className="w-[96px] h-[96px] mx-auto mb-3 object-cover"
                />
                <div className="w-full flex flex-col items-center">
                  <span className="text-[#111928] text-xl">
                    {admin.fullName}
                  </span>
                  <span className="text-[#6B7280] text-[14px]">
                    {admin.role}
                  </span>
                </div>
                <div className="pt-6 w-full flex justify-center gap-3">
                  <button className="text-[14px] rounded-lg active:scale-95 transition-all ease-linear duration-150 w-[111px] h-[37px] bg-[#1A56DB] text-white">
                    مشاهده اطلاعات
                  </button>
                  <button
                    onClick={() => {
                      setAdmins(admins.filter((elem) => elem.id !== admin.id));
                    }}
                    className="text-[14px] rounded-lg active:scale-95 transition-all ease-linear duration-150 w-[51px] h-[37px] text-[#FD151B] border-[1px] border-solid border-[#FF8E8E]"
                  >
                    حذف
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admins;
