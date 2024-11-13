const CustomRadioInput = ({register, data, errors, name, title, isRequired, className}) => {
    return (
        <div>
            <div className={`flex items-center gap-4 ${className}`}>
                <span className="text-nowrap">{title}</span>
                {
                    data.map(item => (
                        <div key={item.id}>
                            <div className="flex items-center gap-2">
                                <input {...register(name, {required: isRequired ? 'پر کردن این فیلد الزامیست' : false})}
                                       value={item.value}
                                       type="radio" name={name}/>
                                <span>{item.title}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <span className="text-xs text-red-600 h-5 block">{errors[name]?.message}</span>
        </div>
    )
}
export default CustomRadioInput;