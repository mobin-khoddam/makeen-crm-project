import {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import {notify} from "../../../helper/CustomToastify.js";
import CustomInputField from "../../Students/PersonalInformation/CustomInput/CustomInputField.jsx";
import ImageUploader from "../../Students/PersonalInformation/ImageUploader.jsx";
import CustomButton from "../../Students/CustomButton.jsx";
import AddTimeModal from "./AddTimeModal/addCourseModal/AddTimeModal.jsx";
import CourseTimeTable from "./CourseTimeTable.jsx";
import AddStudentsModal from "./AddStudentsModal.jsx";

const AddCourse = () => {
    const [editId, setEditId] = useState();
    const [courseTime, setCourseTime] = useState([])
    const [courseTimeData, setCourseTimeData] = useState([])
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [installmentsDate, setInstallmentsDate] = useState();
    const {register, unregister, handleSubmit, reset, watch, formState: {errors}} = useForm()
    const courseData = [
        {id: 1, placeholder: 'نام اصلی دوره', name: 'OriginalNameCourse',},
        {id: 2, placeholder: 'نام فرعی دوره', name: 'CourseSubName',},
        {id: 3, placeholder: 'شماره دوره', name: 'CourseNumber',},
        {id: 4, placeholder: 'نام استاد', name: 'MentorsName',},
        {id: 5, placeholder: 'تعداد دانشجو', name: 'NumberOfStudents',},
        {id: 6, placeholder: 'تاریخ شروع', state: startDate, setState: setStartDate, date: true},
        {id: 7, placeholder: 'تاریخ پایان', state: endDate, setState: setEndDate, date: true},
        {id: 8, placeholder: 'شروع اقساط', state: installmentsDate, setState: setInstallmentsDate, date: true},
    ]

    const modalRef = useRef(null);
    const onSubmit = (data) => {
        if (startDate && endDate && installmentsDate) {
            console.log(data)
            console.log(startDate?.toString())
            console.log(endDate?.toString())
            console.log(installmentsDate?.toString())
        } else {
            notify('warning', 'لطفا تاریخ ها را پر کنید')
        }
    }
    const table = (id) => {
        const watchValue = watch()
        setCourseTimeData(prev => [...prev, id])
        setCourseTime(prev => [...prev, watchValue])
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='bg-white rounded-lg p-8 mb-10'>
                    <span>مشخصات دوره</span>
                    <div className='flex gap-6 max-[1140px]:flex-col-reverse mt-6'>
                        <div>
                            <CustomInputField
                                className='flex flex-wrap gap-x-6 max-[1020px]:justify-center max-[1020px]:items-center'
                                data={courseData} errors={errors}
                                register={register}
                                isRequired={true}
                                watch={watch}/>
                        </div>
                        <div className='min-w-[300px] max-w-full max-sm:min-w-full'>
                            <ImageUploader/>
                        </div>
                    </div>
                </div>
            </form>
            <div className='bg-white rounded-lg p-8 mb-16'>
                <span className='mb-6 block'>روز و ساعت کلاس</span>
                <CourseTimeTable courseTime={courseTime} setCourseTime={setCourseTime} errors={errors}
                                 register={register} courseTimeData={courseTimeData} unregister={unregister}
                                 watch={watch} setCourseTimeData={setCourseTimeData} clearEditId={clearEditId}
                                 editeHandler={editeHandler} editId={editId}/>
                <AddTimeModal modalRef={modalRef} courseTime={courseTime} text='افزودن' clearEditId={clearEditId}
                              editId={editId}
                              register={register} errors={errors} watch={watch} reset={reset} onClick={table}/>
            </div>
            <div className='bg-white rounded-lg p-8'>
                <AddStudentsModal/>
            </div>
            <CustomButton parentClass='w-full' className='my-20 w-full' text='ذخیره'/>
        </>
    )
}
export default AddCourse