import arrowLeftGray from "../../../../assets/images/GeneralImages/arrow-left-gray.svg";

const SeeAllBtn = () => {
    return (
        <button className="border border-[#1F2A37] px-4 py-[10px] rounded-lg flex items-center gap-2">
            <span>مشاهده همه</span>
            <img src={`${arrowLeftGray}`} alt=''/>
        </button>
    )
}

export default SeeAllBtn;