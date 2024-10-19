import ShowStatusList from "./ShowStatusList.jsx";

const ReportCartStats = () => {
    return (
        <div className="shadow-[0px_0px_10.6px_0px_#7777771A] mb-14">
            <div
                className="flex justify-between [&>span]:h-[64px] [&>span]:flex [&>span]:justify-center [&>span]:items-center">
                <span className="w-[70%] max-sm:w-full bg-white rounded-tr-2xl">عملکرد فنی</span>
                <span className="w-[30%] max-sm:w-full bg-gray-table rounded-tl-2xl">عملکرد انظباطی</span>
            </div>
            <div>
                <ShowStatusList />
            </div>
        </div>

    )
}

export default ReportCartStats;

