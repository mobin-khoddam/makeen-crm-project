import editeIcon from '/src/assets/images/Admin/Courses/editIcon.svg'
import deleteIcon from '/src/assets/images/Admin/Courses/delete.svg'
import AddTimeModal from "./AddTimeModal/AddTimeModal.jsx";
import {useRef, useState} from "react";

const CourseTimeTable = ({unregister, register, watch, errors, setCourseTimeData, courseTimeData}) => {
    const [editId, setEditId] = useState();
    const modalRef = useRef(null);

    const removeHandler = (id) => {
        unregister(`courseTime${id}`)
        unregister(`endHour${id}`)
        unregister(`endMinute${id}`)
        unregister(`startHour${id}`)
        unregister(`startMinute${id}`)
        setCourseTimeData(courseTimeData.filter(item => item !== id))
    }

    const editeHandler = (id) => {
        setEditId(id)
        modalRef.current?.showModal()
    }

    const clearEditId = () => {
        setEditId('')
    }

    return (
        <>
            {
                courseTimeData.length > 0 && (
                    <div className='overflow-x-auto mb-6'>
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
                                <tr key={item}>
                                    <th>{watch()[`courseTime${item}`]}</th>
                                    <th>{watch()[`startHour${item}`]} : {watch()[`startMinute${item}`]}</th>
                                    <th>{watch()[`endHour${item}`]} : {watch()[`endMinute${item}`]}</th>
                                    <th className='flex items-center justify-end gap-4'>
                                        <img onClick={() => editeHandler(item)} className='cursor-pointer' src={editeIcon}
                                             alt=""/>
                                        <img onClick={() => removeHandler(item)} className='cursor-pointer'
                                             src={deleteIcon} alt=""/>
                                    </th>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <AddTimeModal editId={editId} clearEditId={clearEditId}  errors={errors} register={register} watch={watch} modalRef={modalRef} data={true}/>
                    </div>
                )
            }
        </>
    )
}
export default CourseTimeTable;