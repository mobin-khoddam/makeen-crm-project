const StudentsCard = ({data}) => {
    return (
        <div className='flex justify-between'>
            {data.map((student) => (
                <div key={student.id}
                     className={`w-[240px] h-[95px] flex items-center text-white text-nowrap rounded-xl pl-3 bg-gradient-to-r ${student.bgFrom} ${student.bgTo}`}>
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