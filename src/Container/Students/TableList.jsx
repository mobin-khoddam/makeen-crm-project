import seeReport from "/src/assets/images/Students/WorkReports/seeWorekReport.svg";
import Pagination from "../../Componants/Pagination/Pagination.jsx";

const TableList = ({body, head}) => {
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
        <div>
            <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[703px] mb-10 border">
                    <thead className="">
                    <tr className="[&_*]:py-5 text-primary-gray-100 [&_*]:font-normal  ">
                        {
                            head.map((elem) => (
                                <th key={elem.id}>
                                    {elem.title}
                                </th>
                            ))
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {body.map((item) => (
                        <tr key={item.id} className="[&_th]:p-5 [&_th]:odd:bg-white">
                            <th>{item.one}</th>
                            <th>{item.two}</th>
                            <th>{item.three}</th>
                            <th
                                className={`font-medium ${statusColorHandler(
                                    item.four
                                )}`}
                            >
                                {item.four}
                            </th>
                            <th className="font-medium text-primary-blue">
                                <img className="w-fit mx-auto" src={`${seeReport}`} alt=""/>
                            </th>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <Pagination/>
        </div>
    );
};

export default TableList;
