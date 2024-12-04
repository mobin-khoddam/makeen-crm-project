import { useNavigate } from "react-router-dom";

const AdminMentorsTable = ({ head, body }) => {
  const navigate = useNavigate();
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
              <td className=" text-center ">{item.fullName}</td>
              <td className=" text-center text-[12px] md:text-[14px] lg:text-[16px] ">
                {item.courseName}
              </td>
              <td className=" text-center">{item.date}</td>
              <td className="text-center ">
                <span
                  className=" mx-auto drop-shadow-sm border-[1px] border-solid border-[#09814A] rounded-[37px] block h-[28px] leading-[28px] text-[14px]"
                  style={{
                    width: item.status === "فعال	" ? "48px" : "67px",
                    color: item.status === "فعال" ? "#09814A" : "#A3AED0",
                  }}
                >
                  {item.status}
                </span>
              </td>

              <td className=" text-center">
                <button
                  onClick={() => {
                    navigate(
                      `/admin/work-report-and-report-card/${item.fullName}  `,
                      {
                        state: {
                          id: item.id,
                          fullName: item.fullName,
                          img: item.img,
                          courseName: item.courseName,
                          courseNumber: item.courseNumber,
                        },
                      }
                    );
                  }}
                  className="w-[114px] h-[40px] bg-[#F7F5FF] rounded-[10px] text-[14px] text-[#4318FF] "
                >
                  مشاهده اطلاعات{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMentorsTable;
