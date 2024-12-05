import noteIcon from "/src/assets/images/Admin/Compositions/note.svg"
import WorkReportSettingsInput from "./WorkReportSettingsInput.jsx";
import {useForm} from "react-hook-form";
import CustomButton from "../../../Students/CustomButton.jsx";
import {adminPanelSettingWorkReportSettings} from "../../../../helper/ProjectData/Data.jsx";

const WorkReportSettings = () => {
    const {register, handleSubmit , formState: {errors}} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center gap-2 mb-6 font-semibold">
                <img src={noteIcon} alt=""/>
                <span className='text-primary-blue'>تنظیمات گزارش کار</span>
            </div>
            <div className='flex flex-col gap-6'>
                {adminPanelSettingWorkReportSettings.map(item => (
                    <div key={item.id}>
                        <WorkReportSettingsInput register={register} fine={item.fine} hour={item.hour} minute={item.minute} title={item.title} errors={errors} />
                    </div>
                ))}
                </div>
            <CustomButton parentClass='!w-[188px] mx-auto' className='!w-full mx-auto block mt-8' text='ذخیره'/>
        </form>
    )
}
export default WorkReportSettings