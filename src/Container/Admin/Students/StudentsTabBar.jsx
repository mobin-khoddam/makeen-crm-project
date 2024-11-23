import {useState} from "react";

const StudentsTabBar = () => {
    const [pages, setPages] = useState({first: true, second: false,})
    const pageHandler = (a) => {
        const kk = {...pages}
        for (const pageKey in kk) {
            kk[pageKey] = pageKey === a
        }
        return setPages(kk)
    }

    return (
        <div
            className='flex justify-between items-center [&_span]:text-center [&_span]:w-full [&_span]:p-4 [&_span]:duration-200'>
            <span onClick={() => pageHandler('first')}
                  className={`rounded-r-2xl ${pages.first ? 'bg-[#FACA15] text-white' : 'bg-white text-[#6B7280]'}`}>گزارش تفصیلی</span>
            <span onClick={() => pageHandler('second')}
                  className={`rounded-l-2xl ${pages.second ? 'bg-[#FACA15] text-white' : 'bg-white text-[#6B7280]'}`}>گزارش آماری</span>
        </div>
    )
}
export default StudentsTabBar