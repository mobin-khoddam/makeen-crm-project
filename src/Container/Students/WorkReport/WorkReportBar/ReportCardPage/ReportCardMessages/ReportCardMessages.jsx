import messageIcon from "/src/assets/images/Students/WorkReports/messages-3.svg";
import { MessageReportCardList } from "../../../../../../helper/ProjectData/Data.jsx";

const ReportCardMessages = () => {
  return (
    <div className="flex flex-col gap-8 max-sm:text-sm max-sm:text-center">
      {MessageReportCardList.map((item) => (
        <div key={item.id}>
          <div className="flex items-center gap-2 mb-2">
            <img src={`${messageIcon}`} alt="messageIcon" />
            <span>{item.pointOfView}</span>
          </div>
          <p className="bg-gray-table p-4 rounded-lg">{item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ReportCardMessages;
