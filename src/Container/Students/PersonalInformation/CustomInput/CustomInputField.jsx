import CustomInput from "./CustomInput.jsx";

const CustomInputField = ({register, data, errors, className, registerHelper, isRequired}) => {
  return(
      <div className={className}>
          {
              data.map(item => (
                  <div key={item.id}>
                      <CustomInput  isNumber={item.isNumber} errors={errors[`${item.name}${registerHelper}`]?.message}
                                   register={register}
                                   name={`${item.name}${registerHelper}`}
                                   placeholder={item.placeholder}
                                    isRequired={isRequired}
                      />
                  </div>
              ))
          }
      </div>
  )
}
export default CustomInputField;