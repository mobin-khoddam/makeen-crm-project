import { useState } from "react";

const Debts = ({ head, body }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);
  return (
    <>
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
                <td className=" text-center ">{item.fullName}</td>
                <td className=" text-center text-[12px] md:text-[14px] lg:text-[16px] ">
                  {item.course}
                </td>
                <td className=" text-center">{item.courseNumber}</td>
                <td className="text-center ">{item.deadline}</td>
                <td className="text-center ">{item.total}</td>
                <td className="text-center ">
                  <span
                    style={{
                      color:
                        item.status === "دانشجو"
                          ? "#FF00B8"
                          : item.status === "انصراف"
                          ? "#A3AED0"
                          : item.status === "اتمام دوره"
                          ? "#BDB600"
                          : item.status === "شاغل"
                          ? "#09814A"
                          : "#FD151B",
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
                    ارسال اعلان
                  </button>

                  {isModalOpen && (
                    <dialog
                      className="modal modal-bottom  bg-[#0000001b] sm:modal-middle"
                      open
                    >
                      <div className="modal-box  p-4 px-6 bg-white shadow-sm w-full max-sm:w-[95%] max-sm:left-1/2 max-sm:-translate-x-[50%] max-sm:absolute max-sm:top-5  max-sm:py-3   ">
                        <div className="w-full h-[591px] bg-white flex flex-col gap-y-6 ">
                          <div className="w-full flex items-center justify-between">
                            <span>{item.name}</span>
                            <span>
                              {item.course} {item.courseNumber}
                            </span>
                          </div>
                          <div className="flex w-full  items-center justify-between max-[476px]:flex-col max-[476px]:w-full gap-y-3">
                            <div className="w-[210px] max-[476px]:w-full h-[154px] flex flex-col items-center justify-center gap-y-2 bg-[#F5F9FF] border-[0.5px] border-solid text-[#4318FF] border-[#4318FF] rounded-[5px]">
                              {" "}
                              <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  opacity="0.4"
                                  d="M22 8.2699V9.4999H2V8.0399C2 5.7499 3.86 3.8999 6.15 3.8999H16V6.4699C16 7.7399 16.76 8.4999 18.03 8.4999H20.97C21.37 8.4999 21.71 8.4299 22 8.2699Z"
                                  fill="#4318FF"
                                />
                                <path
                                  d="M2 9.5V16.96C2 19.25 3.86 21.1 6.15 21.1H17.85C20.14 21.1 22 19.25 22 16.96V9.5H2ZM8 17.75H6C5.59 17.75 5.25 17.41 5.25 17C5.25 16.59 5.59 16.25 6 16.25H8C8.41 16.25 8.75 16.59 8.75 17C8.75 17.41 8.41 17.75 8 17.75ZM14.5 17.75H10.5C10.09 17.75 9.75 17.41 9.75 17C9.75 16.59 10.09 16.25 10.5 16.25H14.5C14.91 16.25 15.25 16.59 15.25 17C15.25 17.41 14.91 17.75 14.5 17.75Z"
                                  fill="#4318FF"
                                />
                                <path
                                  d="M20.97 1.5H18.03C16.76 1.5 16 2.26 16 3.53V6.47C16 7.74 16.76 8.5 18.03 8.5H20.97C22.24 8.5 23 7.74 23 6.47V3.53C23 2.26 22.24 1.5 20.97 1.5ZM21.63 3.95L19.26 6.72C19.17 6.83 19.03 6.9 18.89 6.9C18.88 6.9 18.88 6.9 18.87 6.9C18.73 6.9 18.6 6.85 18.5 6.75L17.4 5.67C17.2 5.47 17.2 5.14 17.4 4.94C17.6 4.74 17.93 4.73 18.13 4.94L18.83 5.63L20.83 3.29C21.02 3.07 21.34 3.05 21.56 3.23C21.79 3.41 21.81 3.74 21.63 3.95Z"
                                  fill="#4318FF"
                                />
                              </svg>
                              <span className="block">مبلغ قابل پرداخت</span>
                              <span className="block"> 1.200.00 تومان</span>
                              <span></span>
                            </div>
                            <div className="w-[210px] max-[476px]:w-full h-[154px] flex flex-col items-center justify-center gap-y-2 bg-[#FEF7F7] border-[0.5px] border-solid border-[#FF0000] rounded-[5px]">
                              <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.7502 4.06V2.5C16.7502 2.09 16.4102 1.75 16.0002 1.75C15.5902 1.75 15.2502 2.09 15.2502 2.5V4H8.75024V2.5C8.75024 2.09 8.41024 1.75 8.00024 1.75C7.59024 1.75 7.25024 2.09 7.25024 2.5V4.06C4.55024 4.31 3.24023 5.92 3.04023 8.31C3.02023 8.6 3.26023 8.84 3.54023 8.84H20.4602C20.7502 8.84 20.9902 8.59 20.9602 8.31C20.7602 5.92 19.4502 4.31 16.7502 4.06Z"
                                  fill="#FF0000"
                                />
                                <path
                                  opacity="0.4"
                                  d="M21 11.3401V13.0801C21 13.6901 20.46 14.1601 19.86 14.0601C19.58 14.0201 19.29 13.9901 19 13.9901C15.97 13.9901 13.5 16.4601 13.5 19.4901C13.5 19.9501 13.68 20.5901 13.87 21.1701C14.09 21.8201 13.61 22.4901 12.92 22.4901H8C4.5 22.4901 3 20.4901 3 17.4901V11.3301C3 10.7801 3.45 10.3301 4 10.3301H20C20.55 10.3401 21 10.7901 21 11.3401Z"
                                  fill="#FF0000"
                                />
                                <path
                                  d="M19 15.5C16.79 15.5 15 17.29 15 19.5C15 21.71 16.79 23.5 19 23.5C21.21 23.5 23 21.71 23 19.5C23 17.29 21.21 15.5 19 15.5ZM20.6 21.14C20.45 21.29 20.26 21.36 20.07 21.36C19.88 21.36 19.69 21.29 19.54 21.14L19.01 20.61L18.46 21.16C18.31 21.31 18.12 21.38 17.93 21.38C17.74 21.38 17.55 21.31 17.4 21.16C17.11 20.87 17.11 20.39 17.4 20.1L17.95 19.55L17.42 19.02C17.13 18.73 17.13 18.25 17.42 17.96C17.71 17.67 18.19 17.67 18.48 17.96L19.01 18.49L19.51 17.99C19.8 17.7 20.28 17.7 20.57 17.99C20.86 18.28 20.86 18.76 20.57 19.05L20.07 19.55L20.6 20.08C20.89 20.38 20.89 20.85 20.6 21.14Z"
                                  fill="#FF0000"
                                />
                                <path
                                  d="M8.5 15.4999C8.24 15.4999 7.98 15.3899 7.79 15.2099C7.61 15.0199 7.5 14.7599 7.5 14.4999C7.5 14.2399 7.61 13.9799 7.79 13.7899C8.02 13.5599 8.37 13.4499 8.7 13.5199C8.76 13.5299 8.82 13.5499 8.88 13.5799C8.94 13.5999 9 13.6299 9.06 13.6699C9.11 13.7099 9.16 13.7499 9.21 13.7899C9.39 13.9799 9.5 14.2399 9.5 14.4999C9.5 14.7599 9.39 15.0199 9.21 15.2099C9.16 15.2499 9.11 15.2899 9.06 15.3299C9 15.3699 8.94 15.3999 8.88 15.4199C8.82 15.4499 8.76 15.4699 8.7 15.4799C8.63 15.4899 8.56 15.4999 8.5 15.4999Z"
                                  fill="#FF0000"
                                />
                                <path
                                  d="M12 15.5002C11.74 15.5002 11.48 15.3902 11.29 15.2102C11.11 15.0202 11 14.7602 11 14.5002C11 14.2402 11.11 13.9802 11.29 13.7902C11.67 13.4202 12.34 13.4202 12.71 13.7902C12.89 13.9802 13 14.2402 13 14.5002C13 14.7602 12.89 15.0202 12.71 15.2102C12.52 15.3902 12.26 15.5002 12 15.5002Z"
                                  fill="#FF0000"
                                />
                                <path
                                  d="M8.5 18.9999C8.24 18.9999 7.98 18.8899 7.79 18.7099C7.61 18.5199 7.5 18.2599 7.5 17.9999C7.5 17.7399 7.61 17.4799 7.79 17.2899C7.89 17.1999 7.99 17.1299 8.12 17.0799C8.49 16.9199 8.93 17.0099 9.21 17.2899C9.39 17.4799 9.5 17.7399 9.5 17.9999C9.5 18.2599 9.39 18.5199 9.21 18.7099C9.02 18.8899 8.76 18.9999 8.5 18.9999Z"
                                  fill="#FF0000"
                                />
                              </svg>
                              <span className="block">مهلت پرداخت</span>
                              <span className="block">
                                {" "}
                                {item.PaymentDeadline}
                              </span>
                            </div>
                          </div>

                          <input
                            type="text"
                            className="block w-full min-h-[50px]   pr-4 outline-none border-[1px] border-solid border-[#D1D5DB] rounded-md"
                            placeholder="موضوع پیام"
                          />

                          <input
                            type="text"
                            className="block w-full min-h-[110px]  pr-4   outline-none border-[1px] border-solid border-[#D1D5DB] rounded-md"
                            placeholder="متن پیام"
                          />
                          <div className="w-full h-fit flex items-center gap-x-4 text-[13px] sm:text-[16px] ">
                            <span className="text-[13px] sm:text-[16px]">
                              ارسال به صورت:
                            </span>
                            <span className="flex items-center gap-x-2">
                              <input type="checkbox" />
                              اعلان
                            </span>
                            <span className="flex items-center gap-x-2">
                              <input type="checkbox" />
                              پیامک
                            </span>
                            <span className="flex items-center gap-x-2">
                              <input type="checkbox" />
                              ایمیل
                            </span>
                          </div>
                          <div className="modal-action flex flex-col  w-full md:w-fit gap-2  md:flex-row mx-auto">
                            <button
                              className="btn    min-w-[80px]  mx-auto max-md:w-full bg-[#4318FF] text-white rounded-md  shadow-none !lg:w-[90px]"
                              onClick={closeModal}
                            >
                              ارسال{" "}
                            </button>
                            <button
                              className="btn   max-md:w-full   lg:w-[94px] mx-auto   bg-white rounded-md border-[1px] border-solid border-[#3E3838] text-[#3E3838] shadow-none"
                              onClick={closeModal}
                            >
                              بازگشت{" "}
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
    </>
  );
};

export default Debts;
