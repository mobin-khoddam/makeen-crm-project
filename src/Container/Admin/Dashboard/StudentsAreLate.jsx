import arrow from '../../../assets/images/GeneralImages/arrowBlue.svg'
import searchIcon from '../../../assets/images/GeneralImages/search.svg'
import CustomButton from "../../Students/CustomButton.jsx";
import {Link} from "react-router-dom";

const StudentsAreLate = () => {
    return (
        <div className='bg-white p-6 rounded-lg h-full'>
            <div className='flex justify-between mb-7 h-fit'>
                <span>تاخیر دانشجویان</span>
                <Link to='/admin/dashboard/leave-records' className='flex items-center gap-4 text-primary-blue'>
                    <span> سوابق تاخیر</span>
                    <img src={arrow} alt="arrow" />
                </Link>
            </div>
            <div className='flex items-center justify-between relative bg-[#F9FAFB] h-[65px] text-sm'>
                <label className='absolute right-2' htmlFor='LateRecords'>
                    <img src={searchIcon} alt="arrow" />
                </label>
                <input id='LateRecords' type="text"
                    className='w-full h-full bg-inherit border-[#D1D5DB] border-2 rounded-xl outline-none pr-8 max-sm:pl-4 pl-24' />
                <div className='absolute left-2 max-sm:hidden'><CustomButton text='جستجو' className='px-3 py-2 text-sm' /></div>
            </div>
                <CustomButton text='جستجو' className='px-3 py-2 text-sm mt-10 mx-auto block sm:hidden' />
        </div>
    )
}
export default StudentsAreLate