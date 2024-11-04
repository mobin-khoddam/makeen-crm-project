import warningIcon from '../../../../../../assets/images/Students/WorkReports/warningIcon.png'

const WorkReportModal = ({ modalRef }) => {
    return (
        <div>
            <dialog ref={modalRef} id="my_modal_3" className="modal ">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <img className='w-[62px] h-[62px]' src={warningIcon} alt='' />
                        <span>آیا اطمینان دارید که گزارش کار ثبت شود؟</span>
                        <div className='flex gap-4'>
                            <button className="text-white bg-primary-blue flex justify-center items-center gap-1 rounded-lg w-[164px] h-[53px]">
                                <span>ثبت گزارش کار</span>
                            </button>
                            <form method="dialog">
                                <button className='w-20 h-[53px] border border-primary-gray-100 rounded-lg'>
                                    ویرایش
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default WorkReportModal