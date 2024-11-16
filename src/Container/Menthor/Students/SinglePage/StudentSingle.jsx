import React from "react";
import { useLocation } from "react-router-dom";
import StudentProfile from "./StudentProfile";
import SinglePageRow from "./SinglePageRow";

const StudentSingle = () => {
  const location = useLocation();

  return (
    <>
      <StudentProfile profile={location.state} />
      <SinglePageRow />
    </>
  );
};

export default StudentSingle;
