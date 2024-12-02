import editeIcon from '/src/assets/images/Admin/Courses/editIcon.svg'
import deleteIcon from '/src/assets/images/Admin/Courses/delete.svg'
import AddTimeModal from "./AddTimeModal/AddTimeModal.jsx";
import {useRef, useState} from "react";

const CourseTimeTable = ({courseTime, register, watch, errors, setCourseTime, courseTimeData}) => {
    const [editedCourse, setEditedCourse] = useState({});
    const modalRef = useRef(null);

    const removeHandler = (id) => {
        setCourseTime(courseTime.filter(item => item.id !== id))
    }

    const editeHandler = (data) => {
        setEditedCourse(data)
        modalRef.current?.showModal()
    }
    console.log(courseTimeData)
    return (
        <>
            {courseTime.length > 0 ? (
                <div className="overflow-x-auto mb-6">
                    <table className="table table-zebra">
                        <thead>
                        <tr className='bg-[#e5e7eb]'>
                            <th>روز</th>
                            <th>ساعت شروع</th>
                            <th>ساعت پایان</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {courseTimeData.map(item => (
                            <tr key={'courseTime'}>
                                <th>{watch()[`courseTime${item}`]}</th>
                            <th>{watch()[`endHour${item}`]} : {watch()[`endMinute${item}`]}</th>
                            <th>{watch()[`startHour${item}`]} : {watch()[`startMinute${item}`]}</th>
                            <th className='flex items-center justify-end gap-4'>
                                <img onClick={() => editeHandler(item)} className='cursor-pointer' src={editeIcon} alt=""/>
                                <img onClick={() => removeHandler(item.id)} className='cursor-pointer'
                                     src={deleteIcon} alt=""/>
                            </th>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                    <AddTimeModal errors={errors} register={register} watch={watch} modalRef={modalRef} data={true} />
                </div>
            ) : null
            }
        </>
    )
}
export default CourseTimeTable;