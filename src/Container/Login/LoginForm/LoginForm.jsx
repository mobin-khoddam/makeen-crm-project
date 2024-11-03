import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import lockIcon from '/src/assets/images/Login/Lock-icon.png'
import LoginPage from "../../../pages/Login/LoginPage.jsx";

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


    return (
        <LoginPage>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form-style">
                <span className="font-medium text-2xl mb-[75px]">خوش آمدید</span>
                <div className="w-full relative mb-[51px]">
                    <input {...register("userName", {
                        required: 'this field is required',
                        minLength: {
                            value: 8,
                            message: 'filed must be more 10 characters'
                        }
                    })} placeholder={errors.userName?.message ? "نام کاربری باید حداقل ۶ کاراکتر باشد" : "نام کاربری خود را وارد کنید"}
                           className={`border w-full h-[56px] rounded-[10px] text-xs pr-8 outline-none ${userNameError ? 'border-[#D30000]' : 'border-primary-gray-100'}`}
                           type="text"/>
                    <span
                        className={`absolute right-5 -top-4 font-medium text-sm bg-white ${userNameError ? 'text-[#D30000]' : 'text-black'}`}>نام کاربری</span>
                </div>
                <div className="w-full relative mb-[17px]">
                    <input {...register("password", {
                        required: 'this field is required',
                        minLength: {
                            value: 8,
                            message: 'field must be more 10 characters'
                        }
                    })} placeholder={errors.password?.message ? "کلمه عبور خود مجدداً را وارد کنید " : "کلمه عبور خود را وارد کنید"}
                           className={`border w-full h-[56px] rounded-[10px] text-xs pr-8 outline-none ${passwordError ? 'border-[#D30000]' : 'border-primary-gray-100'}`}
                           type="text"/>
                    <span
                        className={`absolute right-5 -top-4 font-medium text-sm bg-white ${passwordError ? 'text-[#D30000]' : 'text-black'}`}>کلمه عبور</span>
                </div>
                <div className="flex items-center gap-2 self-start mb-[73px]">
                    <img className="w-[14px] h-[14px]  object-contain" src={`${lockIcon}`}
                         alt="makeen logo"/>
                    <Link to="/forget-password" className="text-sm font-medium text-primary-blue cursor-pointer">فراموشی
                        رمز عبور</Link>
                </div>
                <button type="submit"
                        className="text-white bg-[#0593CE] w-full h-12 font-semibold text-xl rounded-[10px]">ورود
                </button>

            </form>
        </LoginPage>
    )
}

export default LoginForm