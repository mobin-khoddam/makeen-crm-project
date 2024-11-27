import OriginalTemplatePage from "../../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import {useState} from "react";
import PersonalInformationForm from "../../../../Componants/PersonalInformationForm.jsx";
import CourseInformation from "../../../../Container/Admin/Students/StudentsInformation/CourseInformation.jsx";
import PerformanceReport from "../../../../Container/Admin/Students/StudentsInformation/PerformanceReport.jsx";
import FinancialAffairs from "../../../../Container/Admin/Students/StudentsInformation/FinancialAffairs/FinancialAffairs.jsx";
import LeaveRequest from "../../../../Container/Admin/Students/StudentsInformation/LeaveRequest.jsx";
import Employment from "../../../../Container/Admin/Students/StudentsInformation/Employment.jsx";
import arrow from '../../../../assets/images/GeneralImages/arrow-left-gray.svg'

const StudentsInformationPage = () => {
    const [page, setPage] = useState([
        {id: 1, title: 'اطلاعات فردی', active: true, page: <PersonalInformationForm/>,},
        {id: 2, title: 'اطلاعات دوره', active: false, page: <CourseInformation />},
        {id: 3, title: 'گزارش عملکرد', active: false, page: <PerformanceReport />},
        {id: 4, title: 'امور مالی', active: false, page: <FinancialAffairs />},
        {id: 5, title: 'مرخصی ها', active: false, page: <LeaveRequest />},
        {id: 6, title: 'اسختدام', active: false, page: <Employment />},
    ]);
    const onChange = (id) => {
        const newPage = [...page]
        newPage.map(page => {
            page.active = page.id === id
        })
        setPage(newPage)
    }
    const showPage = () => {
        return page.map(page => page.active && <span key={`${page.id}-page`}>{page.page}</span>)
    }
    return (
        <OriginalTemplatePage>
            <div className='flex justify-between items-center mb-6'>
                <div className='flex flex-col'>
                    <span className='font-semibold'>محمد مهدی امیری</span>
                    <span className='text-sm'>php 14</span>
                </div>
                <button className='px-4 py-3 border border-black rounded-xl flex items-center gap-2'>
                    <span>عملیات</span>
                    <img className='-rotate-90' src={arrow} alt='arrow' />
                </button>
            </div>
            <div className='flex first:[&>button]:rounded-r-2xl last:[&>button]:rounded-l-2xl mb-8'>
                {page.map((item) => (
                    <button onClick={() => onChange(item.id)} key={item.id}
                          className={`w-full block p-5 text-center border ${item.active ? 'bg-[#FACA15] text-white' : 'bg-white text-[#6B7280]'}`}>{item.title}</button>
                ))}
            </div>
            {showPage()}
        </OriginalTemplatePage>
    )
}
export default StudentsInformationPage