import ReportCard from "../../../Students/WorkReport/WorkReportBar/ReportCardPage/ReportCard.jsx";
import CustomButton from "../../../Students/CustomButton.jsx";

const PerformanceReport = () => {
  return (
      <div>
          <ReportCard />
          <div className='flex justify-center items-center mt-5'>
              <CustomButton className='!px-12 !py-2' text='چاپ' />
          </div>
      </div>
  )
}
export default PerformanceReport;