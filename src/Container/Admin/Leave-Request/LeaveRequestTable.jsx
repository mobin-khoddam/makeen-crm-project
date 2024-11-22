import LeaveRequestModal from "../../../Componants/LeaveRequestModal";
import Pagination from "../../../Componants/Pagination/Pagination";

const LeaveRequestTable = ({ head, body }) => {
  return (
    <div className="overflow-x-auto  border-[#E9E9E9] border-solid rounded-[8px] ">
      <table className="table table-zebra border-[1px] mb-[50px]">
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
                <span className=" items-center">
                  <span> {item.fullName}</span>{" "}
                </span>
              </td>
              <td className=" text-center ">{item.courseName}</td>
              <td className=" text-center">{item.courseNumber}</td>
              <td className="text-center ">{item.date}</td>
              <td className=" text-center">
                <span
                  style={{
                    color:
                      item.status === "تایید شده"
                        ? "#09814A"
                        : item.status === "رد شده"
                        ? "#FD151B"
                        : "#A3AED0",
                  }}
                >
                  {item.status}
                </span>
              </td>
              <td className=" text-center">
                <LeaveRequestModal title="مشاهده" data={item} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default LeaveRequestTable;
