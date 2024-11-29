import addIcon from '/src/assets/images/Admin/Courses/add.svg'

const AddButton = ({text}) => {
  return (
      <span type='button' className='border border-primary-blue pl-4 pr-5 py-1 rounded-md flex gap-1 text-primary-blue active:scale-95 duration-150'>
          <span>{text}</span>
          <img src={addIcon} alt=""/>
      </span>
  )
}
export default AddButton