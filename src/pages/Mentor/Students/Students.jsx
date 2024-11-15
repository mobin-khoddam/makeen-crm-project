import OriginalTemplatePage from "../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import MentorPanelStudentsBar from "../../../Container/Menthor/Students/MentorPanelStudentsBar.jsx";
import {useEffect, useState} from "react";
import CourseFilter from "../../../Container/Menthor/Students/CourseFilter.jsx";
import AboutCourse from "../../../Container/Menthor/Students/AboutCourse.jsx";
import StudentsList from "../../../Container/Menthor/Students/StudentsList/StudentsList.jsx";
import SeeWorkReport from "../../../Container/Menthor/Students/SeeWorkReport/SeeWorkReport.jsx";
import ReportCard from "../../../Container/Menthor/Students/ReportCard/ReportCard.jsx";
import TechnicalScore from "../../../Container/Menthor/Students/TechnicalScore/TechnicalScore.jsx";

const Students = () => {
    const [studentPage, setStudentPage] = useState({first: true, second: false, third: false, fourth: false});
    const [page, setPage] = useState('first');
    const [arrowFlag, setArrowFlag] = useState(false)
    const [showCategories, setShowCategories] = useState(false)
    const closeFilterHandler = () => {
        arrowFlag && setArrowFlag(false)
        showCategories && setShowCategories(false)
    }

    const tables = {
        first: <StudentsList /> ,
        second: <SeeWorkReport showCategories={showCategories} setShowCategories={setShowCategories} /> ,
        third: <ReportCard />,
        fourth: <TechnicalScore />,
    }
    useEffect(() => {
        let student
        for (const key in studentPage){
            if (studentPage[key]){
                student = key ;
                setPage(student)
            }
        }
    }, [studentPage])
    return (
        <div onClick={closeFilterHandler}>
            <OriginalTemplatePage>
                <CourseFilter arrowFlag={arrowFlag} setArrowFlag={setArrowFlag}/>
                <AboutCourse/>
                <MentorPanelStudentsBar studentPage={studentPage} setStudentPage={setStudentPage}/>
                {
                    tables[page]
                }
            </OriginalTemplatePage>
        </div>
    )
}

export default Students;