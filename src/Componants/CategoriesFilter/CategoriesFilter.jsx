import arrowIcon from '/src/assets/images/Students/WorkReports/chevron-up.svg'
import { useState } from "react";
import CategoriesList from "./CategoriesList.jsx";

const CategoriesFilter = ({ setShowCategories, showCategories, className, title, data }) => {
    const [filter, setFilter] = useState(title || 'وضعیت')
    const showDrawerHandler = () => {
        setTimeout(() => setShowCategories(!showCategories), 100);
    }
    return (
        <div className={`relative cursor-pointer`}>
            <div onClick={showDrawerHandler}
                className={`px-4 py-[14px] bg-white rounded-xl flex items-center gap-2  ${className}`}>
                <span>{filter}</span>
                <img className={`duration-300 ${showCategories ? 'rotate-180' : 'rotate-0'}`} src={`${arrowIcon}`} alt="" />
            </div>
            <div className={`duration-300 absolute ${showCategories ? 'block' : 'hidden'}`}>
                <CategoriesList setFilter={setFilter} setShowCategories={setShowCategories} data={data} />
            </div>
        </div>
    )
}

export default CategoriesFilter