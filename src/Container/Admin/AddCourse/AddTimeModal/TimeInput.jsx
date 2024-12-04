const TimeInput = ({register, errors, HourName, MinuteName, title}) => {
    return (
        <div className='flex items-center gap-4 mb-7 relative'>
            <span>{title}</span>
            <div className='flex flex-col justify-center items-center'>
                <input {...register(HourName, {required: 'ساعت را پر کنید', pattern:  {value: /^\d+$/, message: 'لطفا عدد وارد کنید'}})} maxLength={2}
                       className='w-10 h-10 border rounded-md border-primary-gray-100 outline-none text-center'
                       type="text"/>
                <span
                    className='h-7 text-xs font-medium text-red-600 absolute text-nowrap -bottom-10 ml-16 mb-2'>{errors[HourName]?.message}</span>
            </div>
            <span>:</span>
            <div className='flex flex-col justify-center items-center relative'>
                <input {...register(MinuteName, {required: 'دقیقه را پر کنید',  pattern:  {value: /^\d+$/, message: 'لطفا عدد وارد کنید'}})} maxLength={2}
                       className='w-10 h-10 border rounded-md border-primary-gray-100 outline-none text-center'
                       type="text"/>
                <span
                    className='h-7 text-xs font-medium text-red-600 absolute text-nowrap -bottom-10 mb-2'>{errors[MinuteName]?.message}</span>
            </div>
        </div>
    )
}
export default TimeInput