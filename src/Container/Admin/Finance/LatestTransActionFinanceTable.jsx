import React from "react";

const LatestTransActionFinanceTable = ({ head, body }) => {
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
                  onClick={() => {}}
                  className="w-[114px] h-[40px] bg-[#F7F5FF] rounded-[10px] text-[14px] text-[#4318FF] "
                >
                  مشاهده فیش{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestTransActionFinanceTable;
