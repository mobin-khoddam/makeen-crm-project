const TechnicScoreModal = ({modalRef}) => {
    const numberRegex = /^[0-9]*$/;
    const numberInputHandler = (e => {
        if (!numberRegex.test(e.key) && e.key === '') {
            e.preventDefault();
        }
    })
    return (
        <div>
            <dialog ref={modalRef} className="modal">
                <div className="modal-box">
                    <div className='flex justify-between items-center mb-16'>
                        <p className="py-4">لطفا نمره فنی علیرضا احمدی را وارد نمایید :</p>
                        <input type="text"
                               maxLength={2}
                               onKeyDown={(e) => numberInputHandler(e)}
                               className='w-[85px] h-[48px] rounded-xl border border-[#818181] bg-[#F9FAFB] text-center'/>
                    </div>
                    <button onClick={() => modalRef.current.close()} className='w-full py-2 rounded-xl bg-primary-blue text-white'>ثبت</button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}
export default TechnicScoreModal