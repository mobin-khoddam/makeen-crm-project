import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import dateIcon from '../../assets/images/Students/WorkReports/calendar4-range.svg'

const FilterDatePicker = ({date, setDate}) => {
    return (
        <div className="relative flex items-center">
            <DatePicker
                className='custom-calender'
                placeholder="انتخاب تاریخ"
                calendar={persian}
                locale={persian_fa}
                format="YYYY/MM/DD"
                value={date}
                onChange={setDate}
                showOtherDays
            />
            <img className="absolute left-6" src={dateIcon} alt="" />
        </div>
    );
};

export default FilterDatePicker;