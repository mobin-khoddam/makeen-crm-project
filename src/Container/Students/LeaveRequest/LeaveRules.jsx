import judgeIcon from '../../../assets/images/Students/LeaveRequest/judge.svg'

const LeaveRules = () => {
    return (
        <div className="bg-white w-3/6 p-6 rounded-2xl max-[1300px]:w-full">
            <div className="flex items-center gap-2">
                <img src={judgeIcon} alt=""/>
                <span>قوانین مرخصی</span>
            </div>
            <ul className="list-disc p-6 flex flex-col gap-6">
                <li>حداکثر مرخصی 16 ساعت است.</li>
                <li>و دشواری موجود در ارائه راهکارها، و شرایط سخت</li>
                <li>و دشواری موجود در ارائه راهکارها، و شرایط سخت</li>
                <li>حداکثر مرخصی 16 ساعت است.</li>
                <li>و دشواری موجود در ارائه راهکارها، و شرایط سخت</li>
                <li>و دشواری موجود در ارائه راهکارها، و شرایط سخت</li>
            </ul>
        </div>
    )
}
export default LeaveRules;