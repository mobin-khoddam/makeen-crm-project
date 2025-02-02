const SearchInput = ({placholder, className}) => {
  return (
      <div
          className={`flex items-center  w-full  lg:w-[40%]  h-12 bg-gray-50 border border-gray-300 rounded-[8px] px-4 shadow-sm gap-x-1 ${className}`}>
          <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path
                  d="M15.75 16.25L11.25 11.75M12.75 8C12.75 8.68944 12.6142 9.37213 12.3504 10.0091C12.0865 10.646 11.6998 11.2248 11.2123 11.7123C10.7248 12.1998 10.146 12.5865 9.50909 12.8504C8.87213 13.1142 8.18944 13.25 7.5 13.25C6.81056 13.25 6.12787 13.1142 5.49091 12.8504C4.85395 12.5865 4.2752 12.1998 3.78769 11.7123C3.30018 11.2248 2.91347 10.646 2.64963 10.0091C2.3858 9.37213 2.25 8.68944 2.25 8C2.25 6.60761 2.80312 5.27226 3.78769 4.28769C4.77226 3.30312 6.10761 2.75 7.5 2.75C8.89239 2.75 10.2277 3.30312 11.2123 4.28769C12.1969 5.27226 12.75 6.60761 12.75 8Z"
                  stroke="#6B7280"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
          </svg>
          <input
              type="text"
              placeholder={placholder}
              className="flex-grow bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400 text-[14px]"
          />
      </div>
  )
}
export default SearchInput