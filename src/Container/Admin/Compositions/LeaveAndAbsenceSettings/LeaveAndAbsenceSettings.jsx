import flashIcon from '/src/assets/images/Admin/Compositions/flash.svg'
import LeaveAndAbsenceSettingsInput from "./LeaveAndAbsenceSettingsInput.jsx";
import {useForm} from "react-hook-form";
import CustomButton from "../../../Students/CustomButton.jsx";
import {adminPanelSettingLeaveAndAbsence} from "../../../../helper/ProjectData/Data.jsx";

const LeaveAndAbsenceSettings = () => {
    const {register, handleSubmit , formState: {errors}} = useForm()
    const onSubmit = () => {

    }
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex items-center gap-2 mb-6 font-semibold'>
              <img src={flashIcon} alt=""/>
              <span className='text-primary-blue'>تنظیمات مرخصی و غیبت</span>
          </div>
          <div className='flex flex-col gap-6'>
              {adminPanelSettingLeaveAndAbsence.map(item => (
                  <div key={item.id}>
                      <LeaveAndAbsenceSettingsInput errors={errors} placeholder={item.placeholder} register={register} name={item.name} title={item.title} />
                  </div>
              ))}
          </div>
          <CustomButton parentClass='!w-[188px] mx-auto' className='!w-full mx-auto block mt-8' text='ذخیره'/>
      </form>
  )
}
export default LeaveAndAbsenceSettings