import searchIcon from '../../../assets/images/menthor/search.svg'
const SearchInput = () => {
  return(
      <div className='relative w-[416px] flex items-center h-12 my-10 max-w-full'>
          <input className='pr-10 block w-full h-full border-2 border-[#E5E7EB] rounded-2xl' id='searchStudent' type="text" placeholder='جستجوی دانشجو'/>
          <label className='absolute right-4 w-full ' htmlFor="searchStudent">
              <img src={searchIcon} alt="" />
          </label>
      </div>
  )
}
export default SearchInput;