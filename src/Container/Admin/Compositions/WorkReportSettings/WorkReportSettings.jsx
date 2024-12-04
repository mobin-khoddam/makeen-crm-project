import noteIcon from "/src/assets/images/Admin/Compositions/note.svg"
import WorkReportSettingsInput from "./WorkReportSettingsInput.jsx";
import {useForm} from "react-hook-form";
import CustomButton from "../../../Students/CustomButton.jsx";

const WorkReportSettings = () => {
    const {register, handleSubmit , formState: {errors}} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center gap-2 mb-4">
                <img src={noteIcon} alt=""/>
                <span className='text-primary-blue'>تنظیمات گزارش کار</span>
            </div>
            <div className='flex flex-col gap-6'>
                <WorkReportSettingsInput register={register} hour='minimumWorkReportHour' minute='minimumWorkReportMinute' title='حداقل زمان قابل قبول گزارش کار' />
                <WorkReportSettingsInput register={register} hour='calculateBaseReportHour' minute='calculateBaseReportMinute' title='محاسبه مبنای گزارش' />
                <WorkReportSettingsInput register={register} hour='reportDeadlineHour' minute='reportDeadlineMinute' title='آخرین مهلت ارسال گزارش' />
                <WorkReportSettingsInput register={register} hour='deadlineReportFineHour' minute='deadlineReportFineMinute' title='آخرین مهلت ارسال گزارش با احتساب جریمه' />
                <WorkReportSettingsInput register={register} fine='PenaltyPerHourDeducted' title='جریمه به ازای هر ساعت کسر ' />
            </div>
            <CustomButton text='ذخیره' />
        </form>
    )
}
export default WorkReportSettings