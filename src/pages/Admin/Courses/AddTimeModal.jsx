import {useRef} from "react";
import AddButton from "../../../Container/Admin/AddCourse/AddButton.jsx";
import closeIcon from "/src/assets/images/Admin/Courses/close-circle.svg"
import CustomRadioInput from "../../../Container/Students/PersonalInformation/CustomRadioInput.jsx";
import {useForm} from "react-hook-form";
import {adminPanelSetTimeCourseRadioInput} from "../../../helper/ProjectData/Data.jsx";

const AddTimeModal = ({text}) => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const modalRef = useRef(null);
  return (
      <>
          <button onClick={()=>modalRef.current?.showModal()}><AddButton text={text} /></button>
          <dialog ref={modalRef} className="modal ">
              <div className="modal-box max-w-[90%] w-fit">
                  <img className='cursor-pointer' onClick={() => modalRef.current?.close()} src={closeIcon} alt="close modal" />
                  <h3 className="font-bold text-lg text-center">لطفا روز و ساعت کلاس را انتخاب نمایید</h3>
                  <CustomRadioInput register={register} errors={errors} name='CourseTime' isRequired={true} title='' data={adminPanelSetTimeCourseRadioInput}/>
              </div>
              <form method="dialog" className="modal-backdrop">
                  <button>close</button>
              </form>
          </dialog>
      </>
  )
}
export default AddTimeModal
