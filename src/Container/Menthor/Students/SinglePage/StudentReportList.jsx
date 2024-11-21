import { ReportData } from "./reportData";
import GreenBtn from "../../../../Componants/GreenBtn";

const StudentReportList = () => {
  return (
    <>
      {ReportData.map((item) => {
        return (
          <div
            key={item.id}
            className="w-full bg-white rounded-[15px] border-[1px] border-solid border-[#D1D5DB] mt-[16px] pt-4 px-6"
          >
            <div className="flex justify-between items-center mb-6 ">
              <div className="flex items-center gap-x-8 text-[13px]">
                <span>گزارش شماره {item.reportNumber}</span>
                <span className="text-[#6B7280]">{item.date}</span>
              </div>
              <button className="active:scale-95 transition-all ease-linear duration-150">
                <svg
                  className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="49"
                    height="49"
                    rx="12"
                    stroke="#D1D5DB"
                  />
                  <path
                    d="M14.9071 36.75C13.954 36.75 13.0633 36.4219 12.4227 35.8125C11.6102 35.0469 11.2196 33.8907 11.3602 32.6407L11.9383 27.5782C12.0477 26.625 12.6258 25.3594 13.2977 24.6719L26.1258 11.0938C29.329 7.70317 32.6727 7.60942 36.0633 10.8125C39.454 14.0157 39.5477 17.3594 36.3446 20.75L23.5165 34.3282C22.8602 35.0313 21.6415 35.6875 20.6883 35.8438L15.6571 36.7032C15.3915 36.7188 15.1571 36.75 14.9071 36.75ZM31.1415 10.7969C29.9383 10.7969 28.8915 11.5469 27.829 12.6719L15.0008 26.2657C14.6883 26.5938 14.329 27.375 14.2665 27.8282L13.6883 32.8907C13.6258 33.4063 13.7508 33.8282 14.0321 34.0938C14.3133 34.3594 14.7352 34.4532 15.2508 34.375L20.2821 33.5157C20.7352 33.4375 21.4852 33.0313 21.7977 32.7032L34.6258 19.125C36.5633 17.0625 37.2665 15.1563 34.4383 12.5C33.1883 11.2969 32.1102 10.7969 31.1415 10.7969Z"
                    fill="#3E3838"
                  />
                  <path
                    d="M33.3447 23.3593C33.3134 23.3593 33.2666 23.3593 33.2353 23.3593C28.3603 22.8749 24.4384 19.1718 23.6884 14.3281C23.5947 13.6874 24.0322 13.0937 24.6728 12.9843C25.3134 12.8906 25.9072 13.3281 26.0165 13.9687C26.6103 17.7499 29.6728 20.6562 33.4853 21.0312C34.1259 21.0937 34.5947 21.6718 34.5322 22.3124C34.4541 22.9062 33.9384 23.3593 33.3447 23.3593Z"
                    fill="#3E3838"
                  />
                  <path
                    d="M39.0625 41.7969H10.9375C10.2969 41.7969 9.76562 41.2656 9.76562 40.625C9.76562 39.9844 10.2969 39.4531 10.9375 39.4531H39.0625C39.7031 39.4531 40.2344 39.9844 40.2344 40.625C40.2344 41.2656 39.7031 41.7969 39.0625 41.7969Z"
                    fill="#3E3838"
                  />
                </svg>
              </button>
            </div>
            {item.reports.map((report) => {
              return (
                <div
                  key={report.id}
                  className="flex items-center justify-between h-[51px] mb-[26px]"
                >
                  <div className="flex items-center gap-x-[6px] max-lg:gap-x-1">
                    <span className="border-[1px] border-solid border-[#D1D5DB] lg:text-[14px] text-[11px] w-[51px] h-[41px]  xl:w-[61px] xl:h-[51px] rounded-md text-center xl:leading-[51px] leading-[41px] pointer-events-none max-lg:w-[41px] max-lg:h-[41px] max-lg:leading-[41px]">
                      {report.minute}
                    </span>
                    :
                    <span className="border-[1px] border-solid border-[#D1D5DB] w-[51px] h-[41px] lg:text-[14px] text-[11px] max-lg:w-[41px] max-lg:h-[41px]  xl:w-[61px] xl:h-[51px] rounded-md text-center xl:leading-[51px] leading-[41px] pointer-events-none max-lg:leading-[41px]">
                      {report.hour}
                    </span>
                  </div>
                  <div className="xl:w-[74.03100%] w-[65%] xl:h-full h-[41px] text-[11px] lg:text-[14] rounded-md border-[1px] border-solid border-[#D1D5DB] max-sm:w-[50%] max-sm:text-[9px] max-[370px]:w-[35%] max-[370px]:text-[8px] px-4 flex items-center ">
                    <span>{report.title}</span>
                  </div>
                  <button className="active:scale-95 transition-all  ease-linear duration-150">
                    <svg
                      className="w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px]  lg:h-[50px]"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="50"
                        height="50"
                        rx="12.5"
                        fill="#FD151B"
                        fill-opacity="0.1"
                      />
                      <path
                        opacity="0.4"
                        d="M39.4219 18.1562H30.7656C30.1719 18.1562 29.6875 17.6719 29.6875 17.0625C29.6875 16.4688 30.1719 15.9844 30.7656 15.9844H39.4219C40.0156 15.9844 40.5 16.4688 40.5 17.0625C40.5 17.6719 40.0156 18.1562 39.4219 18.1562Z"
                        fill="#FD151B"
                      />
                      <path
                        opacity="0.4"
                        d="M16.3438 18.1563H10.5781C9.98438 18.1563 9.5 17.6719 9.5 17.0781C9.5 16.4844 9.98438 16 10.5781 16H16.3438C16.9375 16 17.4219 16.4844 17.4219 17.0781C17.4219 17.6719 16.9375 18.1563 16.3438 18.1563Z"
                        fill="#FD151B"
                      />
                      <path
                        d="M22.1094 23.1875C25.4921 23.1875 28.2344 20.4452 28.2344 17.0625C28.2344 13.6798 25.4921 10.9375 22.1094 10.9375C18.7266 10.9375 15.9844 13.6798 15.9844 17.0625C15.9844 20.4452 18.7266 23.1875 22.1094 23.1875Z"
                        fill="#FD151B"
                      />
                      <path
                        opacity="0.4"
                        d="M39.4219 34.0156H33.6563C33.0625 34.0156 32.5781 33.5313 32.5781 32.9375C32.5781 32.3438 33.0625 31.8594 33.6563 31.8594H39.4219C40.0156 31.8594 40.5 32.3438 40.5 32.9375C40.5 33.5313 40.0156 34.0156 39.4219 34.0156Z"
                        fill="#FD151B"
                      />
                      <path
                        opacity="0.4"
                        d="M19.2344 34.0156H10.5781C9.98438 34.0156 9.5 33.5313 9.5 32.9375C9.5 32.3438 9.98438 31.8594 10.5781 31.8594H19.2344C19.8281 31.8594 20.3125 32.3438 20.3125 32.9375C20.3125 33.5313 19.8281 34.0156 19.2344 34.0156Z"
                        fill="#FD151B"
                      />
                      <path
                        d="M27.8906 39.0625C31.2734 39.0625 34.0156 36.3202 34.0156 32.9375C34.0156 29.5548 31.2734 26.8125 27.8906 26.8125C24.5079 26.8125 21.7656 29.5548 21.7656 32.9375C21.7656 36.3202 24.5079 39.0625 27.8906 39.0625Z"
                        fill="#FD151B"
                      />
                    </svg>
                  </button>
                </div>
              );
            })}

            <div className="w-full flex justify-between items-center mb-[26px]">
              <GreenBtn />
              <button className="w-[100px] text-[13px] md:text-[14px] h-[48px] rounded-md border-[1px] border-solid border-[#E5E7EB] ">
                بررسی نشده
              </button>
            </div>
            <h3 className="mb-[8px] text-[#6B7280] rounded-md text-[14px]">
              نظر استاد
            </h3>
            <div className="w-full bg-[#F9FAFB] rounded-[10px] p-4 mb-[16px]">
              <input
                type="text"
                className="w-full rounded-[8px] block mb-[16px] text-[12px] md:text-[14px] lg:text-[16px] outline-none border-[1px] border-solid  border-[#E2E5E8] pt-[13px] px-5 pb-[59px]"
                placeholder="متن خود را بنویسید ..."
              />
              <button className="bg-[#4318FF] text-[13px] md:text-[16px] w-full text-white rounded-[10px] md:w-[117px] mr-auto block h-[40px]">
                ثبت
              </button>
            </div>
            <h3 className="mb-[8px] text-[#6B7280] text-[12px] md:text-[12px]">
              نظر ادمین
            </h3>
            <span className="rounded-md text-[8px] md:text-[11px] lg:text-[16px] bg-[#F9FAFB] border-[1px] border-solid px-4 mb-6 border-[#E2E5E8] w-full flex items-center justify-center h-[78px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه لورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
              از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه{" "}
            </span>
            <button className="w-full h-[40px] bg-[#09814A] text-white rounded-lg mb-6 text-[13px] md:text-[16px]">
              تایید گزارش
            </button>
          </div>
        );
      })}
    </>
  );
};

export default StudentReportList;
