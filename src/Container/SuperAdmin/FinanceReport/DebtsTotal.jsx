import React, { useState } from "react";
import FilterDatePicker from "../../../Componants/Datepicker/DatePicker";

const DebtsTotal = () => {
  const [state, setState] = useState({
    first: true,
    second: false,
    third: false,
  });
  return (
    <>
      <div className="w-full lg:w-[665px] h-fit lg:h-[142px] rounded-[10px] border-[#197861] border-l-2 border-b-2 border-solid border-[1px] mb-[43px] mx-auto">
        <div className="w-[99%] lg:w-[659px] h-fit  lg:h-[137px] rounded-[10px] border-[#197861] border-solid border-[1px] border-b-2 border-t-0 border-r-0 pt-[17px] px-8 border-l-2 bg-white ">
          <div className="w-full h-fit md:h-fit  lg:h-[103px] flex flex-col justify-between ">
            <div className="flex items-center justify-between max-lg:flex-col gap-y-2 w-full mb-2  ">
              <div className="flex items-center justify-between text-[#6D6D6D] text-[14px] max-lg:w-full">
                <button
                  onClick={() => {
                    setState({
                      first: true,
                      second: false,
                      third: false,
                    });
                  }}
                  className={`w-[70px] h-8 ml-4  ${
                    state.first && "bg-[#197861] text-white"
                  } transition-all ease-linear duration-150 rounded-full`}
                >
                  فصلی
                </button>
                |
                <button
                  onClick={() => {
                    setState({
                      first: false,
                      second: true,
                      third: false,
                    });
                  }}
                  className={`w-[70px] h-8 mx-4 ${
                    state.second && "bg-[#197861] text-white"
                  } transition-all ease-linear duration-150 rounded-full`}
                >
                  ماهانه
                </button>
                |
                <button
                  onClick={() => {
                    setState({
                      first: false,
                      second: false,
                      third: true,
                    });
                  }}
                  className={`w-[70px] h-8 mr-4 rounded-full ${
                    state.third && "bg-[#197861] text-white"
                  }  transition-all ease-linear duration-150`}
                >
                  سالانه
                </button>
              </div>
              <div className="max-lg:w-full w-[180px] ">
                <FilterDatePicker />
              </div>
            </div>
            <div className="  flex items-center text-[#197861] justify-between  max-sm:flex-col gap-y-2">
              <span className="sm:text-[20px] text-[14px]">
                مجموع بدهکاری ها
              </span>
              <div className="flex items-center gap-x-2">
                <span className="sm:text-[12px] text-[10px]">تومان</span>
                <span className="text-[#197861] sm:text-[24px] text-[18px] ">
                  223.785.300
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DebtsTotal;
