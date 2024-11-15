import {mentorPanelStudentsBar} from "../../../helper/ProjectData/Data.jsx";

const MentorPanelStudentsBar = ({setStudentPage, studentPage}) => {

    const setPageHandler = (page) => {
        setStudentPage(item => {
            const newPage = {...item};
            for (const key in newPage) {
                newPage[key] = key === page
            }
            return newPage;
        });
    }

    const isActive = (page) => {
        return studentPage[page];
    }
    return (
        <div className='flex max-xl:flex-col'>
            {
                mentorPanelStudentsBar.map(item => {
                    const IconSvg = item.svg
                    return (
                        <div key={item.id}
                             className={`cursor-pointer duration-300 ease-linear flex items-center justify-center gap-2 w-full p-4 first:rounded-r-2xl last:rounded-l-2xl border shadow-[0px_1px_2px_0px_#00000014] max-lg:first:rounded-none max-lg:last:rounded-none max-lg:first:rounded-t-2xl max-lg:last:rounded-b-2xl ${isActive(item.page) ? 'bg-[#FACA15]' : 'bg-white'}`}
                             onClick={() => setPageHandler(item.page)}>
                            <span className={isActive(item.page) ? 'text-white' : 'text-[6B7280]'}>{item.title}</span>
                            <IconSvg
                                className={isActive(item.page) ? 'fill-white stroke-white' : 'fill-[#6B7280] stroke-[#6B7280]'}
                                src={item.icon}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MentorPanelStudentsBar;