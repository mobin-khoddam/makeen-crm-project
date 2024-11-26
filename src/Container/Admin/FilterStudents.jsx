import Select from "../../Componants/Select.jsx";
import DatePicker from "../../Componants/Datepicker/DatePicker.jsx";

const FilterStudents = ({date}) => {

    const data = {
        title: 'نام اصلی دوره',
        options: [
            {id: 1, option: 'فرانت اند'},
            {id: 2, option: 'بک اند'},
        ]
    }
    const data2 = {
        title: 'نام فرعی دوره',
        options: [
            {id: 1, option: 'react'},
            {id: 2, option: 'python'},
        ]
    }
    const data3 = {
        title: 'شماره دوره',
        options: [
            {id: 1, option: 17},
            {id: 2, option: 16},
        ]
    }

    return (
      <div
          className={`grid items-center ${date ? 'grid-cols-4' : 'grid-cols-3'} max-xl:grid-cols-2 max-sm:grid-cols-1 max-xl:mx-auto w-fit gap-8`}>
          <Select data={data}/>
          <Select data={data2}/>
          <Select data={data3}/>
          {date && <div className='max-w-[320px]'><DatePicker/></div>}
      </div>
    )
}
export default FilterStudents;