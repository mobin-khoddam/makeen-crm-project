import OriginalTemplatePage from "../../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import LeaveRecordsTable from "./LeaveRecordsTable.jsx";
import {adminPanelLeaveRecords} from "../../../../helper/ProjectData/Data.jsx";
import {useState} from "react";
import DatePicker from "../../../../Componants/Datepicker/DatePicker.jsx";
import Select from "../../../../Componants/Select.jsx";

const LeaveRecords = () => {
    const [state, setState] = useState(false)
    const [state1, setState1] = useState(false)
    const [state2, setState2] = useState(false)

    const data = {
        title: 'نام اصلی دوره',
        options: [
            {id: 1, option: 'فرانت اند'},
            {id: 2, option: 'بک اند'},
        ]
    }
    const data2 = {
        title: 'نام فرعی دوره',
        options: [
            {id: 1, option: 'react'},
            {id: 2, option: 'python'},
        ]
    }
    const data3 = {
        title: 'شماره دوره',
        options: [
            {id: 1, option: 17},
            {id: 2, option: 16},
        ]
    }


    const closeHandler = () => {
        state && setState(false)
        state1 && setState1(false)
        state2 && setState2(false)
    }

    return (
        <div onClick={closeHandler}>
            <OriginalTemplatePage>
                <div className='grid items-center grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 max-xl:mx-auto w-fit gap-8 mb-10 '>
                    <Select data={data} />
                    <Select data={data2} />
                    <Select data={data3} />
                    <div className='max-w-[320px]'><DatePicker /></div>
                </div>
                <div>
                    <LeaveRecordsTable tableBody={adminPanelLeaveRecords.tableBody} tableHead={adminPanelLeaveRecords.tableHead} />
                </div>
            </OriginalTemplatePage>
        </div>
    )
}
export default LeaveRecords