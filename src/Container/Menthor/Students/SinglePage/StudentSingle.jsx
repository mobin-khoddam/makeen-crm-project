import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import StudentProfile from "./StudentProfile";
import SinglePageRow from "./SinglePageRow";
import ReportCard from "../DynamicRoutes/ReportCard.jsx";
import TechnicalScore from "../DynamicRoutes/TechnicalScore.jsx";
import ViewWorkReport from "../DynamicRoutes/ViewWorkReport.jsx";

const StudentSingle = () => {
    const location = useLocation();
    const [page, setPage] = useState(null);
    const [state, setState] = useState({
        first: true,
        second: false,
        third: false,
    });
    const showPage = {
        first: <ReportCard />,
        second: <ViewWorkReport />,
        third: <TechnicalScore />,
    }
    useEffect(() => {
        for (const key in state ) {
            if (state[key]){
                setPage(key)
            }
        }
    }, [state])
    return (
        <>
            <StudentProfile profile={location.state}/>
            <SinglePageRow state={state} setState={setState}/>
            {
                showPage[page]
            }
        </>
    );
};

export default StudentSingle;
