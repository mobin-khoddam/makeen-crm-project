import GreenBtn from "../../../../Componants/GreenBtn"
import CustomButton from "../../../Students/CustomButton"
import LeaveRequestModal from "../LeaveRequestModal"

const LeaveRequestCard = ({ onClick, modalRef }) => {
    return (
        <div className="w-[312px] p-6 flex flex-col gap-6 rounded-lg bg-white max-[1056px]:w-full max-sm:text-sm">
            <div className="flex items-center justify-between">
                <span>محمد صادقی کیا</span>
                <span>1402/3/29</span>
            </div>
            <div className="text-primary-gray-100">
                php 13
            </div>
            <div className="flex items-center justify-between">
                <GreenBtn color='[#A3AED0]' maxNum='16' minNum='8' text='8 ساعت از مرخصی استفاده شده است.' />
                <div onClick={onClick}>
                    <LeaveRequestModal modalRef={modalRef} >
                        <CustomButton className='!rounded-full !py-1 text-sm' text='مشاهده' href='' />
                    </LeaveRequestModal>
                </div>
            </div>
        </div>
    )
}

export default LeaveRequestCard