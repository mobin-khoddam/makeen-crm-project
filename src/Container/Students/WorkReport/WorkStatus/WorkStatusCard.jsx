import trendDownIcon from '/src/assets/images/Students/WorkReports/trend-down.svg'
import clockIcon from '/src/assets/images/Students/WorkReports/clock.svg'
import happyIcon from '/src/assets/images/Students/WorkReports/emoji-happy.svg'
import sadIcon from '/src/assets/images/Students/WorkReports/emoji-sad.svg'
import userIcon from '/src/assets/images/Students/WorkReports/user-octagon.svg'

const WorkStatusCard = () => {
    const statusListCard = [
        {icon: happyIcon, hour: '12', text: 'بیشترین ساعت در ماه'},
        {icon: sadIcon, hour: '3', text: 'کمترین ساعت در ماه'},
        {icon: clockIcon, hour: '87', text: 'مجموع گزارش'},
        {icon: trendDownIcon, hour: '17', text: 'کسر ساعت کاری در ماه'},
        {icon: userIcon, hour: '5', text: 'رتبه کلاسی در ساعت کار'},
    ]
    return (
        <div className="flex justify-between flex-wrap gap-4 max-[1416px]:justify-center mb-[48px]">
            {
                statusListCard.map((item, index) => (
                    <div key={index} className="w-[200px] bg-white flex flex-col justify-center items-center gap-3 rounded-2xl p-4">
                        <img src={item.icon} alt="icon"/>
                        <span className="text=sm text-primary-gray-100">{item.text}</span>
                        <span>{item.hour} ساعت</span>
                    </div>
                ))
            }
        </div>
    )
}

export default WorkStatusCard