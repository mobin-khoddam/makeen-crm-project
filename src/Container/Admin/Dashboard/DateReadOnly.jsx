import {Calendar} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/colors/purple.css";

const DateReadOnly = () => {
    return (
        <Calendar
            calendar={persian}
            locale={persian_fa}
            showOtherDays
            readOnly
            value={new Date()}
            className="custom"
        />
    );
};

export default DateReadOnly;
