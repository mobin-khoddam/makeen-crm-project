import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import dateIcon from '../../assets/images/Students/WorkReports/calendar4-range.svg'

const FilterDatePicker = ({date, setDate, placeholder = 'انتخاب تاریخ'}) => {
    return (
        <div className='relative'>
            <div className="relative flex items-center h-[55px]">
                <DatePicker
                    className='custom-calender'
                    placeholder={placeholder}
                    calendar={persian}
                    locale={persian_fa}
                    format="YYYY/MM/DD"
                    value={date}
                    onChange={setDate}
                    showOtherDays
                    calendarPosition='bottom'
                    fixMainPosition={true}
                />
                <img className="absolute left-6" src={dateIcon} alt=""/>
            </div>
            <span className={`text-xs absolute -top-3 right-3 bg-white ${date ? 'block' : 'hidden'}`}>{placeholder}</span>
        </div>
    );
};

export default FilterDatePicker;