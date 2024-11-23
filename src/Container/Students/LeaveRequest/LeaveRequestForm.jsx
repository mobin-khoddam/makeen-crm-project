import cakeIcon from '../../../assets/images/Students/LeaveRequest/cake.svg'
import FilterDatePicker from '../../../Componants/Datepicker/DatePicker.jsx'
import TimePicker from "../TimePicker.jsx";
import {useForm} from "react-hook-form";
import CustomButton from "../CustomButton.jsx";
import {useState} from "react";

const LeaveRequestForm = () => {
    const [fromHour, SetFromHour] = useState('')
    const [tomHour, SetToHour] = useState('')
    const [date, setDate] = useState('YYYY/MM/DD')
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
        console.log(`${fromHour.hour + ':' + fromHour.minute}`)
        console.log(`${tomHour.hour + ':' + tomHour.minute}`)
        console.log(date.toString())
    }

    return (
        <div className='bg-white w-3/6 p-6 rounded-2xl flex flex-col gap-6 max-[1300px]:w-full'>
            <div className='flex items-center gap-2 '>
                <img className='w-6 h-6' src={cakeIcon} alt=""/>
                <span>درخواست مرخصی</span>
            </div>
            <div className='flex items-center justify-between'>
                <span>تاریخ مرخصی</span>
                <div className="rounded-xl shadow-[0px_1px_2px_3px_#0000000D] w-[336px]">
                    <FilterDatePicker date={date} setDate={setDate}/>
                </div>
            </div>
            <div className="flex items-center justify-between max-[530px]:flex-col gap-6">
                <span>بازه ساعتی</span>
                <div className="w-[336px] max-[400px]:w-full flex items-center gap-6 max-[530px]:flex-col">
                    <TimePicker time={fromHour} setTime={SetFromHour} placeholder="از"/>
                    <TimePicker time={tomHour} setTime={SetToHour} placeholder="تا"/>
                </div>
            </div>
            <form className="mt-6 flex flex-col gap-6 items-center text-sm" onSubmit={handleSubmit(onSubmit)}>
                <input {...register('title', {required: 'پر کردن این فیلد اجباری است'})} placeholder="عنوان درخواست"
                       className="bg-primary-gray border-[#D1D5DB] border w-full rounded-xl p-5 h-[55px] outline-none"
                       type="text"/>
                <textarea {...register('explanation', {required: 'پر کردن این فیلد اجباری است'})}
                          placeholder="توضیح خود را بنویسید ..."
                          className="bg-primary-gray border-[#D1D5DB] border w-full rounded-xl h-[256px] min-h-[55px] max-h-[456px] p-5 outline-none"/>
                <CustomButton text="ارسال درخواست"/>
            </form>
        </div>
    )
}

export default LeaveRequestForm