import  {useState} from "react";
import {Calendar} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import dateIcon from '/src/assets/images/Students/WorkReports/calendar4-range.svg'

const FilterDatePicker = ({setShowDateDrawer, showDateDrawer, setShowCategories}) => {
    const [selectedDates, setSelectedDates] = useState();
    const showDrawerHandler = () => {
        setShowDateDrawer(!showDateDrawer)
        setShowCategories(false);
    }
    return (
        <div className="relative">
            <div className="w-[360px] bg-white flex justify-between items-center px-4 py-[14px] rounded-2xl max-[420px]:w-[250px]"
                 onClick={showDrawerHandler}>
                <p className="w-fit text-primary-gray-100 outline-none">انتخاب تاریخ</p>
                <img src={`${dateIcon}`} alt=""/>
            </div>
            <div className={`absolute border bg-white rounded-xl mt-4 w-full ${showDateDrawer ? 'block' : 'hidden'}`}>
                <Calendar
                    calendar={persian}
                    locale={persian_fa}
                    shadow={false}
                    value={selectedDates}
                    onChange={setSelectedDates}
                    format="YYYY/MM/DD"
                />
                <div className=" p-10 flex items-center gap-[30px] max-[420px]:flex-col">
                    <div
                        className="flex items-center gap-[10px] [&_button]:w-[67px] [&_button]:h-[38px] [&_button]:flex  [&_button]:items-center [&_button]:justify-center [&_button]:rounded-lg">
                        <button className="bg-primary-blue text-white">
                            تایید
                        </button>
                        <button className="border">
                            لغو
                        </button>
                    </div>
                    <span className="text-primary-gray-100">{selectedDates?.format('YYYY/MM/DD')}</span>
                </div>
            </div>
        </div>
    );
};

export default FilterDatePicker;
