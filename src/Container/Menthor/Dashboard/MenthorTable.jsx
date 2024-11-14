import React from "react";

const MenthorTable = ({ head, body }) => {
  return (
    <div className="overflow-x-auto bg-white ">
      <table className="table table-zebra">
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
              className="text-[#3E3838] text-[12px] md:text-[15px] lg:text-[16px] h-[64px]"
            >
              <th className=" text-center pr-5 ">
                <span className=" flex w-fit justify-start   items-center">
                  <img src={item.image} className="ml-4" alt="" />

                  {item.fullName}
                </span>
              </th>
              <td className="text-center">{item.course}</td>
              <td className=" text-center ">{item.reportTime}</td>
              <td
                style={{
                  color:
                    item.status === "بررسی نشده"
                      ? "#FACA15"
                      : item.status === "تایید شده"
                      ? "#09814A"
                      : "#FD151B",
                }}
                className=" text-center"
              >
                {item.status}
              </td>
              <td className=" text-center text-[#001EBC] cursor-pointer">
                <span>مشاهده</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenthorTable;
