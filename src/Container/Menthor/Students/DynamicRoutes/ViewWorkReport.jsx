import ReportCartStats from "../../../../Componants/ReportCartStats/ReportCartStats.jsx";
import ReportCardChart from "../../../../Componants/ReportCartChart.jsx";
import CustomButton from "../../../Students/CustomButton.jsx";
import Pagination from "../../../../Componants/Pagination/Pagination.jsx";

const ViewWorkReport = () => {
    const reportNumber = [
        {id: 1, title: 'کارنامه شماره 1'},
        {id: 2, title: 'کارنامه شماره 2'},
        {id: 3, title: 'کارنامه شماره 3'},
    ]
    return (
        <div className='my-12'>
            {
                reportNumber.map((item) => (
                    <>
                        <span className='font-semibold mb-4 block'>{item.title}</span>
                        <div className='mb-20 bg-white rounded-xl'>
                            <div className='mb-12'>
                                <ReportCartStats/>
                                <ReportCardChart/>
                            </div>
                            <div className='flex flex-col gap-6 w-4/5 mx-auto pb-20 '>
                                <label htmlFor='mentorPointView' className='font-semibold'>دیدگاه استاد نسبت به عملکرد
                                    دانشجو</label>
                                <textarea
                                    className='outline-none border border-primary-gray-100 rounded-xl p-6 min-h-[100px] max-h-[200px]'
                                    placeholder='متن خود را بنویسید ...' id='mentorPointView'></textarea>
                                <CustomButton text='ثبت' className='px-10'/>
                            </div>
                        </div>
                    </>
                ))
            }
            <Pagination/>
        </div>
    )
}
export default ViewWorkReport