import OriginalTemplatePage from "../../../Componants/OriginalTemplate/OriginalTemplatePage.jsx";
import StudentsTabBar from "../../../Container/Admin/Students/StudentsTabBar.jsx";
import CustomButton from "../../../Container/Students/CustomButton.jsx";
import SearchInput from "../../../Container/Admin/SearchInput.jsx";
import FilterStudents from "../../../Container/Admin/FilterStudents.jsx";
import MembersSectionField from "../../../Container/Admin/Students/MembersSection/MembersSectionField.jsx";

const studentsPage = () => {
    return (
        <OriginalTemplatePage>
            <div className='flex justify-between mb-8 mt-6 gap-10 max-sm:flex-col'>
                <CustomButton text='افزودن دانشجو'/>
                <SearchInput placholder='جستجوی نام دانشجو/شماره گزارش'/>
            </div>
            <StudentsTabBar/>
            <div className='flex items-center gap-7 my-10 max-sm:flex-col'>
                <span>نمایش بر اساس :</span>
                <FilterStudents/>
            </div>
            <MembersSectionField />
        </OriginalTemplatePage>
    )
}
export default studentsPage