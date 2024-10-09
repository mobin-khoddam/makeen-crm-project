import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";

const LoginForm = () => {

    const [passwordError, setPasswordError] = useState()
    const [userNameError, setUserNameError] = useState()

    const {register, handleSubmit, formState: {errors}} = useForm();

    useEffect(() => {
        setPasswordError(errors.password?.message ?? '')
        setUserNameError(errors.userName?.message ?? '')
    }, [errors.password, errors.userName]);


    const onSubmit = (data) => {
        console.log(data);
    }

    console.log(errors.passwor?.message);

    return (
        <div className="w-[40%] h-full bg-primary-gray rounded-l-[50px] flex justify-center items-center fle flex-col gap-16">
            <img className="w-[169px] h-[65px]" src="/src/assets/GeneralImages/makeen-logo.png" alt="makeen logo"/>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center bg-white px-8 w-[406px] h-[530px] rounded-[15px] shadow-[0px_0px_2px_0px_#00000040]">
                <span className="font-medium text-2xl mb-[75px]">خوش آمدید</span>
                <div className="w-full relative mb-[51px]">
                    <input {...register("userName", {required: 'use name is required', minLength: {value:10, message:'filed must be more 10 characters'}})} placeholder="نام کاربری خود را وارد کنید"
                           className={`border-[#A3A3A3] border w-full h-[56px] rounded-[10px] text-xs pr-8 outline-none ${userNameError ? 'border-[#D30000]' : 'border-[#A3A3A3]'}`} type="text"/>
                    <span className={`absolute right-5 -top-4 font-medium text-sm bg-white ${userNameError ? 'text-[#D30000]' : 'text-black'}`}>نام کاربری</span>
                </div>
                <div className="w-full relative mb-[17px]">
                    <input {...register("password", {required: 'password is required', minLength: {value:10, message: 'field must be more 10 characters'}})} placeholder="کلمه عبور خود را وارد کنید "
                           className={`border w-full h-[56px] rounded-[10px] text-xs pr-8 outline-none ${passwordError ? 'border-[#D30000]' : 'border-[#A3A3A3]'}`} type="text"/>
                    <span className={`absolute right-5 -top-4 font-medium text-sm bg-white ${passwordError ? 'text-[#D30000]' : 'text-black'}`}>کلمه عبور</span>
                </div>
                <div className="flex items-center gap-2 self-start mb-[73px]">
                    <img className="w-[14px] h-[14px]  object-contain" src="/src/assets/Login/Lock-icon.png" alt="makeen logo"/>
                    <span className="text-sm font-medium text-primary-blue">فراموشی رمز عبور</span>
                </div>
                <button type="submit" className="text-white bg-[#0593CE] w-full h-12 font-semibold text-xl rounded-[10px]">ورود</button>
            </form>
        </div>
    )
}

export default LoginForm

