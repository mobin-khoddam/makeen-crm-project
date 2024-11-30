import {useState} from "react";
import {useForm} from "react-hook-form";
import {notify} from "../../../helper/CustomToastify.js";
import CustomInputField from "../../Students/PersonalInformation/CustomInput/CustomInputField.jsx";
import ImageUploader from "../../Students/PersonalInformation/ImageUploader.jsx";
import CustomButton from "../../Students/CustomButton.jsx";
import AddTimeModal from "./AddTimeModal/AddTimeModal.jsx";
import StudentsTable from "./StudentsTable.jsx";

const AddCourse = () => {
    const [courseTime, setCourseTime] = useState([])
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [installmentsDate, setInstallmentsDate] = useState();
    const {register, handleSubmit, watch, formState: {errors}} = useForm()
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
            <div className='bg-white rounded-lg p-8 '>
                <span className='mb-6 block'>روز و ساعت کلاس</span>
                    <StudentsTable courseTime={courseTime} setCourseTime={setCourseTime} />
                <AddTimeModal setCourseTime={setCourseTime} courseTime={courseTime} text='افزودن'/>
            </div>
            <CustomButton className='mb-96' text='submit'/>
        </>
    )
}
export default AddCourse