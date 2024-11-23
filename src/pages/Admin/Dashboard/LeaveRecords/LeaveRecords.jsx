import OriginalTemplatePage from "../../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import LeaveRecordsTable from "./LeaveRecordsTable.jsx";
import {adminPanelLeaveRecords} from "../../../../helper/ProjectData/Data.jsx";
import CategoriesFilter from "../../../../Componants/CategoriesFilter/CategoriesFilter.jsx";
import {useState} from "react";
import DatePicker from "../../../../Componants/Datepicker/DatePicker.jsx";

const LeaveRecords = () => {
    const [state, setState] = useState()
    const [state1, setState1] = useState()
    const [state2, setState2] = useState()
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


    return (
        <OriginalTemplatePage>
            <div className='z-20 flex gap-8'>
                <CategoriesFilter showCategories={state} setShowCategories={setState} className='text-primary-blue' title='نام اصلی دوره' data={data} />
                <CategoriesFilter showCategories={state1} setShowCategories={setState1} className='text-primary-blue' title='نام فرعی دوره' data={data2} />
                <CategoriesFilter showCategories={state2} setShowCategories={setState2} className='text-primary-blue' title='شماره دوره' data={data3} />
                <DatePicker />
            </div>
            <div className='z-10'>
                <LeaveRecordsTable tableBody={adminPanelLeaveRecords.tableBody} tableHead={adminPanelLeaveRecords.tableHead} />
            </div>
        </OriginalTemplatePage>
    )
}
export default LeaveRecords