const LeaveAndAbsenceSettingsInput = ({title, placeholder, register, name, errors}) => {
    const error = errors[name]?.message
    return (
        <div className='flex items-center justify-between'>
            <span>{title}</span>
            <div className='flex flex-col justify-center items-center relative'>
                <input {...register(name, {
                    required: 'پرکردن این فیلد اجباریست',
                    pattern: {value: /^\d+$/, message: 'فقط عدد مجاز است'}
                })}
                       placeholder={placeholder} type="text"
                       className={`w-[83px] h-[53px] border-2 ${error ? 'border-red-600' : 'border-[#E5E7EB]'} rounded-md text-center outline-none focus:outline-none`}/>
                <span className='absolute text-xs -bottom-4 text-nowrap text-red-600 self-end'>{error}</span>
            </div>
        </div>
    )
}
export default LeaveAndAbsenceSettingsInput