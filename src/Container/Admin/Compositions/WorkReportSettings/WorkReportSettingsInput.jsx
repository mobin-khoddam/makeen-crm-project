const WorkReportSettingsInput = ({title, minute, hour, register, fine}) => {
    return (
        <div
            className="flex items-center justify-between [&_input]:text-center [&_input]:h-[53px] [&_input]:outline-none [&_input]:border-2 [&_input]:border-[#E5E7EB] [&_input]:rounded-md">
            <span>
              {title}
            </span>
            {
                minute && hour && (
                    <div
                        className='flex gap-4 [&_input]:w-[83px]'>
                        <input placeholder='ساعت' {...register(hour, {
                            required: 'پرکردن این فیلد الزامیست',
                        })} type="text"/>
                        <input placeholder='دقیقه' {...register(minute, {
                            required: 'پرکردن این فیلد الزامیست',
                            pattern: {value: /^\d+$/, message: 'فقط عدد مجاز است'}
                        })} type="text"/>
                    </div>
                )
            }
            {
                fine && (
                    <div>
                        <input {...register(fine, {
                            required: 'پرکردن این فیلد الزامیست',
                            pattern: {value: /^\d+$/, message: 'فقط عدد مجاز است'}
                        })} placeholder='تومان' type="text"
                               className="w-[182px]"/>
                    </div>
                )
            }
        </div>
    )
}
export default WorkReportSettingsInput