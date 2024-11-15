import arrow from './../../../assets/images/menthor/chevron-down.svg'
import {useState} from "react";

const CourseFilter = ({arrowFlag, setArrowFlag}) => {
    const courses = [{id: 1, title: 'دوره ui/ux15\n'}, {id: 2, title: 'دوره ui/ux14\n'}, {id: 3, title: 'دوره ui/ux13\n'}]
    const [course, setCourse] = useState('دوره ui/ux15\n')
    const arrowHandler = () => {
        setArrowFlag(!arrowFlag)
    }
    const SetCourseFilter = (course) => {
        setCourse(course.title)
        setArrowFlag(false)
    }
    return (
        <div className='relative w-[148px] cursor-pointer'>
            <div onClick={arrowHandler}
                 className='w-full py-3 bg-primary-blue text-white flex items-center justify-center gap-2 rounded-xl'>
                <span>{course}</span>
                <img className={`duration-300 ${arrowFlag ? 'rotate-0' : 'rotate-180'}`} src={arrow} alt='arrow'/>
            </div>
            <div className={`absolute bg-white w-full mt-2 rounded-xl ${arrowFlag ? 'block' : 'hidden'}`}>
                    <ul className='p-2'>
                        {
                            courses.map((course) => (
                                <li key={course.id} onClick={() => SetCourseFilter(course)} className='p-2 border border-white hover:border-primary-blue rounded-xl'>{course.title}</li>
                            ))
                        }
                    </ul>
            </div>
        </div>
    )
}
export default CourseFilter