import OriginalTemplatePage from "../../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import {useState} from "react";
import PersonalInformationForm from "../../../../Componants/PersonalInformationForm.jsx";

const StudentsInformationTabBar = () => {
    const [page, setPage] = useState([
        {id: 1, title: 'اطلاعات فردی', active: true, page: <PersonalInformationForm/>},
        {id: 2, title: 'اظلاعات دوره', active: false},
        {id: 3, title: 'گزارش عملکرد', active: false},
        {id: 4, title: 'امور مالی', active: false},
        {id: 5, title: 'مرخصی ها', active: false},
        {id: 6, title: 'اسختدام', active: false},
    ]);
    const onChange = (id) => {
        const newPage = [...page]
        newPage.map(page => {
            page.active = page.id === id
        })
        setPage(newPage)
    }
    const showPage = () => {
        return page.map(page => page.active && page.page)
    }
    return (
        <OriginalTemplatePage>
            <div className='flex first:[&>span]:rounded-r-2xl last:[&>span]:rounded-l-2xl mb-8'>
                {page.map((item) => (
                    <span onClick={() => onChange(item.id)} key={item.id}
                          className={`w-full block p-5 text-center cursor-pointer ${item.active ? 'bg-[#FACA15] text-white' : 'bg-white text-[#6B7280]'}`}>{item.title}</span>
                ))}
            </div>
            {showPage()}
        </OriginalTemplatePage>
    )
}
export default StudentsInformationTabBar