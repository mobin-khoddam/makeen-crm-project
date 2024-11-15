import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const MonthPicker = () => {
  return(
      <DatePicker
          calendar={persian}
          placeholder='ماه'
          locale={persian_fa}
          onlyMonthPicker
          format="MMMM YYYY"
      />
  )
}
export default MonthPicker;