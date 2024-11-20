import CustomButton from '../../Students/CustomButton'
import dateIcon from './../../../assets/images/Admin/Dashboard/calendar-tick.svg'
import clockIcon from './../../../assets/images/Admin/Dashboard/clock.svg'

const LeaveRequestModal = ({ children, modalRef }) => {
    return (
        <div>
            {children}
            <dialog className="modal" ref={modalRef}>
                <div className="modal-box flex flex-col gap-6">
                    <div>
                        <div className='font-semibold'>محمد مهدی نصیری</div>
                        <div className='text-sm'>UI UX 14</div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={dateIcon} alt='' />
                        <span>1402/02/02</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={clockIcon} alt='' />
                        <span>ساعت 16 تا 8</span>
                    </div>
                    <div>
                        <span>مریضی</span>
                        <p className='text-sm text-primary-gray-100 mt-2'>
                            با سلام و عرض ادب بنده به علت سرماخوردگی در این تاریخ و ساعت امکان حضور در کلاس را نخواهم داشت.ممنون
                        </p>
                    </div>
                    <textarea className='border-2 border-primary-gray-100 w-full rounded-lg p-3 min-h-[100px] max-h-[250px]' type="button" placeholder='پیام خود را بنویسید ...' />
                    <div className='flex gap-3'>
                        <CustomButton onClick={() => modalRef.current.close()} className='' text='تایید مرخصی' />
                        <CustomButton onClick={() => modalRef.current.close()} className='!text-primary-red !bg-white border border-primary-red' text='رد درخواست' />
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default LeaveRequestModal