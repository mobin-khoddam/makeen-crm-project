import LeaveRequestCard from "./LeaveRequestCard"
import arrow from '../../../../assets/images/GeneralImages/arrow-left-gray.svg'


const LeaveRequestContainer = ({onClick, modalRef}) => {
    const data = [
        { id: 1, },
        { id: 2, },
        { id: 3, },
        { id: 4, },
        { id: 5, },
        { id: 6, },
    ]
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div className="font-semibold">درخواست های مرخصی</div>
                <button className="flex justify-center items-center gap-1 border border-black px-4 py-2 rounded-lg">
                    <span>همه</span>
                    <img src={arrow} alt="" />
                </button>
            </div>
            <div className="flex flex-wrap justify-between gap-8 max-[1056px]:flex-col max-[1400px]:justify-center">
                {
                    data.map(item => (
                        <div key={item.id}>
                            <LeaveRequestCard modalRef={modalRef} onClick={onClick} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LeaveRequestContainer