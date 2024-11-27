import {useState} from "react";
import LeaveRecordsTable from "../../../../../pages/Admin/Dashboard/LeaveRecords/LeaveRecordsTable.jsx";
import {adminPanelStudentsFinanceData} from "../../../../../helper/ProjectData/Data.jsx";

const FinancialAffairsTabBar = () => {
    const [financePage, setFinancePage] = useState(
        [
            {
                id: 1,
                title: 'دانشجویی',
                active: true,
                page: <LeaveRecordsTable tableBody={adminPanelStudentsFinanceData.body}
                                         tableHead={adminPanelStudentsFinanceData.head}/>
            },
            {
                id: 2,
                title: 'جریمه',
                active: false,
                page: <LeaveRecordsTable tableBody={adminPanelStudentsFinanceData.body}
                                         tableHead={adminPanelStudentsFinanceData.head}/>
            },
            {
                id: 3,
                title: 'فارغ التحصیلی',
                active: false,
                page: <LeaveRecordsTable tableBody={adminPanelStudentsFinanceData.body}
                                         tableHead={adminPanelStudentsFinanceData.head}/>
            },
            {id: 4, title: 'سایر', active: false, disable: true},
        ]
    )
    const changePage = (id) => {
        const newPage = [...financePage]
        newPage.map((item) => item.active = id === item.id)
        setFinancePage(newPage)
    }
    const showPage = () => {
        return financePage.map(page => page.active && <span key={page.id}>{page.page}</span>)
    }
    return (
        <div>
            <div className='flex justify-between first:[&>button]:rounded-r-box last:[&>button]:rounded-l-box'>
                {financePage.map(item => (
                    <button key={item.id}
                          onClick={() => !item.disable && changePage(item.id)}
                          className={`w-full block text-center p-5 border cursor-pointer ${item.active ? 'bg-primary-blue text-white' : 'bg-white text-[#6B7280]'}`}>{item.title}</button>
                ))}
            </div>
            {showPage()}
        </div>
    )
}
export default FinancialAffairsTabBar;