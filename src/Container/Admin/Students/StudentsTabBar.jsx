import {useState} from "react";
import FilterStudents from "../FilterStudents.jsx";
import CustomButton from "../../Students/CustomButton.jsx";
import SearchInput from "../SearchInput.jsx";
import DetailedReport from "./DetailedReportPage/DetailedReport.jsx";
import StatisticalReport from "./StatisticalReportPage/StatisticalReport.jsx";

const StudentsTabBar = () => {
    const [pages, setPages] = useState({first: true, second: false,})
    const pageHandler = (a) => {
        const copyPages = {...pages}
        for (const pageKey in copyPages) {
            copyPages[pageKey] = pageKey === a
        }
        return setPages(copyPages)
    }

    return (
        <>
            <div className='flex justify-between mb-10 mt-6 gap-10 max-sm:flex-col'>
                <CustomButton text='افزودن دانشجو'/>
                <SearchInput placholder='جستجوی نام دانشجو/شماره گزارش'/>
            </div>
            <div
                className='flex justify-between items-center [&_span]:text-center [&_span]:w-full [&_span]:p-4 [&_span]:duration-200 cursor-pointer'>
            <span onClick={() => pageHandler('first')}
                  className={`rounded-r-2xl ${pages.first ? 'bg-[#FACA15] text-white' : 'bg-white text-[#6B7280]'}`}>گزارش تفصیلی</span>
                <span onClick={() => pageHandler('second')}
                      className={`rounded-l-2xl ${pages.second ? 'bg-[#FACA15] text-white' : 'bg-white text-[#6B7280]'}`}>گزارش آماری</span>
            </div>
            <div className='flex items-center gap-7 my-10 max-sm:flex-col text-nowrap'>
                <span>نمایش بر اساس :</span>
                <FilterStudents/>
            </div>
            {pages.first && <DetailedReport />}
            {pages.second && <StatisticalReport />}
        </>
    )
}
export default StudentsTabBar