import closeIcon from "../../../../../assets/images/Admin/Courses/close-circle.svg";
import CustomRadioInput from "../../../../Students/PersonalInformation/CustomRadioInput.jsx";
import {adminPanelSetTimeCourseRadioInput} from "../../../../../helper/ProjectData/Data.jsx";
import TimeInput from "../TimeInput.jsx";
import CustomButton from "../../../../Students/CustomButton.jsx";

const EditCourseTime = ({ register, errors, editId, addCourseTime, clearIdHandler}) => {
  return (
      <div className="modal-box max-w-[90%] w-fit">
          <img className='cursor-pointer' onClick={clearIdHandler} src={closeIcon}
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
              <CustomButton parentClass='w-full' text='ثبت' className='!w-full block'/>
          </div>
      </div>
  )
}
export default EditCourseTime;