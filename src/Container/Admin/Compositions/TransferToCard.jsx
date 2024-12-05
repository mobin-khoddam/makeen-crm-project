import CustomButton from "../../Students/CustomButton.jsx";
import {useForm} from "react-hook-form";

const TransferToCard = ({title, icon, inputName}) => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const error = errors[inputName]?.message
    const onSubmit = () => {

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex items-center gap-2 font-semibold mb-6'>
                <img src={icon} alt=""/>
                <span className='text-primary-blue'>{title}</span>
            </div>
            <div className='flex items-center gap-5'>
                <span className='text-nowrap'>شماره کارت</span>
                <div className="w-full">
                    <input
                        {...register(inputName, {
                            required: 'پرکردن این فیلد الزامیست',
                            pattern: {value: /^\d+$/, message: 'فقط عدد مجاز است'}
                        })}
                        maxLength={16}
                        className={`text-center w-full p-4 rounded-md outline-none border-2 ${error ? 'border-red-600' : 'border-[#E5E7EB]'}`}
                        type="text" placeholder='16 رقمی'/>
                    <span className='h-6 pt-1 block text-red-600 text-xs'>{error}</span>
                </div>
            </div>
            <CustomButton parentClass='!w-[188px] mx-auto' className='!w-full mx-auto block mt-8' text='ذخیره'/>
        </form>
    )
}
export default TransferToCard;