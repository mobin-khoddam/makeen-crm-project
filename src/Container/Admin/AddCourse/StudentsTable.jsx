import editeIcon from '/src/assets/images/Admin/Courses/editIcon.svg'
import deleteIcon from '/src/assets/images/Admin/Courses/delete.svg'

const StudentsTable = ({courseTime, setCourseTime}) => {

    const removeHandler = (id) => {
        setCourseTime(courseTime.filter(item => item.id !== id))
    }

    const editeHandler = (id) => {

    }

    return (
        <>
            {courseTime.length > 0 ? (
                <div className="overflow-x-auto mb-6">
                    <table className="table table-zebra">
                        <thead>
                        <tr className='bg-[#e5e7eb]'>
                            <th>روز</th>
                            <th>ساعت شروع</th>
                            <th>ساعت پایان</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {courseTime.map(item => (
                            <tr key={item.id}>
                                <th>{item.courseTime}</th>
                                <th>{item.endHour} : {item.endMinute}</th>
                                <th>{item.startHour} : {item.startMinute}</th>
                                <th className='flex items-center justify-end gap-4'>
                                    <img onClick={() => editeHandler(item.id)} className='cursor-pointer' src={editeIcon} alt=""/>
                                    <img onClick={() => removeHandler(item.id)} className='cursor-pointer'
                                         src={deleteIcon} alt=""/>
                                </th>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : null
            }
        </>
    )
}
export default StudentsTable;