import moreIcon from '/src/assets/images/SuperAdmin/moreInformation.svg'
import addIcon from '/src/assets/images/SuperAdmin/addButton.svg'
import ModalAdmins from "../AdminsManagement/ModalAdmins.jsx";
import {useState} from "react";

const TeamMembers = ({data}) => {
    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(true);
    }
    const closeModal = () => {
        setModal(false);
    }
  return(
      <div className='bg-white p-6 font-semibold text-[#2B3674] flex flex-col gap-5 w-full rounded-lg'>
          <div className='flex items-center justify-between'>
              {data.title}
              <img onClick={openModal} className='cursor-pointer active:scale-95 duration-100' src={addIcon} alt=""/>
          </div>
          {data.data.map((item) => (
              <div key={item.id} className='bg-white p-3 rounded-box flex justify-between items-center shadow-[0px_18px_40px_0px_#7090B01F]'>
                  <div className='flex items-center gap-5'>
                      <img className='rounded-full' src={item.image} alt=""/>
                      <div className='flex flex-col gap-2'>
                          <span>{item.name}</span>
                          <span className='text-xs text-[#A3AED0]'>{item.role}</span>
                      </div>
                  </div>
                      <img src={moreIcon} alt=""/>
              </div>
          ))}
          <ModalAdmins isOpen={modal} closeModal={closeModal}  />
      </div>
  )
}
export default TeamMembers

