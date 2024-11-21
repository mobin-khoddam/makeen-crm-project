const ReportSheetTable = ({ head, body }) => {
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
              <td className=" text-center ">
                <span className="flex  justify-center h-full text-[12px] lg:text-[16px] items-center">
                  <input
                    type="checkbox"
                    className=" ml-3 !rounded-[8px] border-[1px] border-[#D1D5DB] border-solid inline-block w-[24px] h-[24px]"
                  />
                  <span> {item.fullName}</span>{" "}
                </span>
              </td>
              <td className=" text-center ">{item.courseName}</td>
              <td className=" text-center">{item.courseNumber}</td>
              <td className=" ">
                <span className="rounded-[8px] font-medium block border-[1px] border-solid border-[#4318FF] text-[#4318FF] w-[24px] h-[24px] mx-auto text-center">
                  {item.technicalMark}
                </span>
              </td>
              <td className=" text-center">
                <span className="rounded-[8px] font-medium block border-[1px] border-solid border-[#4318FF] text-[#4318FF] w-[24px] h-[24px] mx-auto text-center">
                  {item.SoftMark}
                </span>
              </td>
              <td className=" text-center">
                <button className="w-[74px] h-[40px] bg-[#F7F5FF] rounded-[8px] text-[#4318FF]">
                  مشاهده
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportSheetTable;
