import { useState } from "react";
import FinanceImageUploader from "./FinanceImageUploader";
const LatestTransActionFinanceTable = ({ head, body }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="overflow-x-auto  border-[#E9E9E9] border-solid rounded-[8px] mb-[40px] ">
      <table className="table table-zebra border-[1px] mb-[48px] ">
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
              <td className=" text-center ">{item.name}</td>
              <td className=" text-center text-[12px] md:text-[14px] lg:text-[16px] ">
                {item.course}
              </td>
              <td className=" text-center">{item.courseNumber}</td>
              <td className="text-center ">{item.date}</td>
              <td className="text-center ">{item.amount}</td>
              <td className="text-center ">
                <span
                  style={{
                    color:
                      item.status === "دانشجو"
                        ? "#FF00B8"
                        : item.status === "فارغ التحصیل"
                        ? "#A3AED0"
                        : "#09814A",
                  }}
                >
                  {item.status}
                </span>
              </td>

              <td className=" text-center">
                <button
                  className="btn min-w-[74px]   bg-[#F7F5FF] rounded-[8px] text-[#4318FF] border-none shadow-none !h-[37px]"
                  onClick={openModal}
                >
                  مشاهده فیش{" "}
                </button>

                {isModalOpen && (
                  <dialog
                    className="modal modal-bottom  bg-[#0000001b] sm:modal-middle"
                    open
                  >
                    <div className="modal-box min-h-[630px]  p-4 px-6 bg-white shadow-sm w-full max-sm:w-[95%] max-sm:left-1/2 max-sm:-translate-x-[50%] max-sm:absolute max-sm:top-5  max-sm:py-3   ">
                      <div className="w-full h-[591px] bg-white flex flex-col gap-y-6 ">
                        <div className="w-full flex items-center justify-between">
                          <span className="flex flex-col items-start text-[#3E3838] gap-2">
                            <span className="text-[16px] font-medium">
                              {item.name}
                            </span>
                            <span className="text-[14px]"> {item.status}</span>
                          </span>
                          <span>{item.date}</span>
                        </div>
                        <div className="flex w-full  items-center justify-between max-[476px]:flex-col max-[476px]:w-full gap-y-3">
                          <div className="w-[210px] max-[476px]:w-full h-[154px] flex flex-col items-center justify-center gap-y-2 bg-[#F5F5F5] border-[0.5px] border-solid border-[#3E3838] rounded-[5px]">
                            {" "}
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M22 7.7699V8.9999H2V7.5399C2 5.2499 3.86 3.3999 6.15 3.3999H16V5.9699C16 7.2399 16.76 7.9999 18.03 7.9999H20.97C21.37 7.9999 21.71 7.9299 22 7.7699Z"
                                fill="#3E3838"
                              />
                              <path
                                d="M2 9V16.46C2 18.75 3.86 20.6 6.15 20.6H17.85C20.14 20.6 22 18.75 22 16.46V9H2ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"
                                fill="#3E3838"
                              />
                              <path
                                d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.63 3.45L19.26 6.22C19.17 6.33 19.03 6.4 18.89 6.4C18.88 6.4 18.88 6.4 18.87 6.4C18.73 6.4 18.6 6.35 18.5 6.25L17.4 5.17C17.2 4.97 17.2 4.64 17.4 4.44C17.6 4.24 17.93 4.23 18.13 4.44L18.83 5.13L20.83 2.79C21.02 2.57 21.34 2.55 21.56 2.73C21.79 2.91 21.81 3.24 21.63 3.45Z"
                                fill="#3E3838"
                              />
                            </svg>
                            <span className="block">مبلغ قابل پرداخت</span>
                            <span className="block"> 1.200.00 تومان</span>
                          </div>

                          <div className="w-[210px] max-[476px]:w-full h-[154px] flex flex-col items-center justify-center gap-y-2 bg-[#F5F9FF] border-[0.5px] border-solid text-[#4318FF] border-[#4318FF] rounded-[5px]">
                            {" "}
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                                fill="#4318FF"
                              />
                              <path
                                opacity="0.4"
                                d="M12.0002 14.5C6.99018 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z"
                                fill="#4318FF"
                              />
                              <path
                                d="M21.43 14.7398C20.53 13.8398 19.8201 14.1298 19.2101 14.7398L15.67 18.2799C15.53 18.4199 15.4 18.6798 15.37 18.8698L15.18 20.2198C15.11 20.7098 15.45 21.0498 15.94 20.9798L17.29 20.7898C17.48 20.7598 17.75 20.6298 17.88 20.4898L21.42 16.9499C22.04 16.3499 22.33 15.6398 21.43 14.7398Z"
                                fill="#4318FF"
                              />
                            </svg>
                            <span className="block">مبلغ اظهار شده</span>
                            <span className="block"> {item.amount} تومان</span>
                          </div>
                        </div>
                        <FinanceImageUploader />
                        <input
                          type="text"
                          className="block w-full min-h-[50px]   pr-4 outline-none border-[1px] border-solid border-[#D1D5DB] rounded-md"
                          placeholder="پیام خود را یاداشت کنید"
                        />

                        <div className="modal-action flex flex-col  w-full md:w-fit gap-2  md:flex-row mx-auto -mt-0">
                          <button
                            className="btn    min-w-[72px]  mx-auto max-md:w-full bg-[#09814A] text-white rounded-md  shadow-none !lg:w-[90px]"
                            onClick={closeModal}
                          >
                            تایید فیش{" "}
                          </button>
                          <button
                            className="btn   max-md:w-full   lg:w-[94px] mx-auto   bg-white rounded-md border-[1px] border-solid border-[#FD151B] text-[#FD151B] shadow-none"
                            onClick={closeModal}
                          >
                            رد فیش{" "}
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

export default LatestTransActionFinanceTable;
