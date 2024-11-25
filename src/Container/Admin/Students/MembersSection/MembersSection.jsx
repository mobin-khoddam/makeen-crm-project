const MembersSection = ({title, number}) => {
  return (
      <div className='flex items-center w-full'>
          <div className='w-1 h-12 rounded-r bg-pink-600'></div>
          <div className='flex justify-between font-semibold bg-white w-[300px] max-w-full px-5 py-6 rounded-xl'>
              <div>{title}</div>
              <div>{number}</div>
          </div>
      </div>
  )
}
export default MembersSection