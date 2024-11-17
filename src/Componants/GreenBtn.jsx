const GreenBtn = () => {
  return (
    <div className="w-[59px] h-[32px] rounded-full border flex hover:scale-110 relative group duration-300 border-[#09814A] text-[#09814A] ">
      <div className="  absolute -top-[100px] hidden group-hover:flex flex-col justify-between items-center">
        <div className="w-[200px] h-[100px] bg-white shadow-md rounded p-3">
          <div className="flex flex-col gap-2">
            <span className="font-medium">تایید شده</span>
            <p className="text-sm text-primary-gray-100">
              کاربران می خواهند صفحه یا سایت خاصی را پیدا کنند.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">11</div>
      <div
        className={`w-[50%] h-full rounded-full text-white flex justify-center items-center bg-[#09814A] `}
      >
        9
      </div>
    </div>
  );
};

export default GreenBtn;
