import FilterDatePicker from "../../../../../Componants/DatePicker.jsx";
import CategoriesFilter from "../../../../../Componants/CategoriesFilter/CategoriesFilter.jsx";
import {useState} from "react";
import {tableListItem} from "../../../../../helper/ProjectData/Data.jsx";
import TableList from "../../../TableList.jsx";


const SeeWorkReportListPage = ({showCategories ,setShowCategories}) => {
    const [data, setDate] = useState('YYYY/MM/DD')
    return (
        <>
            <div className="flex items-center gap-4 cursor-pointer max-lg:flex-col max-lg:items-start">
                <div className="z-20 w-[362px] max-[440px]:w-full">
                    <FilterDatePicker date={data} setDate={setDate} />
                </div>
                <div className="z-10">
                    <CategoriesFilter showCategories={showCategories} setShowCategories={setShowCategories} />
                </div>
            </div>
            <div>
                <TableList body={tableListItem.tableBody} head={tableListItem.tableHead} />
            </div>
        </>
    )
}

export default SeeWorkReportListPage;

