import {useRef} from "react";
import AddButton from "../../../../Container/Admin/AddCourse/AddButton.jsx";
import closeIcon from "/src/assets/images/Admin/Courses/close-circle.svg"
import CustomRadioInput from "../../../../Container/Students/PersonalInformation/CustomRadioInput.jsx";
import {useForm} from "react-hook-form";
import {adminPanelSetTimeCourseRadioInput} from "../../../../helper/ProjectData/Data.jsx";
import CustomButton from "../../../../Container/Students/CustomButton.jsx";
import TimeInput from "./TimeInput.jsx";

const AddTimeModal = ({text}) => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const modalRef = useRef(null);
    const onSubmit = (data) => {
        console.log(data)
        modalRef.current?.close()
    }
    return (
        <>
            <button onClick={() => modalRef.current?.showModal()}><AddButton text={text}/></button>
            <dialog ref={modalRef} className="modal ">
                <form onSubmit={handleSubmit(onSubmit)} className="modal-box max-w-[90%] w-fit">
                    <img className='cursor-pointer' onClick={() => modalRef.current?.close()} src={closeIcon}
                         alt="close modal"/>
                    <h3 className="font-bold text-lg text-center mb-12">لطفا روز و ساعت کلاس را انتخاب نمایید</h3>
                    <CustomRadioInput parentClass='mb-20' className='mb-2 flex-wrap max-[723px]:w-2/6 justify-center mx-auto' register={register} errors={errors} name='CourseTime' isRequired={true} title=''
                                      data={adminPanelSetTimeCourseRadioInput}/>
                    <div className='flex justify-around items-center font-bold mb-16 max-sm:flex-col gap-7'>
                        <TimeInput register={register} errors={errors} HourName='endHour' MinuteName='endMinute' title='ساعت پایان:' />
                        <TimeInput register={register} errors={errors} HourName='startHour' MinuteName='startMinute' title='ساعت شروع:' />
                    </div>
                    <div className='w-full'>
                        <CustomButton text='ثبت' className='!w-full block'/>
                    </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}
export default AddTimeModal
