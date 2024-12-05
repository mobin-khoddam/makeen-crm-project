import coffeeIcon from '/src/assets/images/Admin/Compositions/coffee.svg'
import addIcon from '/src/assets/images/Admin/Compositions/add.svg'
import removeIcon from '/src/assets/images/Admin/Compositions/minus-icon.svg'
import CustomButton from "../../../Students/CustomButton.jsx";
import {useState} from "react";

const LeaveRules = () => {
    const [leaveRulesInput, setLeaveRulesInput] = useState([1, 2, 3, 4])
    const addInputHandler = () => {
        const lastNumber = leaveRulesInput.length + 1
        setLeaveRulesInput([...leaveRulesInput, lastNumber])
    }
    const removeInputHandler = () => {
        setLeaveRulesInput(leaveRulesInput.slice(0, -1))
    }
    return (
        <form>
            <div className='flex item-center justify-between mb-6'>
                <div className='flex items-center gap-2'>
                    <img src={coffeeIcon} alt=""/>
                    <span className='font-semibold text-primary-blue'>قوانین مرخصی</span>
                </div>
                <div className='flex items-center gap-2'>
                    <img onClick={removeInputHandler} className='cursor-pointer active:scale-95 duration-100 w-8 h-8 rounded-full' src={removeIcon} alt=""/>
                    <img onClick={addInputHandler} className='cursor-pointer active:scale-95 duration-100  w-8 h-8' src={addIcon}
                         alt=""/>
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                {leaveRulesInput.map((item) => (
                    <div key={item} className='flex items-start gap-4'>
                        <span className='text-xl text-[#A3AED0] w-1/12 text-center py-4'>{item}</span>
                        <textarea placeholder='قوانین مرخصی را برای دانشجویان وارد کنید...'
                                  className='border-2 border-[#E5E7EB] outline-none rounded-md p-4 w-full h-[60px] min-h-[60px] max-h-[150px] max-[460px]:h-[80px] max-[460px]:min-h-[80px]'/>
                    </div>
                ))}
            </div>
            <CustomButton parentClass='!w-[188px] mx-auto' className='!w-full mx-auto block mt-8' text='ذخیره'/>
        </form>
    )
}
export default LeaveRules;