import TableList from "../../../../Componants/TableList.jsx";
import {mentorPageStudentsTechnicalScore} from "../../../../helper/ProjectData/Data.jsx";
import TechnicScoreModal from "./TechnicScoreModal.jsx";
import {useRef} from "react";

const TechnicalScore = () => {
    const modalRef = useRef(null);

    return (
        <div>
            <TableList head={mentorPageStudentsTechnicalScore.tableHead}
                       body={mentorPageStudentsTechnicalScore.tableBody}
                       modalRef={modalRef} />
            <TechnicScoreModal modalRef={modalRef} />
        </div>
    )
}
export default TechnicalScore