import { MonthReportCardList } from "../../../../../../helper/ProjectData/Data.js";

const MonthReportCardPage = () => {
  return (
    <div className="flex mb-9 gap-4 flex-wrap max-[1080px]:justify-center">
      {MonthReportCardList.map((item) => (
        <div
          key={item.id}
          className={`bg-${item.bgColor} border-${item.bgColor} text-${item.textColor} border-${item.border} border rounded-lg px-6 py-3`}
        >
          {item.month}
        </div>
      ))}
    </div>
  );
};

export default MonthReportCardPage;
