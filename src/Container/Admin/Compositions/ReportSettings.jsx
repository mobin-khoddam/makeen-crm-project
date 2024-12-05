import icon from '/src/assets/images/Admin/Compositions/book.svg'
import CustomButton from "../../Students/CustomButton.jsx";
import {useForm} from "react-hook-form";

const ReportSettings = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const error = errors.ReportSettings?.message
    const onSubmit = () => {

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex items-center gap-2 font-semibold mb-6'>
                <img src={icon} alt=""/>
                <span className='text-primary-blue'>تنظیمات کارنامه</span>
            </div>
            <div className='flex items-center justify-between'>
                <span className='text-nowrap'>شماره کارت</span>
                <div className='flex flex-col'>
                    <input
                        {...register('ReportSettings', {
                            required: 'پرکردن این فیلد الزامیست',
                            pattern: {value: /^\d+$/, message: 'فقط عدد مجاز است'}
                        })}
                        maxLength={16}
                        className={`text-center self-end w-[83px] p-4 rounded-md outline-none border-2 ${error ? 'border-red-600' : 'border-[#E5E7EB]'}`}
                        type="text" placeholder='روز'/>
                    <span className='h-6 pt-1 block text-red-600 text-xs'>{error}</span>
                </div>
            </div>
            <CustomButton parentClass='!w-[188px] mx-auto' className='!w-full mx-auto block mt-8' text='ذخیره'/>
        </form>
    )
}
export default ReportSettings;