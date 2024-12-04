import OriginalTemplatePage from "../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import WorkReportSettings from "../../Container/Admin/Compositions/WorkReportSettings/WorkReportSettings.jsx";
import LeaveAndAbsenceSettings
    from "../../Container/Admin/Compositions/LeaveAndAbsenceSettings/LeaveAndAbsenceSettings.jsx";


const Compositions = () => {
  return (
      <OriginalTemplatePage>
          <div className="[&>form]:bg-white [&>form]:rounded-box [&>form]:py-4 [&>form]:px-6 w-1/2">
              <WorkReportSettings />
              <LeaveAndAbsenceSettings />
          </div>
      </OriginalTemplatePage>
  )
}
export default Compositions