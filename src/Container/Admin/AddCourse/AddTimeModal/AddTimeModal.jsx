import { useState} from "react";
import AddButton from "../AddButton.jsx";
import closeIcon from "/src/assets/images/Admin/Courses/close-circle.svg"
import CustomRadioInput from "../../../Students/PersonalInformation/CustomRadioInput.jsx";
import {adminPanelSetTimeCourseRadioInput} from "../../../../helper/ProjectData/Data.jsx";
import CustomButton from "../../../Students/CustomButton.jsx";
import TimeInput from "./TimeInput.jsx";
import {v4 as uuidv4} from "uuid";


const AddTimeModal = ({text, data, modalRef, errors, register, onClick, watch, editId, clearEditId}) => {
    const [id, setId] = useState();

    const openModal = () => {
        setId(uuidv4());
        modalRef.current?.showModal()
    }

    console.log(id)
    const addCourseTime = () => {
        if (watch()[`courseTime${id}`] && watch()[`endHour${id}`] && watch()[`endMinute${id}`] && watch()[`startHour${id}`] && watch()[`startMinute${id}`]) {
            onClick(id)
        }
        modalRef.current?.close()
        setId('')
        clearEditId()
    }
    return (
        <>
            <button onClick={openModal}>{data || <AddButton text={text}/>}</button>
            <dialog ref={modalRef} className="modal ">
                {
                    id && <div className="modal-box max-w-[90%] w-fit">
                        <img className='cursor-pointer' onClick={() => modalRef.current?.close()} src={closeIcon}
                             alt="close modal"/>
                        <h3 className="font-bold text-lg text-center mb-12">لطفا روز و ساعت کلاس را انتخاب نمایید</h3>
                        <CustomRadioInput parentClass='mb-20'
                                          className='mb-2 flex-wrap max-[723px]:w-2/6 justify-center mx-auto'
                                          register={register} errors={errors} name={`courseTime${id}`}
                                          isRequired={true}
                                          data={adminPanelSetTimeCourseRadioInput}/>
                        <div className='flex justify-around items-center font-bold mb-16 max-sm:flex-col gap-7'>
                            <TimeInput register={register} errors={errors} HourName={`startHour${id}`}
                                       MinuteName={`startMinute${id}`}
                                       title='ساعت شروع:'/>
                            <TimeInput register={register} errors={errors} HourName={`endHour${id}`}
                                       MinuteName={`endMinute${id}`}
                                       title='ساعت پایان:'/>
                        </div>
                        <div onClick={addCourseTime} className='w-full'>
                            <CustomButton text='ثبت' className='!w-full block'/>
                        </div>
                    </div>
                }
                {
                    editId && <div className="modal-box max-w-[90%] w-fit">
                        <img className='cursor-pointer' onClick={() => modalRef.current?.close()} src={closeIcon}
                             alt="close modal"/>
                        <h3 className="font-bold text-lg text-center mb-12">لطفا روز و ساعت کلاس را انتخاب نمایید</h3>
                        <CustomRadioInput parentClass='mb-20'
                                          className='mb-2 flex-wrap max-[723px]:w-2/6 justify-center mx-auto'
                                          register={register} errors={errors} name={`courseTime${editId}`}
                                          isRequired={true}
                                          data={adminPanelSetTimeCourseRadioInput}/>
                        <div className='flex justify-around items-center font-bold mb-16 max-sm:flex-col gap-7'>
                            <TimeInput register={register} errors={errors} HourName={`startHour${editId}`}
                                       MinuteName={`startMinute${editId}`}
                                       title='ساعت شروع:'/>
                            <TimeInput register={register} errors={errors} HourName={`endHour${editId}`}
                                       MinuteName={`endMinute${editId}`}
                                       title='ساعت پایان:'/>
                        </div>
                        <div onClick={addCourseTime} className='w-full'>
                            <CustomButton text='ثبت' className='!w-full block'/>
                        </div>
                    </div>
                }
            </dialog>
        </>
    )
}
export default AddTimeModal
