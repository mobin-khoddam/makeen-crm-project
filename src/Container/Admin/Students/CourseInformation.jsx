import CourseInformationList from "./CourseInformationList.jsx";

const CourseInformation = ({data}) => {
    return (
        <div className='flex justify-between items-center flex-wrap gap-12 max-[1318px]:justify-center'>
            {
                data.map(item => (
                    <div className='w-[290px] max-w-full bg-white p-6 rounded-xl' key={`${item.id}-container`}>
                        {item.courseName && <div
                            className='text-xl font-semibold text-center mb-6 text-green-600'>{item.courseName}</div>}
                        <CourseInformationList data={item.courseList} />
                    </div>
                ))
            }
        </div>
    )
}
export default CourseInformation