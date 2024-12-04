const LeaveAndAbsenceSettingsInput = ({title, placeholder}) => {
  return (
      <div className=''>
        <input placeholder={placeholder} type="text" className='w-[83px] h-[53px]'/>
        <span>{title}</span>
      </div>
  )
}
export default LeaveAndAbsenceSettingsInput