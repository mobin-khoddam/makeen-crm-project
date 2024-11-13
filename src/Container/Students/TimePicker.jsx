import DatePicker from "react-multi-date-picker";
import TimePickerPlugin from "react-multi-date-picker/plugins/time_picker";
import clockIcon from "../../assets/images/Students/LeaveRequest/clock.svg"

const TimePicker = ({placeholder, time, setTime}) => {
    return (
        <div className="w-full h-[51px] relative flex items-center shadow-[0px_1px_2px_3px_#0000000D] rounded-xl">
            <DatePicker
                placeholder={placeholder}
                format="HH:mm"
                value={time}
                onChange={setTime}
                plugins={[<TimePickerPlugin hideSeconds />]}
                disableDayPicker
            />
            <img className="w-4 h-4 absolute left-0 ml-4" src={clockIcon} alt="" />
        </div>
    );
};

export default TimePicker;
