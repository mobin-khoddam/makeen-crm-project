const CustomReadOnly = ({title, text}) => {
  return (
      <div className='relative border-2 w-full p-4 rounded-box'>
          <span className='absolute text-xs text-[#6B7280] -top-3 bg-white'>{title}</span>
          <p className='w-full h-full bg-white '>{text}</p>
      </div>
  )
}
export default CustomReadOnly