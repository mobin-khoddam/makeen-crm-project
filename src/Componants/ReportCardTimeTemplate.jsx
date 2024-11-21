
const ReportCardTimeTemplate = ({ timeList }) => {
    return (
        <div className="flex flex-wrap justify-between gap-8 max-[1496px]:justify-center mb-8">
            {
                timeList.map((item) => (
                    <div
                        key={item.id}
                        className={`bg-white w-[360px] h-[247px] flex flex-col justify-center items-center gap-9 rounded-2xl ${item.timeNumberAndTitleColor}`}>
                        <div
                            className={`px-4 py-2 w-fit flex items-center gap-2 rounded-[5px] ${item.timeNumberAndTitleColor} ${item.titleBackgroundColor}`}>
                            <img className="w-6 h-6" src={`${item.icon}`} alt="" />
                            <span>{item.title}</span>
                        </div>
                        <span className="countdown font-mono text-4xl font-medium max-sm:text-3xl">
                            <span style={{ "--value": 18 }}></span>
                            &nbsp;:&nbsp;
                            <span style={{ "--value": 24 }}></span>
                            {
                                item.thirdNumber && (
                                    <>&nbsp;:&nbsp;<span style={{ "--value": 10 }}></span></>
                                )
                            }
                        </span>
                        {
                            !item.thirdNumber ?
                                <div className="text-[#C4C4C4] flex text-center justify-between w-[136px] max-sm:w-[130px]">
                                    <span className="w-12 max-sm:w-10">دقیقه</span>
                                    <span className="w-12 max-sm:w-10">ساعت</span>
                                </div>
                                :
                                <div className="text-[#C4C4C4] flex text-center justify-between w-[236px] max-sm:w-[230px]">
                                    <span className="w-12 max-sm:w-10">ساعت</span>
                                    <span className="w-12 max-sm:w-10">روز</span>
                                    <span className="w-12 max-sm:w-10">ماه</span>
                                </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default ReportCardTimeTemplate