export const CategoriesFilterList = [
    "تایید شده",
    "رد شده",
    "بررسی نشده",
    "نمایش همه",
];

import greenIcon from '/src/assets/images/Students/Dashboard/ReportTime/trend-up.svg'
import redIcon from '/src/assets/images/Students/Dashboard/ReportTime/trend-down.svg'
import blueIcon from '/src/assets/images/Students/Dashboard/ReportTime/cup.svg'

export const ReportTimeCardList = [
    {
        id: 1,
        thirdNumber: true,
        icon: blueIcon,
        timeNumberAndTitleColor: "text-[#4318FF]",
        title: "باقی مانده تا موفقیت",
        titleBackgroundColor: "bg-[#ECE8FF]"
    },
    {
        id: 2,
        thirdNumber: false,
        icon: redIcon,
        timeNumberAndTitleColor: "text-[#FD151B]",
        title: "کسر ساعت ماهانه",
        titleBackgroundColor: "bg-[#FFE8E8]"
    },
    {
        id: 3,
        thirdNumber: false,
        icon: greenIcon,
        timeNumberAndTitleColor: "text-[#09814A]",
        title: "بیشترین ساعت گزارش شده",
        titleBackgroundColor: "bg-[#F1FFE8]"
    },
]

export const tableListItem = {
    tableBody: [
        {id: 1, one: 87, two: '1403/4/23', three: '8', four: 'بررسی نشده'},
        {id: 2, one: 86, two: '1403/4/23', three: '7', four: 'رد شده'},
        {id: 3, one: 86, two: '1403/4/23', three: '7', four: 'تایید شده'},
        {id: 4, one: 87, two: '1403/4/23', three: '8', four: 'بررسی نشده'},
        {id: 5, one: 86, two: '1403/4/23', three: '7', four: 'رد شده'},
        {id: 6, one: 85, two: '1403/4/23', three: '6', four: 'تایید شده'},
    ],
    tableHead: [
        {id: 1, title: 'عملیات'},
        {id: 2, title: 'وضعیت گزارش'},
        {id: 3, title: 'زمان گزارش'},
        {id: 4, title: 'تاریخ'},
        {id: 5, title: 'شماره گزارش'},
    ]
}


export const MonthReportCardList = [
    {id: 1, month: 'ماه اول', bgColor: 'primary-blue', textColor: 'white', border: 'primary-blue'},
    {id: 2, month: 'ماه دوم', bgColor: 'primary-gray', textColor: 'primary-gray-100', border: 'primary-gray-100'},
    {id: 3, month: 'ماه سوم', bgColor: 'primary-gray', textColor: 'primary-gray-100', border: 'primary-gray-100'},
    {id: 4, month: 'ماه چهارم', bgColor: 'primary-gray', textColor: 'primary-gray-100', border: 'primary-gray-100'},
    {id: 5, month: 'ماه پنجم', bgColor: 'primary-gray', textColor: 'primary-gray-100', border: 'primary-gray-100'},
    {id: 6, month: 'ماه ششم', bgColor: 'primary-gray', textColor: 'primary-gray-100', border: 'primary-gray-100'},
]

export const WorkCardStatusList = [
    {id: 1, textTop: 'بیشترین', textButton: 'ساعــت', hasTime: true, textStatus: '10'},
    {id: 2, textTop: 'کمتریـن', textButton: 'ساعــت', hasTime: true, textStatus: '2'},
    {id: 3, textTop: 'ساعــت', textButton: 'مورد انتظار', hasTime: true, textStatus: '80'},
    {id: 4, textTop: 'مجموع ', textButton: 'گزارش', hasTime: true, textStatus: '25'},
    {id: 5, textTop: 'کسر ', textButton: 'ساعت کاری', hasTime: true, textStatus: '12'},
    {id: 6, textTop: 'میانگین ', textButton: 'مطالعه', hasTime: true, textStatus: '67'},
    {id: 7, textTop: 'رتبه کلاسی ', textButton: 'در ساعت کاری', hasTime: false, textStatus: '7'},
    {id: 8, textTop: 'نمـره', textButton: 'فنـی', hasTime: false, textStatus: '10/8'},
    {id: 9, textTop: 'حضور', textButton: 'غیاب', hasTime: false, textStatus: '10/9'},
    {id: 10, textTop: 'گزارش ', textButton: 'دهــی', hasTime: false, textStatus: '10/7'},
    {id: 11, textTop: 'انطباق پذیری', textButton: 'سیستمی', hasTime: false, textStatus: '10/8'},

]

export const MessageReportCardList = [
    {
        id: 1,
        pointOfView: 'دیدگاه استاد',
        message: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با اسد '
    },
    {
        id: 2,
        pointOfView: 'دیدگاه ادمین',
        message: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه '
    }
]


import editIcon from '/src/assets/images/Students/WorkReports/edit-2.svg'
import messageIcon from '/src/assets/images/Students/WorkReports/message-text.svg'
import taskIcon from '/src/assets/images/Students/WorkReports/task.svg'

export const WorkReportBarList = [
    {id: 1, icon: editIcon, text: 'ثبت گزارش کار', pageRender: 'AddWorkReportPage'},
    {id: 2, icon: messageIcon, text: 'مشاهده گزارش کارها', pageRender: 'SeeWorkReportListPage'},
    {id: 3, icon: taskIcon, text: 'کارنامه', pageRender: 'ReportCardPage'},
]

import timerIcon from '../../assets/images/Students/LeaveRequest/timer.svg'
import coffeeIcon from '../../assets/images/Students/LeaveRequest/coffee.svg'
import coffeeIcon2 from '../../assets/images/Students/LeaveRequest/coffee2.svg'

export const LeaveRequestList = [
    {
        id: 1,
        thirdNumber: false,
        icon: timerIcon,
        timeNumberAndTitleColor: "text-[#F21414]",
        title: "میزان تاخیر های روزانه",
        titleBackgroundColor: "bg-[#FFE5E5]"
    },
    {
        id: 2,
        thirdNumber: false,
        icon: coffeeIcon,
        timeNumberAndTitleColor: "text-[#0FC5FF]",
        title: "مرخصی باقی مانده",
        titleBackgroundColor: "bg-[#E8F9FF]"
    },
    {
        id: 3,
        thirdNumber: false,
        icon: coffeeIcon2,
        timeNumberAndTitleColor: "text-[#50D300]",
        title: "مرخصی استفاده شده",
        titleBackgroundColor: "bg-[#EDFFE8]"
    },
]


export const LeaveRequestTableList = {
    tableHead: [
        {id: 1, title: 'شماره قسط'},
        {id: 2, title: 'تاریخ مرخصی'},
        {id: 3, title: 'میزان ساعت مرخصی'},
        {id: 4, title: 'وضعیت'},
        {id: 5, title: 'عملیات'}
    ],
    tableBody: [
        {id: 1, one: 1, two: '1403/4/23', three: 2, four: 'تایید شده'},
        {id: 2, one: 1, two: '1403/4/23', three: 3, four: 'در حال بررسی'},
        {id: 3, one: 1, two: '1403/4/23', three: 2, four: 'مشروط'},
        {id: 4, one: 1, two: '1403/4/23', three: 6, four: 'رد شده'},
        {id: 5, one: 1, two: '1403/4/23', three: 8, four: 'تایید شده'}
    ]
}