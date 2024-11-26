const CustomInput = ({register, name, placeholder, errors, isNumber, isRequired}) => {
    return (
        <div className="[&>div]:flex [&>div]:flex-col [&>div]:text-xs">
            {
                isNumber ? <div>
                        <input
                            placeholder={placeholder} {...register(name, {
                            required: isRequired ? 'پر کردن این فیلد الزامیست' : false,
                            pattern: {
                                value: /^\d+$/, message: 'لطفا فقط عدد وارد کنید'
                            }
                        })}
                            type="text"
                            className="w-[184px] h-[55px] p-4 rounded-xl text-sm shadow-[0px_1px_2px_3px_#0000000D] outline-none"/>
                        <span className="h-7 text-red-600">{errors}</span>
                    </div> :
                    <div>
                        <input
                            placeholder={placeholder} {...register(name, {
                            required: isRequired ? 'پر کردن این فیلد الزامیست' : false,
                        })}
                            type="text"
                            className="w-[184px] h-[55px] p-4 rounded-xl text-sm shadow-[0px_1px_2px_3px_#0000000D] outline-none"/>
                        <span className="h-7 text-red-600">{errors}</span>
                    </div>
            }

        </div>

    )
}
export default CustomInput