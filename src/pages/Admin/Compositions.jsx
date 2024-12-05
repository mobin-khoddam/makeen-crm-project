import OriginalTemplatePage from "../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import WorkReportSettings from "../../Container/Admin/Compositions/WorkReportSettings/WorkReportSettings.jsx";
import LeaveAndAbsenceSettings
    from "../../Container/Admin/Compositions/LeaveAndAbsenceSettings/LeaveAndAbsenceSettings.jsx";
import TransferToCard from "../../Container/Admin/Compositions/TransferToCard.jsx";
import {TransferToCardAdminPanel} from "../../helper/ProjectData/Data.jsx";
import ReportSettings from "../../Container/Admin/Compositions/ReportSettings.jsx";
import LeaveRules from "../../Container/Admin/Compositions/WorkReportSettings/LeaveRules.jsx";


const Compositions = () => {
  return (
      <OriginalTemplatePage>
          <div className="flex gap-8 max-xl:flex-col-reverse [&_form]:bg-white [&_form]:rounded-box [&_form]:py-4 [&_form]:px-6 w-full [&_*]:text-sm">
              <div className='w-full flex flex-col gap-8'>
                  <WorkReportSettings />
                  <ReportSettings />
                  <LeaveRules />
              </div>
              <div className='w-full flex flex-col gap-8'>
                  <LeaveAndAbsenceSettings />
                  {TransferToCardAdminPanel.map(item => (
                      <div key={item.id}>
                          <TransferToCard title={item.title} icon={item.icon} inputName={item.inputName} />
                      </div>
                  ))}
              </div>
          </div>
      </OriginalTemplatePage>
  )
}
export default Compositions