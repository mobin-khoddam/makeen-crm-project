import { useState } from "react";

const NotificationRecordsTable = ({ head, body }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="overflow-x-auto bg-white border-[#E9E9E9] border-solid rounded-[8px] ">
      <table className="table table-zebra border-[1px] ">
        {/* head */}
        <thead>
          <tr className="bg-[#F9FAFB] border-b border-solid border-[1px] border-[#E5E7EB] h-[64px] ">
            {head.map((elem) => (
              <th className=" text-center" key={elem.id}>
                {elem.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {body.map((item) => (
            <tr
              style={{ backgroundColor: item.id % 2 === 0 && "#F9FAFB" }}
              key={item.id}
              className="text-[#3E3838] text-[16px] h-[64px]"
            >
              <th className=" text-center">{item.id}</th>
              <td className=" text-center ">{item.subject}</td>
              <td className=" text-center ">{item.mainTitle}</td>
              <td className=" text-center">{item.subtitle}</td>
              <td className="text-center ">{item.courseNumber}</td>
              <td className=" text-center">{item.date}</td>
              <td className=" text-center">
                {/* <button className="w-[74px] h-[40px] bg-[#F7F5FF] rounded-[8px] text-[#4318FF]">
                  جزییات
                </button> */}
                <button
                  className="btn w-[74px]  bg-[#F7F5FF] rounded-[8px] text-[#4318FF] border-none shadow-none !h-[37px]"
                  onClick={openModal}
                >
                  جزییات
                </button>

                {isModalOpen && (
                  <dialog
                    className="modal modal-bottom bg-[#0000001b] sm:modal-middle"
                    open
                  >
                    <div className="modal-box  bg-white shadow-sm w-full max-sm:absolute max-sm:top-5  max-sm:py-3   ">
                      <div className="w-full h-[392px] bg-white flex flex-col ">
                        <div className="w-full h-fit flex justify-between items-center text-[10px] sm:text-[14px]">
                          <span> ارسال شده به:</span>
                          <span className="bg-[#EDEBFE] w-[48px] sm:w-[68px]  h-[25px] text-[#5521B5] text-[10px] sm:text-[14px] rounded-md flex items-center justify-center pointer-events-none">
                            PHP 15
                          </span>
                          <span className="bg-[#EDEBFE] w-[48px] sm:w-[68px]  h-[25px] text-[#5521B5] text-[10px] sm:text-[14px] rounded-md flex items-center justify-center pointer-events-none">
                            REACT 17
                          </span>
                          <span className="bg-[#EDEBFE] w-[48px] sm:w-[68px]  h-[25px] text-[#5521B5] text-[10px] sm:text-[14px] rounded-md flex items-center justify-center pointer-events-none">
                            UI UX 15
                          </span>
                          <span>1403/4/7</span>
                        </div>
                        <div className="w-full border-solid border-[1px] border-[#0066FF]  mt-[32px] h-[53px] text-right px-[10px] leading-[53px] rounded-md bg-[#F4F7FF] drop-shadow-sm mb-[13px] font-medium sm:text-[16px] text-[12px] pointer-events-none">
                          {" "}
                          تبریک روز زن
                        </div>
                        <div className="w-full h-[110px] border-[1px] border-[#0066FF] px-[10px] text-right pt-[14px]  rounded-md bg-[#F4F7FF] drop-shadow-sm  font-medium sm:text-[16px] text-[12px] pointer-events-none mb-8">
                          با سلام به خانم های محترم روزتون مبارک باشه . با این
                          کد تخفیف میتوانید از کافه تا 3 روز خرید کنید .
                        </div>
                        <div className="w-full h-fit flex items-center gap-x-4 text-[13px] sm:text-[16px] ">
                          <span className="text-[13px] sm:text-[16px]">
                            ارسال شده به صورت:
                          </span>
                          <span className="flex items-center gap-x-2">
                            <input type="checkbox" checked />
                            اعلان
                          </span>
                          <span className="flex items-center gap-x-2">
                            <input type="checkbox" checked />
                            پیامک
                          </span>
                          <span className="flex items-center gap-x-2">
                            <input type="checkbox" checked />
                            ایمیل
                          </span>
                        </div>
                        <div className="modal-action ">
                          <button
                            className="btn  ml-auto min-w-[86px] sm:aw-[86px]  w-full bg-white rounded-md border-[1px] border-solid border-[#4318FF] text-[#4318FF] shadow-none"
                            onClick={closeModal}
                          >
                            بازگشت
                          </button>
                        </div>
                      </div>
                    </div>
                  </dialog>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default NotificationRecordsTable;
