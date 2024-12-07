import moreIcon from '/src/assets/images/SuperAdmin/moreInformation.svg'
import addIcon from '/src/assets/images/SuperAdmin/addButton.svg'
import ModalAdmins from "../AdminsManagement/ModalAdmins.jsx";
import {useState} from "react";
import {personListDropDown} from "../../../helper/ProjectData/Data.jsx";

const MembersList = ({data}) => {
    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(true);
    }
    const closeModal = () => {
        setModal(false);
    }
    return (
        <div className='bg-white p-6 font-semibold text-[#2B3674] flex flex-col gap-5 w-full rounded-[20px]'>
            <div className='flex items-center justify-between'>
                {data.title}
                <img onClick={openModal} className='cursor-pointer active:scale-95 duration-100' src={addIcon} alt=""/>
            </div>
            {data.data.map((item) => (
                <div key={item.id}
                     className='bg-white p-3 rounded-box flex justify-between gap-5 items-center shadow-[0px_18px_40px_0px_#7090B01F]'>
                    <div className='flex items-center gap-5'>
                        <img className='rounded-full' src={item.image} alt=""/>
                        <div className='flex flex-col gap-2'>
                            <span className='max-sm:text-sm'>{item.name}</span>
                            <span className='text-xs text-[#A3AED0]'>{item.role}</span>
                        </div>
                    </div>
                    <div dir='ltr' className="dropdown ">
                        <div tabIndex={0} role="button" className="btn"><img className='min-w-4' src={moreIcon} alt=""/></div>
                        <ul dir='rtl' tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li>
                                {personListDropDown.map((item) => (
                                    <span key={item.id}>
                                        <img src={item.icon} alt=""/>
                                        {item.text}
                                    </span>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
            <ModalAdmins isOpen={modal} closeModal={closeModal}/>
        </div>
    )
}
export default MembersList

