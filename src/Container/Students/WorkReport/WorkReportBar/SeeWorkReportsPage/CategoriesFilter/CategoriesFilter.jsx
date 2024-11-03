import arrowIcon from '/src/assets/images/Students/WorkReports/chevron-up.svg'
import {useState} from "react";
import CategoriesList from "./CategoriesList.jsx";

const CategoriesFilter = ({setShowCategories, showCategories, setShowDateDrawer}) => {
    const [filter, setFilter] = useState('وضعیت')
    const showDrawerHandler = () => {
        setShowCategories(!showCategories)
        setShowDateDrawer(false)
    }
    return (
        <div className="relative ">
            <div onClick={showDrawerHandler}
                 className="px-4 py-[14px] bg-white rounded-xl flex items-center gap-2">
                <span>{filter}</span>
                <img className={`duration-300 ${showCategories ? 'rotate-180' : 'rotate-0'}`} src={`${arrowIcon}`} alt=""/>
            </div>
            <div className={`duration-300 absolute ${showCategories ? 'block' : 'hidden'}`}>
                <CategoriesList setFilter={setFilter} setShowCategories={setShowCategories}/>
            </div>
        </div>
    )
}

export default CategoriesFilter