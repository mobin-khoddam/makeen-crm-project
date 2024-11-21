import { useState } from "react"
import CategoriesFilter from "../../../Componants/CategoriesFilter/CategoriesFilter"
import OriginalTemplatePage from "../../../Componants/OriginalTemplate/OriginalTemplatePage"
import FilterDatePicker from "../../../Componants/DatePicker"

const LateRecords = () => {
    const [state, setState] = useState(false)
    return (
        <div onClick={() => state && setState(false)}>
            <OriginalTemplatePage>
            <div className="h-96  gap-8">
                <CategoriesFilter title='نام اصلی دوره' className='text-primary-blue' setShowCategories={setState} showCategories={state}  />
                <CategoriesFilter title='نام فرعی دوره' className='text-primary-blue' setShowCategories={setState} showCategories={state}  />
                <CategoriesFilter title='شماره دوره' className='text-primary-blue' setShowCategories={setState} showCategories={state}  />
                <FilterDatePicker />
                </div>
        </OriginalTemplatePage>
        </div>
    )
}

export default LateRecords