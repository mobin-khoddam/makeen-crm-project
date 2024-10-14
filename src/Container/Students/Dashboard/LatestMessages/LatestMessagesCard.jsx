import SeeAllBtn from "../SeeAllBtn/SeeAllBtn.jsx";
import smsSvg from '/src/assets/images/Students/Dashboard/LatestMessages/sms.svg'
import leftArrow from "/src/assets/images/GeneralImages/arrow-left.svg"

const LatestMessagesCard = () => {
    const latestMessagesList = ['اعلام تعطیلی', 'پرداخت قسط ماه اول', 'کارگاه سواد بصری']
    return (
        <div className=" bg-white rounded-2xl p-6 ">
            <div className="flex justify-between items-center mb-6 max-sm:flex-col gap-8">
                <div className="flex items-center gap-2">
                    <img src={`${smsSvg}`} alt=""/>
                    <span>آخرین پیام های دریافتی</span>
                </div>
                <SeeAllBtn/>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-8 max-[1514px]:justify-center max-sm:text-center">
                {
                    latestMessagesList.map((message, index) => (
                        <div key={index} className="w-[350px] border-[.5px] border-[#A3AED0] p-4 rounded-2xl flex flex-col gap-4">
                        <span className="font-semibold text-xl max-sm:text-lg">
                            {message}
                        </span>
                            <p className="text-primary-gray-100 max-sm:text-sm">
                                در اینجا بزرگترین خریدهای فناوری سازمانی در سال ۲۰۲۱ تاکنون به ترتیب زمانی معکوس آورده شده است.
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="text-primary-blue">مشاهده پیام</span>
                                <img className="w-6 h-6" src={`${leftArrow}`} alt=""/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default LatestMessagesCard