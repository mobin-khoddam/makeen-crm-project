import {useRef, useState} from "react";
import AddButton from "../AddButton.jsx";
import closeIcon from "/src/assets/images/Admin/Courses/close-circle.svg"
import CustomRadioInput from "../../../Students/PersonalInformation/CustomRadioInput.jsx";
import {useForm} from "react-hook-form";
import {adminPanelSetTimeCourseRadioInput} from "../../../../helper/ProjectData/Data.jsx";
import CustomButton from "../../../Students/CustomButton.jsx";
import TimeInput from "./TimeInput.jsx";
import {v4 as uuidv4} from "uuid";


const AddTimeModal = ({text, data, modalRef, errors, register, onClick }) => {
    const [id, setId] = useState();

    const openModal = () => {
        setId(uuidv4());
        modalRef.current?.showModal()
    }
    console.log(id)
    const addCourseTime = () => {
        modalRef.current?.close()
        onClick(id)
    }
    return (
        <>
            <button onClick={openModal}>{data || <AddButton text={text}/>}</button>
            <dialog ref={modalRef} className="modal ">
                {id && <div className="modal-box max-w-[90%] w-fit">
                    <img className='cursor-pointer' onClick={() => modalRef.current?.close()} src={closeIcon}
                         alt="close modal"/>
                    <h3 className="font-bold text-lg text-center mb-12">لطفا روز و ساعت کلاس را انتخاب نمایید</h3>
                    <CustomRadioInput parentClass='mb-20'
                                      className='mb-2 flex-wrap max-[723px]:w-2/6 justify-center mx-auto'
                                      register={register} errors={errors} name={`courseTime${id}`} isRequired={true}
                                      title=''
                                      data={adminPanelSetTimeCourseRadioInput}/>
                    <div className='flex justify-around items-center font-bold mb-16 max-sm:flex-col gap-7'>
                        <TimeInput register={register} errors={errors} HourName={`endHour${id}`}
                                   MinuteName={`endMinute${id}`}
                                   title='ساعت پایان:'/>
                        <TimeInput register={register} errors={errors} HourName={`startHour${id}`}
                                   MinuteName={`startMinute${id}`}
                                   title='ساعت شروع:'/>
                    </div>
                    <div onClick={addCourseTime} className='w-full'>
                        <CustomButton text='ثبت' className='!w-full block'/>
                    </div>
                </div>}
            </dialog>
        </>
    )
}
export default AddTimeModal
