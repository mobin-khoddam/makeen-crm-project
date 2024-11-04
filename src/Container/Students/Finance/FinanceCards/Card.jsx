const Card = ({ image, title, value }) => {
  return (
    <div className="w-[180px] max-sm:w-[80%] max-xl:w-[18.31%]  h-[142px] max-sm:h-[165px] rounded-[15px] bg-white py-[15px] flex justify-center items-center max-sm:mb-5 ">
      <div className="flex-col items-center text-center justify-between h-[111px]   ">
        <span className="block mb-3 mx-auto  w-fit">{image}</span>
        <span className="sm:text-[11px] xl:text-[14px] block text-[#A3AED0] mb-3">
          {title}
        </span>
        <span className="xl:text-[16px] lg:text-[14px] sm:text-[13px] block text-[#1B2559]">
          {value}
        </span>
      </div>
    </div>
  );
};

export default Card;
