import CourseInformationList from "../CourseInformationList.jsx";
import arrowDown from '../../../../assets/images/Admin/Students/arrowDown.svg'
import { useState } from "react";

const StudentsCollapse = ({ data }) => {
    const [openStates, setOpenStates] = useState(
        data.map(item => ({ id: item.id, open: item.open }))
    );

    const toggleHandler = id => {
        setOpenStates(prev =>
            prev.map(item =>
                item.id === id ? { ...item, open: !item.open } : item
            )
        );
    };

    return (
        <div className="flex justify-center items-center flex-wrap gap-4 max-[1466px]:justify-center">
            {data.map(item => {
                const isOpen = openStates.find(state => state.id === item.id)?.open;

                return (
                    <details
                        open={isOpen}
                        key={item.id}
                        className={`dropdown w-[220px] bg-white shadow-xl cursor-pointer rounded-box ${isOpen && 'rounded-b-none'}`}
                    >
                        <summary
                            onClick={(e) => {
                                e.preventDefault();
                                toggleHandler(item.id)
                            }}
                            className="font-semibold flex justify-between p-5 relative">
                            <span>{item.CourseName}</span>
                            <span>{item.courseNumber}</span>
                            <img className={!isOpen ? 'absolute right-2/4 -bottom-2 translate-x-[50%]' : 'hidden'} src={arrowDown} alt='' />
                        </summary>
                        <ul className={`menu dropdown-content bg-base-100 rounded-box z-[1] w-full shadow-xl p-5 pt-0 ${isOpen && 'rounded-t-none'}`}>
                            <CourseInformationList data={item.courseList} />
                            <img
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleHandler(item.id)
                                }}
                                className='absolute right-2/4 -bottom-4 translate-x-[50%] rotate-180' src={arrowDown} alt='' />
                        </ul>
                    </details>
                );
            })}
        </div>
    );
};

export default StudentsCollapse;
