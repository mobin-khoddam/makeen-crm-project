import seeReport from "/src/assets/images/Students/WorkReports/seeWorekReport.svg";

import Pagination from "../Componants/Pagination/Pagination.jsx";
import { useNavigate } from "react-router-dom";

const TableList = ({ body, head }) => {
  const navigate = useNavigate();
  const statusColorHandler = (text) => {
    switch (text) {
      case "رد شده":
        return "text-[#D10000]";
      case "تایید شده":
        return "text-[#09814A]";
      case "بررسی نشده":
        return "text-[#A3AED0]";
      case "در حال بررسی":
        return "text-[#A3AED0]";
      case "مشروط":
        return "text-[#B8860B]";
      default:
        return "text-black";
    }
  };

  return (
    <div className="overflow-x-auto mt-6 max-sm:text-sm">
      <div>
        <table className="w-full min-w-[703px] mb-10 border">
          <thead className="">
            <tr className="[&_*]:py-5 text-primary-gray-100 [&_*]:font-normal  ">
              {head.map((item) => (
                <th key={item.id}>{item.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((item) => (
              <tr key={item.id} className="[&_th]:p-5 [&_th]:odd:bg-white">
                <th>{item.one}</th>
                <th
                  className={`${
                    item.img && "flex justify-center items-center gap-2"
                  }`}
                >
                  {item.img && (
                    <img
                      className="rounded-full w-10 h-10 object-cover"
                      src={item.img}
                      alt=""
                    />
                  )}
                  {item.two}
                </th>
                <th>{item.three}</th>
                {item.five && <th>{item.five}</th>}
                <th className={`font-medium ${statusColorHandler(item.four)}`}>
                  {item.four}
                </th>
                <th className="font-medium text-primary-blue">
                  <img
                    onClick={() => {
                      navigate(`/mentor/students/${item.two}`, {
                        state: item,
                      });
                    }}
                    className="w-fit mx-auto"
                    src={`${seeReport}`}
                    alt=""
                  />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};
export default TableList;
