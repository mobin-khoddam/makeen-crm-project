import dotImage from "../../assets/images/Login/dot-styles.png";
import loginImage from "../../assets/images/Login/login-image.svg";
import makeenText from "../../assets/images/Login/makeen-text.png";
import MakeenLogo from "../../Componants/MakeenLogo/MakeenLogo.jsx";

const LoginPage = ({children}) => {
    return (
        <div className="min-h-screen bg-primary-blue flex">
            <div className="w-[40%] bg-primary-gray rounded-l-[50px] flex justify-center items-center fle flex-col gap-10 max-lg:w-[50%] max-md:w-full max-md:rounded-l-none py-3">
                <MakeenLogo />
                {children}
            </div>
            <div className="relative flex flex-col items-center justify-center w-[60%] max-md:hidden max-lg:w-[50%]">
                <img className="absolute w-[300px] h-[300px] top-0 left-0" src={`${dotImage}`} alt=""/>
                <img className="z-10 w-[599px] h-auto object-contain" src={`${loginImage}`} alt=""/>
                <img className="w-[385px] h-[90px] object-contain max-lg:w-4/5" src={`${makeenText}`} alt=""/>
            </div>
        </div>
    )
}

export default LoginPage;