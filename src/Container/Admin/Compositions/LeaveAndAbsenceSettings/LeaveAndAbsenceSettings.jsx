import flashIcon from '/src/assets/images/Admin/Compositions/flash.svg'
import LeaveAndAbsenceSettingsInput from "./LeaveAndAbsenceSettingsInput.jsx";
import {useForm} from "react-hook-form";

const LeaveAndAbsenceSettings = () => {
    const {register, handleSubmit , formState: {errors}} = useForm()
  return (
      <form>
          <div className='flex items-center gap-2'>
              <img src={flashIcon} alt=""/>
              <span className='text-primary-blue'>تنظیمات مرخصی و غیبت</span>
          </div>
          <LeaveAndAbsenceSettingsInput placeholder='ساعت' register={register} title='حداکثر ساعت مجاز مرخصی' />
      </form>
  )
}
export default LeaveAndAbsenceSettings