import WorkReportPage from "../../../../../pages/Students/WorkReport/WorkReportPage.jsx";
import FilterDatePicker from "./DatePicker/DatePicker.jsx";
import CategoriesFilter from "./CategoriesFilter/CategoriesFilter.jsx";
import {useState} from "react";
import WorkReportList from "./WorkReportList/WorkReportList.jsx";

const SeeWorkReportListPage = () => {
    const [showCategories, setShowCategories] = useState(false)
    const [showDateDrawer, setShowDateDrawer] = useState(false)

    return (
        <WorkReportPage>
            <div className="flex items-center gap-4 cursor-pointer max-lg:flex-col max-lg:items-start">
                <div className="z-20">
                    <FilterDatePicker showDateDrawer={showDateDrawer} setShowDateDrawer={setShowDateDrawer}
                                      setShowCategories={setShowCategories}/>
                </div>
                <div className="z-10">
                    <CategoriesFilter showCategories={showCategories} setShowCategories={setShowCategories}
                                      setShowDateDrawer={setShowDateDrawer}/>
                </div>
            </div>
            <div>
                <WorkReportList />
            </div>
        </WorkReportPage>
    )
}

export default SeeWorkReportListPage;

