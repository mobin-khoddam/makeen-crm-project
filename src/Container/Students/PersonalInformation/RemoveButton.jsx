import minusIcon from "../../../assets/images/Students/PersonalInformation/minus.svg";

const RemoveButton = () => {
  return (
      <div className="flex items-center gap-1">
        <img src={minusIcon} alt=""/>
        <span className="text-primary-red">حذف</span>
      </div>
  )
}
export default RemoveButton