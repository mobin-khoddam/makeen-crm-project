import GreenBtn from "../../../../Componants/GreenBtn.jsx";
import Pagination from "../../../../Componants/Pagination/Pagination.jsx";
import {Link} from "react-router-dom";

const LeaveRecordsTable = ({tableHead, tableBody, link}) => {

    const head = Object.keys(tableHead[0])
    const body = Object.keys(tableBody[0])

    const showObject = (column, row) => (
        <td key={`${row.id}-${column}-object`}>
            {Object.keys(row[column]).map((key) => (
                <span className='mx-auto block w-fit' key={`${column}-${key}`}>
                    {row[column][key]}{" "}
                </span>
            ))}
        </td>
    )

    const showRangeBtn = (column, row) => (
        <td key={`${row.id}-${column}-range`}>
            <GreenBtn className='mx-auto block rounded-md' tooltip={false} maxNum={row[column]['max']}
                      minNum={row[column]['min']} color='[#A3AED0]'/>
        </td>
    )

    const studentsInformation = (column, row) => {
        let color
        switch (row[column]){
            case 'دانشجو':
                color = 'text-[#FF00B8]'
                break;
            case 'فارغ التحصیل':
                color = 'text-[#A3AED0]'
                break;
            case 'استخدام':
                color = 'text-[#09814A]'
                break;
            case 'تایید شده':
                color = 'text-[#09814A]'
                break;
            case 'رد شده':
                color = 'text-[#FD151B]'
                break;
            case 'در حال بررسی':
                color = 'text-[#A3AED0]'
                break;
            case 'مشروط':
            color = 'text-[#FACA15]'
                break;
            case 'پرداخت شده':
                color = 'text-[#09814A]'
                break;
            case 'پرداخت قسط ':
                color = 'text-[#A3AED0]'
                break;
                default: color = 'text-black'
        }
        return (
            <td key={`${row.id}-${column}-student-status`} className={color}>
                <span className='mx-auto block w-fit'>{row[column]}</span>
            </td>
        )
    }

    const studentsInformationLink = (column, row) => (
        <td>
            <Link className='text-primary-blue bg-[#F7F5FF] mx-auto block w-fit p-2 rounded-xl' to={`${link}${row.id}`} >{row[column]}</Link>
        </td>
    )

    const showNormalValue = (column, row) => (
        <td className='last:text-primary-blue [&>span]:last:bg-[#F7F5FF] [&>span]:last:cursor-pointer' key={`${row.id}-${column}-normalValue`}>
            <span className='mx-auto block w-fit p-2 rounded-xl'>{row[column]}</span>
        </td>
    )


    return (
        <div className='flex flex-col gap-10'>
            <div className="overflow-x-auto">
                <table className="table bg-white max-sm:table-xs">
                    <thead>
                    <tr>
                        {
                            tableHead.map(row => {
                                return (
                                    <td className='sm:text-base bg-[#F9FAFB] first:rounded-tr-box last:rounded-tl-box p-5' key={row.id}>
                                        {
                                            head.map((column) => {
                                                if (column === 'id') return null
                                                return <span className='mx-auto block w-fit'
                                                             key={`${row.id}-${column}`}>{row[column]}</span>
                                            })
                                        }
                                    </td>
                                )
                            })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        tableBody.map(row => (
                            <tr key={row.id}>
                                {body.map(column => {
                                    if (column === 'id') return null
                                    if (typeof row[column] === 'object' && column !== 'range') {
                                        return showObject(column, row)
                                    }
                                    if (column === 'range') {
                                        return showRangeBtn(column, row)
                                    }
                                    if (column === 'status') {
                                        return studentsInformation(column, row)
                                    }
                                    if (column === 'information') {
                                        return studentsInformationLink(column, row)
                                    }
                                    return (
                                        showNormalValue(column, row)
                                    )
                                })}
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <Pagination/>
        </div>
    )
}
export default LeaveRecordsTable