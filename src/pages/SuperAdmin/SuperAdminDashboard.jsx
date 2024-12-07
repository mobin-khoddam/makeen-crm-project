import OriginalTemplatePage from "../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import StudentsCard from "../../Container/SuperAdmin/Dashboard/StudentsCard.jsx";
import {executiveAgentsTeam, mentorsTeam, NumberOfStudentsCard} from "../../helper/ProjectData/Data.jsx";
import MembersList from "../../Container/SuperAdmin/Dashboard/MembersList.jsx";
import AcquaintanceChart from "../../Container/SuperAdmin/Dashboard/AcquaintanceChart.jsx";
import AlumniFinancialReportChart from "../../Container/SuperAdmin/Dashboard/AlumniFinancialReportChart.jsx";
import ActiveCourses from "../../Container/SuperAdmin/Dashboard/ActiveCourses.jsx";

const SuperAdminDashboard = () => {

    return (
        <OriginalTemplatePage>
            <StudentsCard data={NumberOfStudentsCard}/>
            <div className='grid grid-cols-2 w-full gap-6 my-6 max-xl:grid-cols-1'>
                <div className='w-full flex flex-col gap-5'>
                    <MembersList data={executiveAgentsTeam}/>
                    <AcquaintanceChart/>
                </div>
                <MembersList data={mentorsTeam}/>
            </div>
            <div className='flex gap-6 max-[1380px]:flex-col-reverse'>
                <AlumniFinancialReportChart />
                <ActiveCourses />
            </div>
        </OriginalTemplatePage>
    )
}
export default SuperAdminDashboard