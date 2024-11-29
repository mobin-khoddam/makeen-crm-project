import {useState} from "react";
import CourseList from "./CourseList.jsx";
import {
    panelAdminCourses,
    panelAdminCourses2,
    panelAdminCourses3
} from "../../../helper/ProjectData/Data.jsx";
import CustomButton from "../../Students/CustomButton.jsx";
import Select from "../../../Componants/Select.jsx";
import SearchInput from "../SearchInput.jsx";

const CoursesTabBar = () => {
    const [page, setPage] = useState([
        {id: 1, title: 'front end', active: true, page: <CourseList data={panelAdminCourses}/>},
        {id: 2, title: 'back end', active: false, page: <CourseList data={panelAdminCourses2}/>},
        {id: 3, title: 'ui/ux', active: false, page: <CourseList data={panelAdminCourses3}/>},
    ])
    const pageHandler = (id) => {
        const newPage = [...page]
        newPage.map(page => {
            page.active = page.id === id
        })
        setPage(newPage)
    }
    const showPage = () => (
        page.map(item => item.active && <span key={`${item.id}-page`}>{item.page}</span>)
    )
    const courseName = {
        title: 'نام فرعی دوره',
        options: [
            {id: 1, option: 'react'},
            {id: 2, option: 'python'},
            {id: 3, option: 'go lang'},
        ]
    }
    const courseNumber = {
        title: 'نام فرعی دوره',
        options: [
            {id: 1, option: 'react'},
            {id: 2, option: 'python'},
            {id: 3, option: 'go lang'},
        ]
    }
    return (
        <div className='flex flex-col gap-10'>
            <CustomButton href='/admin/courses/add-course' className='!px-14' text='افزودن دوره'/>
            <div className='flex justify-between gap-8 max-xl:flex-col'>
                <div className='flex items-center gap- w-2/4 text-nowrap gap-6 max-xl:w-full max-sm:flex-col'>
                    <span>فیلتر کردن:</span>
                    <Select data={courseName}/>
                    <Select data={courseNumber}/>
                </div>
                <div className='w-2/6 max-xl:w-full max-sm:flex-col'>
                    <SearchInput className='!w-full' placholder='جستجوی دوره'/>
                </div>
            </div>
            <div className='flex max-sm:flex-col max-sm:rounded-box overflow-auto '>
                {page.map(item => (
                    <button onClick={() => pageHandler(item.id)}
                            className={`duration-200 w-full p-5 first:rounded-r-box last:rounded-l-box border max-lg:text-sm first:max-sm:rounded-none last:max-sm:rounded-none ${item.active ? 'text-white bg-[#FACA15]' : 'text-[#6B7280] bg-white'}`}
                            key={item.id}>
                        {item.title}
                    </button>
                ))}
            </div>
            {showPage()}
        </div>
    )
}
export default CoursesTabBar