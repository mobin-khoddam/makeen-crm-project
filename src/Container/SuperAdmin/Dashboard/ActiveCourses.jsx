import {activeCoursesPanelAmin} from "../../../helper/ProjectData/Data.jsx";

const ActiveCourses = () => {
    return (
        <div className='w-full bg-white p-6 rounded-[20px]'>
            <span className='text-xl font-semibold max-sm:text-base'>دوره های فعال</span>
            <div className="overflow-x-auto w-full">
                <table className="table border-separate border-spacing-y-4 w-full">
                    <thead>
                    <tr>
                        <th>نام دوره</th>
                        <th>نام استاد</th>
                        <th>تعداد</th>
                        <th>شماره دوره</th>
                        <th>تاریخ شروع</th>
                        <th>تاریخ پایان</th>
                    </tr>
                    </thead>
                    <tbody>
                    {activeCoursesPanelAmin.map(item => (
                        <tr className='bg-white [&>th]:shadow-[0px_20px_50px_0px_#7090B01F] first:[&>th]:rounded-r-full last:[&>th]:rounded-l-full [&>th]:p-6 m-96 max-sm:text-xs'
                            key={item.id}>
                            <th>{item.courseName}</th>
                            <th>{item.mentor}</th>
                            <th>{item.number}</th>
                            <th>{item.CourseNumber}</th>
                            <th>{item.startDate}</th>
                            <th>{item.endDate}</th>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ActiveCourses;