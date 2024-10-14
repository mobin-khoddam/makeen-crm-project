import personImg from "/src/assets/images/Header/person.png"
import notificationIcon from "/src/assets/images/Header/notification.png"
import {useEffect, useState} from "react";

const Header = () => {
    const [week, setWeek] = useState('')
    const [month, setMonth] = useState('')

    const date = new Date();
    const weekDate = new Intl.DateTimeFormat('fa-IR', {weekday: "long"}).format(date)
    const monthDate = new Intl.DateTimeFormat('fa-IR').format(date)

    useEffect(() => {
        setWeek(weekDate)
        setMonth(monthDate)
    }, [weekDate, monthDate])
    return (
        <div
            className="w-full py-3 bg-white rounded-2xl flex justify-between items-center gap-6 pr-3 pl-6 mb-8 text-[#3E3838] max-sm:flex-col ">
            <div className="flex items-center gap-3">
            <label className="font-bold text-2xl hidden leading-[0] max-md:flex btn" htmlFor="my-drawer">&#9781;</label>
                <img className="rounded-full w-[46px]" src={`${personImg}`} alt="Person" />
                <div className="flex flex-col font-medium gap-1">
                    <span className="max-lg:text-sm">امیررضا ولی زاده</span>
                    <span className="text-xs font-normal">UI/UX 14</span>
                </div>
            </div>
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-4 max-lg:text-sm">
                    <span>{week}</span>
                    <span>{month}</span>
                </div>
                <img className="w-6 h-6" src={`${notificationIcon}`} alt="notifIcon" />
            </div>
        </div>
    )
}

export default Header