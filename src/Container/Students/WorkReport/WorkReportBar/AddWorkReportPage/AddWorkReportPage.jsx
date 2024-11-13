import WorkReportField from "./WorkReportField/WorkReportField.jsx";

const AddWorkReportPage = () => {
    return (
        <div className="w-full px-6 pt-6 pb-8 bg-white rounded-2xl ">
            <div className="w-full flex items-center justify-between mb-10">
                <span>گزارش شماره 14</span>
                <span>1403/4/21</span>
            </div>
            <WorkReportField />
        </div>
    )
}

export default AddWorkReportPage