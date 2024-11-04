const Card = ({ image, title, value }) => {
  return (
    <div className="w-[189px] h-[142px] rounded-[15px] bg-white py-[15px] flex justify-center items-center ">
      <div className="flex-col items-center text-center justify-between h-[111px]   ">
        <span className="block mb-3 mx-auto  w-fit">{image}</span>
        <span className="text-[14px] block text-[#A3AED0] mb-3">{title}</span>
        <span className="text-[16px] block text-[#1B2559]">{value}</span>
      </div>
    </div>
  );
};

export default Card;
