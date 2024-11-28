import Pagination from "../../../Componants/Pagination/Pagination.jsx";

const courseList = ({data}) => {
    return (
        <>
            <div className='grid grid-cols-3 gap-6 mb-8 max-sm:grid-cols-2'>
                {data.map(item => (
                    <div key={item.id}>
                        <img className='object-cover' loading="lazy" src={item.img} alt=''/>
                    </div>
                ))}
            </div>
            <Pagination/>
        </>
    )
}
export default courseList