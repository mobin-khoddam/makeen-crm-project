import addIcon from '/src/assets/images/Students/WorkReports/add.svg'
import removeIcon from '/src/assets/images/Students/WorkReports/minus.svg'
import buttonCustom from "/src/assets/images/Students/WorkReports/buttonCustom.svg"
import {useForm} from "react-hook-form";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';



const WorkReportField = () => {
    const [reportForm, setReportForm] = useState([
        {id: uuidv4()}
    ])
    const {register, handleSubmit, formState: {errors}} = useForm()
    const regexNumber = /^[0-9]+$/
    const timeNumberHandler = (e) => {
        if (e.key === 'Tab' || e.key === 'Backspace' || e.key === 'Delete' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            return
        }
        if (!regexNumber.test(e.key)) {
            e.preventDefault()
        }
    }
    const addNewReport = () => {
        setReportForm([...reportForm, {id: uuidv4()}])
    }
    const removeReport = (id) => {
        setReportForm((item)=> {
            return item.filter((field)=> id !== field.id)
        })
    }
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="min-h-[510px] flex flex-col justify-between gap-52" >
            <div className="flex flex-col gap-6">
                {
                    reportForm.map((item, index) => (
                        <div onClick={()=> console.log(item.id)} key={item.id}
                             className="flex gap-2 items-center placeholder:text-primary-gray-100">
                            <input {...register(`minute${item.id}`, {required: 'this fieldIs required'})}
                                   onKeyDown={timeNumberHandler} placeholder="دقیقه" maxLength={2} type="text"
                                   className="w-[60px] h-[50px] text-xs border border-primary-gray-100 rounded-md outline-none text-center"/>
                            <span>:</span>
                            <input {...register(`hour${item.id}`, {required: 'this fieldIs required'})}
                                   onKeyDown={timeNumberHandler} placeholder="ساعت" maxLength={2} type="text"
                                   className="w-[60px] h-[50px] text-xs border border-primary-gray-100 rounded-md outline-none text-center"/>
                            <input {...register(`text${item.id}`, {required: 'this fieldIs required'})}
                                   placeholder="توضیحات خود را یاداشت کنید" type="text"
                                   className="w-full h-[50px] text-sm border border-primary-gray-100 rounded-md outline-none mx-2 pr-4"/>
                            {
                                index + 1 === reportForm.length ? (
                                        <button type="button" onClick={addNewReport}
                                                className="min-w-[60px] min-h-[50px] border border-primary-blue rounded-md flex justify-center items-center">
                                            <img src={`${addIcon}`} alt=""/>
                                        </button>
                                    ) :
                                    (
                                        <button type="button" onClick={() => removeReport(item.id)}
                                                className="min-w-[60px] min-h-[50px] border border-primary-red rounded-md flex justify-center items-center">
                                            <img src={`${removeIcon}`} alt=""/>
                                        </button>

                                    )
                            }
                        </div>
                    ))
                }

            </div>
            <div className="flex items-center justify-between">
                <div className="w-[164px] h-[53px]">
                    <img src={`${buttonCustom}`} alt=""/>
                </div>
                <button className="text-white bg-primary-blue flex items-center gap-1 px-5 py-3 rounded-lg">
                    <span>ثبت گزارش کار</span>
                </button>
            </div>
        </form>
    )
}

export default WorkReportField