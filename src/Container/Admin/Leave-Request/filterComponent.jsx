const FilterComponent = () => {
  return (
    <div className="w-full flex items-center gap-x-8  h-fit overflow-auto pb-2">
      <div className="w-[140px] h-full relative">
        <select
          className="select !h-[41px]  !p-0 !text-center max-h-[41px] !outline-none select-bordered w-full min-w-[140px] text-[#4318FF] appearance-none"
          defaultValue=""
        >
          <option className="!text-[#4318FF] text-center" disabled value="">
            نام اصلی دوره
          </option>
          <option className="!text-[#4318FF]">ui/ux</option>
          <option className="!text-[#4318FF]">React</option>
          <option className="!text-[#4318FF]">Python</option>
        </select>
      </div>
      <div className="w-[140px] h-full relative">
        <select
          className="select !h-[41px]  !p-0 !text-center max-h-[41px] !outline-none select-bordered w-full text-[#4318FF] appearance-none min-w-[140px]"
          defaultValue=""
        >
          <option className="!text-[#4318FF] text-center" disabled value="">
            نام فرعی دوره{" "}
          </option>
          <option className="!text-[#4318FF]">ui/ux</option>
          <option className="!text-[#4318FF]">React</option>
          <option className="!text-[#4318FF]">Python</option>
        </select>
      </div>
      <div className="w-[140px] h-full relative">
        <select
          className="select !h-[41px]  !p-0 !text-center max-h-[41px] !outline-none select-bordered w-full text-[#4318FF] min-w-[140px] appearance-none"
          defaultValue=""
        >
          <option className="!text-[#4318FF] text-center" disabled value="">
            نام اصلی دوره
          </option>
          <option className="!text-[#4318FF]">ui/ux</option>
          <option className="!text-[#4318FF]">React</option>
          <option className="!text-[#4318FF]">Python</option>
        </select>
      </div>
      <div className="w-[140px] h-full relative">
        <select
          className="select !h-[41px]  !p-0 !text-center max-h-[41px] !outline-none select-bordered w-full text-[#4318FF] appearance-none min-w-[140px]"
          defaultValue=""
        >
          <option className="!text-[#4318FF] text-center" disabled value="">
            نام اصلی دوره
          </option>
          <option className="!text-[#4318FF]">ui/ux</option>
          <option className="!text-[#4318FF]">React</option>
          <option className="!text-[#4318FF]">Python</option>
        </select>
      </div>
    </div>
  );
};

export default FilterComponent;
