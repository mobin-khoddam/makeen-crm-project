const CourseInformationList = ({data}) => {
    return (
            data.map((item) => (
                <div key={`${item.id}-list`}
                     className='[&>div]:flex [&>div]:items-center [&>div]:justify-between flex flex-col gap-4 mt-5'>
                    <div>
                        <div>تعداد دوره برگذار شده</div>
                        <div>{item.courseHeld}</div>
                    </div>
                    <div>
                        <div>تعداد کل شرکت کننده ها</div>
                        <div>{item.membersNumber}</div>
                    </div>
                    <div>
                        <div>تعداد دانشجوی فعال</div>
                        <div>{item.activeStudents}</div>
                    </div>
                    <div>
                        <div>تعداد فارغ التحصیل</div>
                        <div>{item.graduate}</div>
                    </div>
                    <div>
                        <div>تعداد استخدامی</div>
                        <div>{item.employment}</div>
                    </div>
                    <div>
                        <div>تعداد انصرافی</div>
                        <div>{item.withdrawal}</div>
                    </div>
                    <div>
                        <div>تعداد ریجکتی</div>
                        <div>{item.rejection}</div>
                    </div>
                </div>
            ))
    )
}

export default CourseInformationList