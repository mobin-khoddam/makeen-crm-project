import OriginalTemplatePage from "../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import StudentsCard from "../../Container/SuperAdmin/Dashboard/StudentsCard.jsx";
import {executiveAgentsTeam, mentorsTeam, NumberOfStudentsCard} from "../../helper/ProjectData/Data.jsx";
import TeamMembers from "../../Container/SuperAdmin/Dashboard/TeamMembers.jsx";
import Acquaintance from "../../Container/SuperAdmin/Dashboard/Acquaintance.jsx";

const SuperAdminDashboard = () => {

    return (
        <OriginalTemplatePage>
            <StudentsCard data={NumberOfStudentsCard}/>
            <div className='flex w-full gap-6 mt-6'>
                <div className='w-full flex flex-col gap-5'>
                    <TeamMembers data={executiveAgentsTeam}/>
                    <Acquaintance/>
                </div>
                <TeamMembers data={mentorsTeam}/>
            </div>
        </OriginalTemplatePage>
    )
}
export default SuperAdminDashboard