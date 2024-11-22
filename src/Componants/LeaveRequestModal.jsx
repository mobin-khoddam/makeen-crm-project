import { useState } from "react";

const LeaveRequestModal = ({ title, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        className="btn w-[74px] !h-[40px] bg-[#F7F5FF] rounded-[8px] text-[#4318FF]"
        onClick={openModal}
      >
        {title}{" "}
      </button>

      {isModalOpen && (
        <dialog className="modal modal-bottom sm:modal-middle" open>
          <div className="modal-box  bg-white">
            <div className="w-full h-[392px] bg-white flex ">
              {" "}
              <ul className="steps steps-vertical">
                <li className="step ">
                  <span className="flex flex-col items-start ">
                    {data.fullName}
                    <span className="text-[#3E3838]">{data.courseName}</span>
                  </span>
                </li>
                <li className="step">
                  <span className="flex  items-center gap-x-1">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.75 4.06V2.5C16.75 2.09 16.41 1.75 16 1.75C15.59 1.75 15.25 2.09 15.25 2.5V4H8.74998V2.5C8.74998 2.09 8.40998 1.75 7.99998 1.75C7.58998 1.75 7.24998 2.09 7.24998 2.5V4.06C4.54998 4.31 3.23999 5.92 3.03999 8.31C3.01999 8.6 3.25999 8.84 3.53999 8.84H20.46C20.75 8.84 20.99 8.59 20.96 8.31C20.76 5.92 19.45 4.31 16.75 4.06Z"
                        fill="#3E3838"
                      />
                      <path
                        opacity="0.4"
                        d="M21 11.34V13.08C21 13.69 20.46 14.16 19.86 14.06C19.58 14.02 19.29 13.99 19 13.99C15.97 13.99 13.5 16.46 13.5 19.49C13.5 19.95 13.68 20.59 13.87 21.17C14.09 21.82 13.61 22.49 12.92 22.49H8C4.5 22.49 3 20.49 3 17.49V11.33C3 10.78 3.45 10.33 4 10.33H20C20.55 10.34 21 10.79 21 11.34Z"
                        fill="#3E3838"
                      />
                      <path
                        d="M19 15.5C16.79 15.5 15 17.29 15 19.5C15 20.25 15.21 20.96 15.58 21.56C16.27 22.72 17.54 23.5 19 23.5C20.46 23.5 21.73 22.72 22.42 21.56C22.79 20.96 23 20.25 23 19.5C23 17.29 21.21 15.5 19 15.5ZM21.07 19.07L18.94 21.04C18.8 21.17 18.61 21.24 18.43 21.24C18.24 21.24 18.05 21.17 17.9 21.02L16.91 20.03C16.62 19.74 16.62 19.26 16.91 18.97C17.2 18.68 17.68 18.68 17.97 18.97L18.45 19.45L20.05 17.97C20.35 17.69 20.83 17.71 21.11 18.01C21.39 18.31 21.37 18.78 21.07 19.07Z"
                        fill="#3E3838"
                      />
                      <path
                        d="M8.5 15.5C8.24 15.5 7.98 15.39 7.79 15.21C7.61 15.02 7.5 14.76 7.5 14.5C7.5 14.24 7.61 13.98 7.79 13.79C8.02 13.56 8.37 13.45 8.7 13.52C8.76 13.53 8.82 13.55 8.88 13.58C8.94 13.6 9 13.63 9.06 13.67C9.11 13.71 9.16 13.75 9.21 13.79C9.39 13.98 9.5 14.24 9.5 14.5C9.5 14.76 9.39 15.02 9.21 15.21C9.16 15.25 9.11 15.29 9.06 15.33C9 15.37 8.94 15.4 8.88 15.42C8.82 15.45 8.76 15.47 8.7 15.48C8.63 15.49 8.56 15.5 8.5 15.5Z"
                        fill="#3E3838"
                      />
                      <path
                        d="M12 15.4999C11.74 15.4999 11.48 15.3899 11.29 15.2099C11.11 15.0199 11 14.7599 11 14.4999C11 14.2399 11.11 13.98 11.29 13.79C11.67 13.42 12.34 13.42 12.71 13.79C12.89 13.98 13 14.2399 13 14.4999C13 14.7599 12.89 15.0199 12.71 15.2099C12.52 15.3899 12.26 15.4999 12 15.4999Z"
                        fill="#3E3838"
                      />
                      <path
                        d="M8.5 19C8.24 19 7.98 18.89 7.79 18.71C7.61 18.52 7.5 18.26 7.5 18C7.5 17.74 7.61 17.48 7.79 17.29C7.89 17.2 7.99 17.13 8.12 17.08C8.49 16.92 8.93 17.01 9.21 17.29C9.39 17.48 9.5 17.74 9.5 18C9.5 18.26 9.39 18.52 9.21 18.71C9.02 18.89 8.76 19 8.5 19Z"
                        fill="#3E3838"
                      />
                    </svg>
                    {data.date}
                  </span>
                </li>
                <li className="step">
                  <span className="flex  items-center gap-x-1">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
                        fill="#3E3838"
                      />
                      <path
                        d="M15.71 16.43C15.58 16.43 15.45 16.4 15.33 16.32L12.23 14.47C11.46 14.01 10.89 13 10.89 12.11V8.01001C10.89 7.60001 11.23 7.26001 11.64 7.26001C12.05 7.26001 12.39 7.60001 12.39 8.01001V12.11C12.39 12.47 12.69 13 13 13.18L16.1 15.03C16.46 15.24 16.57 15.7 16.36 16.06C16.21 16.3 15.96 16.43 15.71 16.43Z"
                        fill="#3E3838"
                      />
                    </svg>
                    ساعت 16 تا 8
                  </span>
                </li>
                <li className="step step-info">
                  <span className="flex flex-col gap-3 items-start">
                    مریضی
                    <span className="text-[#3E3838] text-right">
                      با سلام و عرض ادب بنده به علت سرماخوردگی در این تاریخ و
                      ساعت امکان حضور در کلاس را نخواهم داشت.ممنون
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="modal-action ">
              <button
                className="btn ml-auto min-w-[86px] bg-white rounded-md border-[1px] border-solid border-[#4318FF] text-[#4318FF]"
                onClick={closeModal}
              >
                {data.status}
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default LeaveRequestModal;
