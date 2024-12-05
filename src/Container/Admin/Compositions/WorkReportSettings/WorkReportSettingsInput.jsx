const WorkReportSettingsInput = ({title, minute, hour, register, fine, errors}) => {
    const errorMinuteAndHour = errors[minute]?.message || errors[hour]?.message
    const errorFine = errors[fine]?.message
    return (
        <div
            className="flex items-center max-[480px]:flex-col max-[480px]:text-center justify-between gap-2 [&_input]:text-center [&_input]:h-[53px] [&_input]:outline-none [&_input]:border-2 [&_input]:rounded-md [&_span]:text-xs [&_span]:text-red-600 [&_span]:text-nowrap [&_span]:absolute [&_span]:-bottom-4">
            <p>
                {title}
            </p>
            {
                minute && hour && (
                    <div
                        className='flex gap-4 [&_input]:w-[83px]'>
                        <div className={`flex flex-col relative `}>
                            <input
                                className={`${errorMinuteAndHour ? 'border-red-600' : 'border-[#E5E7EB]'}`}
                                placeholder='ساعت' {...register(hour, {
                                required: 'پرکردن این فیلد الزامیست',
                                pattern: {value: /^\d+$/, message: 'فقط عدد مجاز است'}
                            })} type="text"/>
                            <span>{errorMinuteAndHour}</span>
                        </div>
                        <div className="flex flex-col relative">
                            <input
                                className={`${errorMinuteAndHour ? 'border-red-600' : 'border-[#E5E7EB]'}`}
                                placeholder='دقیقه' {...register(minute, {
                                required: 'پرکردن این فیلد الزامیست',
                                pattern: {value: /^\d+$/, message: 'فقط عدد مجاز است'}
                            })} type="text"/>
                        </div>
                    </div>
                )
            }
            {
                fine && (
                    <div className='flex flex-col items-center relative'>
                        <input
                            className={`w-[182px] ${errorFine ? 'border-red-600' : 'border-[#E5E7EB]'}`}
                            {...register(fine, {
                                required: 'پرکردن این فیلد الزامیست',
                                pattern: {value: /^\d+$/, message: 'فقط عدد مجاز است'}
                            })} placeholder='تومان' type="text"/>
                        <span>{errorFine}</span>
                    </div>
                )
            }
        </div>
    )
}
export default WorkReportSettingsInput