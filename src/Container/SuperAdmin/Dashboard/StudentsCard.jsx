const StudentsCard = ({data}) => {
    return (
        <div className='grid justify-between gap-6 grid-cols-4 max-[1390px]:grid-cols-2 max-[1390px]:w-fit max-[1390px]:mx-auto max-[880px]:grid-cols-1'>
            {data.map((student) => (
                <div key={student.id}
                     className={`w-[240px] h-[95px] flex items-center text-white text-nowrap rounded-[20px] pl-3 bg-gradient-to-r ${student.bgFrom} ${student.bgTo}`}>
                    <img className='h-full' src={student.image} alt=""/>
                    <div className='flex flex-col'>
                        <span>{student.title}</span>
                        <div>
                            <span>{student.number}</span> {' '}
                            <span className='text-xs'>نفر</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default StudentsCard