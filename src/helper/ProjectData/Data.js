export const CategoriesFilterList = [
  "تایید شده",
  "رد شده",
  "بررسی نشده",
  "نمایش همه",
];

export const SeeTableReportList = [
    {id: 1,reportNumber: 87, date: '1403/4/23', reportTime: '8', reportStatus: 'بررسی نشده'},
    {id: 2,reportNumber: 86, date: '1403/4/23', reportTime: '7', reportStatus: 'رد شده' },
    {id: 3,reportNumber: 86, date: '1403/4/23', reportTime: '7', reportStatus: 'تایید شده' },
    {id: 4,reportNumber: 87, date: '1403/4/23', reportTime: '8', reportStatus: 'بررسی نشده'},
    {id: 5,reportNumber: 86, date: '1403/4/23', reportTime: '7', reportStatus: 'رد شده' },
    {id: 6,reportNumber: 85, date: '1403/4/23', reportTime: '6', reportStatus: 'تایید شده'},
]

export const MonthReportCardList = [
    {id: 1, month: 'ماه اول', bgColor: 'primary-blue', textColor: 'white', border: 'primary-blue'},
    {id: 2, month: 'ماه دوم', bgColor: 'primary-gray', textColor: 'primary-gray-100', border: 'primary-gray-100'},
    {id: 3, month: 'ماه سوم', bgColor: 'primary-gray', textColor: 'primary-gray-100', border: 'primary-gray-100'},
    {id: 4, month: 'ماه چهارم', bgColor: 'primary-gray', textColor: 'primary-gray-100', border: 'primary-gray-100'},
    {id: 5, month: 'ماه پنجم', bgColor: 'primary-gray', textColor: 'primary-gray-100', border: 'primary-gray-100'},
    {id: 6, month: 'ماه ششم', bgColor: 'primary-gray', textColor: 'primary-gray-100', border: 'primary-gray-100'},
]

export const WorkCardStatusList = [
    {id:1, textTop: 'بیشترین', textButton: 'ساعــت', hasTime: true, textStatus: '10'},
    {id:2, textTop: 'کمتریـن', textButton: 'ساعــت', hasTime: true, textStatus: '2'},
    {id:3, textTop: 'ساعــت', textButton: 'مورد انتظار', hasTime: true, textStatus: '80'},
    {id:4, textTop: 'مجموع ', textButton: 'گزارش', hasTime: true, textStatus: '25'},
    {id:5, textTop: 'کسر ', textButton: 'ساعت کاری', hasTime: true, textStatus: '12'},
    {id:6, textTop: 'میانگین ', textButton: 'مطالعه', hasTime: true, textStatus: '67'},
    {id:7, textTop: 'رتبه کلاسی ', textButton: 'در ساعت کاری', hasTime: false, textStatus: '7'},
    {id:8, textTop: 'نمـره', textButton: 'فنـی', hasTime: false, textStatus: '10/8'},
    {id:9, textTop: 'حضور', textButton: 'غیاب', hasTime: false, textStatus: '10/9'},
    {id:10, textTop: 'گزارش ', textButton: 'دهــی', hasTime: false, textStatus: '10/7'},
    {id:11, textTop: 'انطباق پذیری', textButton: 'سیستمی', hasTime: false, textStatus: '10/8'},

]

export const MessageReportCardList = [
    {id: 1, pointOfView: 'دیدگاه استاد', message: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با اسد '},
    {id:2, pointOfView: 'دیدگاه ادمین', message: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه '}
]


import editIcon from '/src/assets/images/Students/WorkReports/edit-2.svg'
import messageIcon from '/src/assets/images/Students/WorkReports/message-text.svg'
import taskIcon from '/src/assets/images/Students/WorkReports/task.svg'

export const WorkReportBarList = [
    { id: 1, icon: editIcon, text: 'ثبت گزارش کار', pageRender: 'AddWorkReportPage' },
    { id: 2, icon: messageIcon, text: 'مشاهده گزارش کارها', pageRender: 'SeeWorkReportListPage' },
    { id: 3, icon: taskIcon, text: 'کارنامه', pageRender: 'ReportCardPage' },
]