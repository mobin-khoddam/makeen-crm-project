import {SeeTableReportList} from "../../../../../../helper/ProjectData/Data.js";
import seeReport from '/src/assets/images/Students/WorkReports/seeWorekReport.svg'
import Pagination from "../../../../../../Componants/Pagination/Pagination.jsx";

const WorkReportList = () => {
    const statusColorHandler = (text) => {
        switch (text) {
            case 'رد شده' :
                return 'text-[#FD151B]'
            case 'تایید شده' :
                return 'text-[#09814A]'
            case 'بررسی نشده' :
                return 'text-[#A3AED0]'
        }
    }
    return (
        <div>
            <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[703px] mb-10 ">
                    <thead className="">
                    <tr className="[&_*]:py-5 text-primary-gray-100 [&_*]:font-normal border ">
                        <th>شماره گزارش</th>
                        <th>تاریخ</th>
                        <th>زمان گزارش</th>
                        <th>وضعیت گزارش</th>
                        <th>عملیات</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        SeeTableReportList.map((item, index) => (
                            <tr key={item.id} className="[&_th]:p-5 [&_th]:odd:bg-white">
                                <th>{item.reportNumber}</th>
                                <th>{item.date}</th>
                                <th>{item.reportTime}</th>
                                <th className={`font-medium ${statusColorHandler(item.reportStatus)}`}>{item.reportStatus}</th>
                                <th className="font-medium text-primary-blue">
                                    <img className="w-fit mx-auto" src={`${seeReport}`} alt=""/>
                                </th>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <Pagination/>
        </div>
    )
}

export default WorkReportList