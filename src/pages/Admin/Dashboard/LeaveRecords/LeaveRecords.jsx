import OriginalTemplatePage from "../../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import LeaveRecordsTable from "./LeaveRecordsTable.jsx";
import {adminPanelLeaveRecords} from "../../../../helper/ProjectData/Data.jsx";
import CategoriesFilter from "../../../../Componants/CategoriesFilter/CategoriesFilter.jsx";
import {useState} from "react";
import DatePicker from "../../../../Componants/Datepicker/DatePicker.jsx";

const LeaveRecords = () => {
    const [state, setState] = useState(false)
    const [state1, setState1] = useState(false)
    const [state2, setState2] = useState(false)
    const data = [
        'فرانت اند',
        'بک اند',
    ]
    const data2 = [
        'react',
        'python',
    ]

    const data3 = [
        'react',
        'python',
    ]

    const closeHandler = () => {
        state && setState(false)
        state1 && setState1(false)
        state2 && setState2(false)
    }

    return (
        <div onClick={closeHandler}>
            <OriginalTemplatePage>
                <div className=' grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 max-xl:items-center max-xl:w-full w-fit gap-8 mb-10'>
                    <CategoriesFilter showCategories={state} setShowCategories={setState} className='text-primary-blue' title='نام اصلی دوره' data={data} />
                    <CategoriesFilter showCategories={state1} setShowCategories={setState1} className='text-primary-blue' title='نام فرعی دوره' data={data2} />
                    <CategoriesFilter showCategories={state2} setShowCategories={setState2} className='text-primary-blue' title='شماره دوره' data={data3} />
                    <DatePicker />
                </div>
                <div>
                    <LeaveRecordsTable tableBody={adminPanelLeaveRecords.tableBody} tableHead={adminPanelLeaveRecords.tableHead} />
                </div>
            </OriginalTemplatePage>
        </div>
    )
}
export default LeaveRecords