
import Pagination from "../../../Componants/Pagination/Pagination";

const MessagesMentor = ({ messageData }) => {
  return (
    <>
      <div className="mb-[55px]">
        {messageData.map((message) => {
          return (
            <div
              className="w-full h-[171px] flex items-start justify-between mb-8 "
              key={message.id}
            >
              <img
                className=" xl:w-12 lg:w-10 sm:w-9 object-cover w-10 max-sm:w-8 rounded-full"
                src={message.image}
                alt="icon"
              />
              <div className="xl:w-[93.7984496124031%] lg:w-[92%] w-[90%] sm:w-[91%] max-sm:w-[85%]  h-full rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] pt-2 flex flex-col  justify-start items-center gap-y-2 bg-white">
                <div className="flex items-center justify-between pt-[6.5px] w-[95.5578512%]">
                  <div className="">
                    <span className="w-2 h-2 rounded-full bg-[#FACA15] ml-1 inline-block"></span>
                    <span className="xl:text-[16px] lg:text-[14px] sm:text-[12px] text-[13px] text-[#6B7280] max-sm:text-[12px] max-[337px]:text-[9px]">
                      موضوع پیام:
                    </span>
                    <span className="xl:text-[16px] lg:text-[14px] text-[13px]  sm:text-[12px] text-black max-sm:text-[12px] max-[337px]:text-[9px]">
                      {" "}
                      {message.title}
                    </span>
                  </div>
                  <span className="text-[#6B7280] text-[13px] sm:text-[12px] max-sm:text-[12px] max-[337px]:text-[9px]  ">
                    تاریخ: {message.date}
                  </span>
                </div>
                <hr className="w-full h-px bg-[#F4F4F6] my-2 " />
                <div className="w-[95.5578512%] xl:text-[15px] md:text-[11px]  sm:text-[13px] text-[12px] text-right max-[536px]:text-[8px]">
                  {message.description}{" "}
                  <span className="cursor-pointer text-[#3185FC]">
                    مشاهده همه {">>"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination />
    </>
  );
};

export default MessagesMentor;
