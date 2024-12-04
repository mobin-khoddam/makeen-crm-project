import closeIcon from '../../../assets/images/Admin/Courses/close-circle.svg'
import AddButton from "./AddButton.jsx";
import {useRef} from "react";
import SearchInput from "../SearchInput.jsx";

const AddStudentsModal = () => {
    const modalRef = useRef(null);
  return (
      <div>
          <button onClick={()=>modalRef.current?.showModal()}><AddButton text='افزودن دانشجو' /></button>
          <dialog ref={modalRef} className="modal">
              <div className="modal-box h-4/5">
                  <img onClick={() => modalRef.current?.close()} className='mb-5 cursor-pointer' src={closeIcon} alt=""/>
                  <SearchInput className='!w-full mb-5' placholder='جستجوی نام دانشجو' />
              </div>
              <form method="dialog" className="modal-backdrop">
                  <button>close</button>
              </form>
          </dialog>
      </div>
  )
}
export default AddStudentsModal