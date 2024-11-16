import {WorkCardStatusList} from "../../helper/ProjectData/Data.jsx";

const ShowStatusList = () => {
  return (
    <div className="grid grid-cols-11  max-[1380px]:grid-cols-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 w-full">
      {WorkCardStatusList.map((item) => (
        <div
          key={item.id}
          className="text-sm odd:bg-white even:bg-gray-table w-full border-b"
        >
          <div className="flex flex-col items-center h-[65px] w-full pt-2 px-1">
            <span>{item.textTop}</span>
            <span>{item.textButton}</span>
          </div>
          <div className="h-[65px] w-full items-center justify-center flex flex-col">
            <span>{item.textStatus}</span>
            {item.hasTime && <span>ساعت</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowStatusList;
