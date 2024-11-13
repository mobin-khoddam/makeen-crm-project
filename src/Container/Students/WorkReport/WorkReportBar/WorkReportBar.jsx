import { WorkReportBarList } from "../../../../helper/ProjectData/Data";

const WorkReportBar = ({ setSelectPageRender, selectPageRender }) => {
  return (
    <div className="w-full flex mb-[43px] cursor-pointer [&>span]:flex [&>span]:items-center [&>span]:justify-center [&>span]:gap-2 [&>span]:w-full [&>span]:p-4 max-lg:flex-col first:bg-black last:*:rounded-l-2xl first:*:rounded-r-2xl max-lg:first:*:rounded-t-2xl max-lg:last:*:rounded-b-2xl max-lg:first:*:rounded-b-none max-lg:last:*:rounded-t-none">
      {WorkReportBarList.map((barItems) => (
        <span
          onClick={() => setSelectPageRender(barItems.pageRender)}
          key={barItems.id}
          className={`${selectPageRender === barItems.pageRender
              ? "bg-[#FACA15] text-white"
              : "bg-white text-black"
            } ' transition-all duration-300 ease-linear`}
        >
          <div
            style={{ mask: `url(${barItems.icon}) center no-repeat`, transition: 'all', transitionDuration: '300ms' }}
            className={`w-6 h-6  ${selectPageRender === barItems.pageRender ? "bg-white" : "bg-black"
              }`}
          ></div>
          <span>{barItems.text}</span>
        </span>
      ))}
    </div>
  );
};

export default WorkReportBar;
