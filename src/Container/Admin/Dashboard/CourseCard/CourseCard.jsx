import leftArrow from '/src/assets/images/GeneralImages/arrow-left.svg'

const CourseCard = ({course, number}) => {
    return (
        <div className='flex items-center cursor-pointer select-none'>
            <div className="bg-orange-400 w-1 h-[40px] rounded-r-full"></div>
            <div
                className="p-2 bg-white w-[200px] rounded-xl flex items-center justify-center gap-2">
                <div className='bg-orange-400 w-8 h-8 flex justify-center items-center rounded-full '>
                    J
                </div>
                <div className="flex flex-col ml-5 ">
                    <span> دوره {course}</span>
                    <div>
                        <span> {number} </span>
                        <span className='text-primary-gray-100'>نفر</span>
                    </div>
                </div>
                <img className='w-6 h-6' src={leftArrow} alt=''/>
            </div>
        </div>
    )
}
export default CourseCard