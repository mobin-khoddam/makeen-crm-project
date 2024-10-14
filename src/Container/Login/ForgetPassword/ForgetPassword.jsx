import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

const ForgetPassword = () => {

    const [fieldError, setFieldError] = useState(false)


    const {register, handleSubmit, setFocus, formState: {errors}} = useForm()

    const {fieldOne, fieldTwo, fieldThree, fieldFour, fieldFive} = errors
    useEffect(()=>{
        if(fieldOne?.message || fieldTwo?.message || fieldThree?.message || fieldFour?.message || fieldFour?.message || fieldFive?.message) {
        setFieldError(true)
        } else {
            setFieldError(false)
        }
    }, [fieldOne?.message, fieldTwo?.message, fieldThree?.message, fieldFour?.message, fieldFive?.message])


    const nextInputHandler = (nextInputFocus, event) => {
        const regexNumber = /^[0-9]+$/
        if (event.key === 'Backspace' || event.key === 'Delete') {
            return
        }
        if (event.key !== 'Tab'){
            if (!regexNumber.test(event.key)) {
                event.preventDefault()
                return
            }
        }
        setTimeout(()=>{
            setFocus(nextInputFocus)
        },100)
    }

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)} className="login-form-style">
                <div className="flex flex-col gap-3 items-center font-medium mb-10">
                    <div className="flex text-3xl text-center mb-1 max-[355px]:flex-col max-[355px]:gap-2">
                        <span>کد تایید</span>
                        <span className="max-[355px]:hidden">&nbsp;</span>
                        <span>را وارد کنید</span>
                    </div>
                    <div className="flex text-xs text-center max-[385px]:flex-col">
                        <span>کد تایید برای شماره ۰۹۳۳۳۷۵۲۴۷۶</span>
                        <span className="max-[355px]:hidden">&nbsp;</span>
                        <span>در ربات بله ارسال شد</span>
                    </div>
                </div>
                <div dir="ltr"
                     className="flex items-center justify-between w-full mb-[40px] max-[870px]:justify-center max-[870px]:gap-3">
                    <input {...register('fieldOne', {required: 'پرکردن این فیلد اجباریست'})}
                           onKeyDown={(e)=> nextInputHandler('fieldTwo', e)}
                           className={`input-forget-password ${fieldError ? 'outline-[#D30000] border-[#D30000]' : 'outline-black border-primary-gray-100'}`}
                           maxLength={1} type="text"/>
                    <input {...register('fieldTwo', {required: 'پرکردن این فیلد اجباریست'})}
                           onKeyDown={(e)=> nextInputHandler('fieldThree', e)}
                           className={`input-forget-password ${fieldError ? 'outline-[#D30000] border-[#D30000]' : 'outline-black border-primary-gray-100'}`}
                           maxLength={1} type="text"/>
                    <input {...register('fieldThree', {required: 'پرکردن این فیلد اجباریست'})}
                           onKeyDown={(e)=> nextInputHandler('fieldFour', e)}
                           className={`input-forget-password ${fieldError ? 'outline-[#D30000] border-[#D30000]' : 'outline-black border-primary-gray-100'}`}
                           maxLength={1} type="text"/>
                    <input {...register('fieldFour', {required: 'پرکردن این فیلد اجباریست'})}
                           onKeyDown={(e)=> nextInputHandler('fieldFive', e)}
                           className={`input-forget-password ${fieldError ? 'outline-[#D30000] border-[#D30000]' : 'outline-black border-primary-gray-100'}`}
                           maxLength={1} type="text"/>
                    <input {...register('fieldFive', {required: 'پرکردن این فیلد اجباریست'})}
                           onKeyDown={(e)=> nextInputHandler('fieldFive', e)}
                           className={`input-forget-password ${fieldError ? 'outline-[#D30000] border-[#D30000]' : 'outline-black border-primary-gray-100'}`}
                           maxLength={1} type="text"/>
                </div>
                <div className="text-center text-sm mb-[134px]">
                    <span>1:36 </span>
                    <span>تا درخواست مجدد کد</span>
                </div>
                <button type="submit" className="text-white bg-[#0593CE] w-full h-12 font-semibold text-xl rounded-[10px]">
                    تایید و ادامه
                </button>
            </form>
    )
}

export default ForgetPassword