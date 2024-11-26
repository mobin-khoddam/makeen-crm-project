
const Select = ({data}) => {

  return (
      <select className="select border border-[#D1D5DB] block w-full max-w-xs focus:outline-none text-primary-blue">
          <option disabled selected>{data.title}</option>
          {data.options.map((option) => (
              <option className='text-primary-gray-100 !w-full' key={option.id}>{option.option}</option>
          ))}
      </select>
  )
}
export default Select;