import {CourseCardList} from "../../../../helper/ProjectData/Data.jsx";
import CourseCard from "./CourseCard.jsx";
import {useRef} from "react";
import {useDraggable} from "react-use-draggable-scroll";


const CourseList = () => {
    const ref = useRef();
    const {events} = useDraggable(ref);

    return (
        <div
            className=' flex items-center gap-16 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-corner-rose-800  overflow-x-auto pb-1 h-[120px]'
            {...events} 
            ref={ref}
        >
            {
                CourseCardList.map(item => (
                    <div key={item.id}>
                        <CourseCard course={item.course} number={item.numbers}/>
                    </div>
                ))
            }
        </div>
    );
}

export default CourseList