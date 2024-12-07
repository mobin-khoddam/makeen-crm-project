import { useState} from "react";
import AddButton from "../../AddButton.jsx";
import {v4 as uuidv4} from "uuid";
import NewCourseTime from "./NewCourseTime.jsx";
import EditCourseTime from "./EditCourseTime.jsx";


const AddTimeModal = ({text, data, modalRef, errors, register, onClick, watch, editId, clearEditId}) => {
    const [id, setId] = useState();

    const openModal = () => {
        setId(uuidv4());
        modalRef.current?.showModal()
    }

    const clearIdHandler = () => {
        modalRef.current?.close()
        setId('')
        clearEditId()
    }

    const addCourseTime = () => {
        if (watch()[`courseTime${id}`] && watch()[`endHour${id}`] && watch()[`endMinute${id}`] && watch()[`startHour${id}`] && watch()[`startMinute${id}`]) {
            onClick(id)
        }
        clearIdHandler()
    }

    const escapeClearIdHandler = (e) => {
        console.log(e.code)
        if (e.code === "Escape"){
            clearIdHandler()
        }
    }


    return (
        <div onKeyDown={(e)=>escapeClearIdHandler(e)}>
            <button onClick={openModal}>{data || <AddButton text={text}/>}</button>
            <dialog ref={modalRef} className="modal">
                {
                    id && <NewCourseTime id={id} addCourseTime={addCourseTime} errors={errors} register={register} modalRef={modalRef} clearIdHandler={clearIdHandler} />
                }
                {
                    editId && <EditCourseTime editId={editId} addCourseTime={addCourseTime} errors={errors} register={register} modalRef={modalRef} watch={watch} clearIdHandler={clearIdHandler} />
                }
            </dialog>
        </div>
    )
}
export default AddTimeModal
