import CustomInput from "./CustomInput.jsx";
import DatePicker from "../../../../Componants/Datepicker/DatePicker.jsx";

const CustomInputField = ({register, data, errors, className, registerHelper, isRequired,}) => {
    return (
        <div className={className}>
            {
                data.map(item => {
                    return item.date ? (
                        <div className='w-[184px] mb-7'>
                            <DatePicker date={item.state} setDate={item.setState}
                                        placeholder={item.placeholder}/>
                        </div>
                    ) : (
                        <div key={item.id}>
                            <CustomInput isNumber={item.isNumber}
                                         errors={errors[`${item.name}${registerHelper}`]?.message}
                                         register={register}
                                         name={`${item.name}${registerHelper}`}
                                         placeholder={item.placeholder}
                                         isRequired={isRequired}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default CustomInputField;