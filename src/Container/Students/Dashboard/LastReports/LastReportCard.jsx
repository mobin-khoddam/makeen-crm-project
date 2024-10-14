import closeIcon from "../../../../assets/images/Students/Dashboard/LastReports/close-circle.svg";
import tickIcon from "../../../../assets/images/Students/Dashboard/LastReports/tick-circle.svg";
import arrowLeft from "../../../../assets/images/GeneralImages/arrow-left.svg";
import noteIcon from "../../../../assets/images/Students/Dashboard/LastReports/note.svg";
import tooltipSvg from '/src/assets/images/Students/Dashboard/LatestMessages/Vector-tooltip.svg'
import SeeAllBtn from "../SeeAllBtn/SeeAllBtn.jsx";

const LastReportCard = () => {
    const lastReportCardList = [
        {borderColor: 'border-[#09814A]', textColor: 'text-[#09814A]',backgroundColor: 'bg-[#09814A]' , firstTime: '9', secondTime: '11', tooltipTitle: 'تایید شده', tooltipText: 'کاربران می خواهند صفحه یا سایت خاصی را پیدا کنند.'},
        {borderColor: 'border-[#A3AED0]', textColor: 'text-[#A3AED0]',backgroundColor: 'bg-[#A3AED0]' , firstTime: '-', secondTime: '11', tooltipTitle: 'کسر ساعت کار', tooltipText: 'کاربران می خواهند صفحه یا سایت خاصی را پیدا کنند.'},
        {borderColor: 'border-[#FD151B]', textColor: 'text-[#FD151B]',backgroundColor: 'bg-[#FD151B]' , firstTime: '2', secondTime: '7', tooltipTitle: 'بررسی نشده', tooltipText: 'کاربران می خواهند صفحه یا سایت خاصی را پیدا کنند.'},
    ]
    return (
        <section className="w-full bg-white p-6 rounded-2xl mb-8">
            <div className="flex justify-between items-center mb-6 max-sm:flex-col gap-8">
                <div className="flex gap-2">
                    <img src={`${noteIcon}`} alt=""/>
                    <span>آخرین گزارش کارها</span>
                </div>
                <SeeAllBtn />
            </div>
            <div className="flex justify-between gap-8 flex-wrap max-[1514px]:justify-center">
                {lastReportCardList.map((item, index) => (
                    <div key={index} className="border-[.5px] border-[#A3AED0] rounded-lg p-4 w-[350px]">
                        <div>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-sm">گزارش شماره 8</span>
                                    <span className="text-xs">1402/07/13</span>
                                </div>
                                <div className="text-xs flex justify-between items-center leading-5 gap-3">
                                    <img src={`${closeIcon}`} alt=""/>
                                    <span>2:00</span>
                                    <span>مطالعه درباره دیزاین سیستم متریال ...</span>
                                </div>
                                <div className="text-xs flex justify-between items-center leading-5 gap-3">
                                    <img src={`${tickIcon}`} alt=""/>
                                    <span>2:00</span>
                                    <span>مطالعه درباره دیزاین سیستم متریال ...</span>
                                </div>
                                <div className="text-xs flex justify-between items-center leading-5 gap-3">
                                    <img src={`${tickIcon}`} alt=""/>
                                    <span>2:00</span>
                                    <span>مطالعه درباره دیزاین سیستم متریال ...</span>
                                </div>
                                <div className="flex justify-between items-center" >
                                    <div
                                         className={`w-[59px] h-[32px] rounded-full border flex hover:scale-110 relative group duration-300 ${item.borderColor} ${item.textColor}`}>
                                        <div className="  absolute -top-[100px] hidden group-hover:flex flex-col justify-between items-center">
                                            <div className="w-[200px] h-[100px] bg-white shadow-md rounded p-3">
                                                <div className="flex flex-col gap-2">
                                                    <span className="font-medium">{item.tooltipTitle}</span>
                                                    <p className="text-sm text-primary-gray-100">{item.tooltipText}</p>
                                                </div>
                                            </div>
                                            <img className="w-9 h-2 " src={`${tooltipSvg}`} alt=""/>
                                        </div>
                                        <div
                                            className="w-[50%] h-full flex justify-center items-center">{item.secondTime}</div>
                                        <div
                                            className={`w-[50%] h-full rounded-full text-white flex justify-center items-center ${item.backgroundColor}`}>{item.firstTime}</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                    <span className="text-primary-blue">مشاهده</span>
                                        <img src={`${arrowLeft}`} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

}
export default LastReportCard;
