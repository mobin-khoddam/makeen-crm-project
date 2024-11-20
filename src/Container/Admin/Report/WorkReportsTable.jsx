import React from "react";

const WorkReportsTable = ({ head, body }) => {
  return (
    <div className="overflow-x-auto bg-white border-[#E9E9E9] border-solid rounded-[8px] mb-[40px] ">
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
              <td className=" text-center ">{item.reportNumber}</td>
              <td className=" text-center text-[12px] md:text-[14px] lg:text-[16px] ">
                {item.fullName}
              </td>
              <td className=" text-center">{item.courseName}</td>
              <td className="text-center ">{item.courseNumber}</td>
              <td className=" text-center">
                <span className=" mx-auto text-center flex justify-center">
                  {item.workhour}
                </span>
              </td>
              <td className=" text-center">
                <button className="w-[114px] h-[40px] bg-[#F7F5FF] rounded-[8px] text-[#4318FF] ">
                  همه گزارش ها
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkReportsTable;
