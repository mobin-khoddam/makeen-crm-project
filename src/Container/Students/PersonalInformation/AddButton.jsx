import plusIcon from "../../../assets/images/Students/PersonalInformation/add.svg";

const AddButton = () => {
    return (
        <div className="flex items-center gap-1">
            <img src={plusIcon} alt=""/>
            <span className="text-primary-blue">افزودن</span>
        </div>
    )
}
export default AddButton