import HomeSvg from '/src/assets/images/Sidebar/home.svg?react'
import SmsSvg from '/src/assets/images/Sidebar/sms.svg?react'
import JudgeSvg from '/src/assets/images/Sidebar/judge.svg?react'
import NoteSvg from '/src/assets/images/Sidebar/note.svg?react'
import CakeSvg from '/src/assets/images/Sidebar/cake.svg?react'
import ProfileSvg from '/src/assets/images/Sidebar/profile.svg?react'
import CardSvg from '/src/assets/images/Sidebar/card-send.svg?react'
import PeoplesSvg from '/src/assets/images/Sidebar/people.svg?react'
import UserSvg from '/src/assets/images/Sidebar/user-octagon.svg?react'
import CodeCircleSvg from '/src/assets/images/Sidebar/code-circle.svg?react'
import SettingSvg from '/src/assets/images/Sidebar/setting-2.svg?react'
import NoteFavoriteSvg from '/src/assets/images/Sidebar/note-favorite.svg?react'
import MenuBoardSvg from '/src/assets/images/Sidebar/menu-board.svg?react'


export const studentSidebar = [
  { id: 1, location: "/student/dashboard", svg: HomeSvg, title: "داشبورد" },
  { id: 2, location: "/student/work-report", svg: NoteSvg, title: "گزارش کار" },
  { id: 3, location: "/student/finance", svg: CardSvg, title: "مالی" },
  {
    id: 4,
    location: "/student/leave-request",
    svg: CakeSvg,
    title: "درخواست های مرخصی",
  },
  { id: 5, location: "/student/messages", svg: SmsSvg, title: "پیام ها" },
  {
    id: 6,
    location: "/student/personal-information",
    svg: ProfileSvg,
    title: "اطلاعات فردی",
  },
  { id: 7, location: false, svg: JudgeSvg, title: "آیین نامه انضباطی" },
];


export const mentorSidebar = [
    {id: 1, location: '/mentor/dashboard', svg: HomeSvg, title: 'داشبورد'},
    {id: 2, location: '/mentor/students', svg: PeoplesSvg, title: 'دانشجویان'},
    {id: 3, location: '/mentor/messages', svg: SmsSvg, title: 'پیام ها'},
]

export const adminSideBar = [
    {id: 1, location: '/admin/dashboard', svg: HomeSvg, title: 'داشبورد'},
    {id: 2, location: '/admin/work-report-and-report-card', svg: NoteSvg, title: 'گزارش کار - کارنامه'},
    {id: 3, location: '/admin/leave-requests', svg: MenuBoardSvg, title: 'درخواست های مرخصی'},
    {id: 4, location: '/admin/students', svg: PeoplesSvg, title: 'دانشجویان'},
    {id: 5, location: '/admin/mentors', svg: UserSvg, title: 'اساتید'},
    {id: 6, location: '/admin/financial-affairs', svg: CardSvg, title: 'امور مالی'},
    {id: 7, location: '/admin/courses', svg: CodeCircleSvg, title: 'دوره ها'},
    {id: 8, location: '/admin/send-notification', svg: SmsSvg, title: 'ارسال اعلان'},
    {id: 9, location: '/admin/compositions', svg: SettingSvg, title: 'تنضیمات'},
    {id: 10, location: '/admin/disciplinary-regulations', svg: NoteFavoriteSvg, title: 'آیین نامه انظباطی'},
]

export const CategoriesFilterList = [
  "تایید شده",
  "رد شده",
  "بررسی نشده",
  "نمایش همه",
];

import greenIcon from "/src/assets/images/Students/Dashboard/ReportTime/trend-up.svg";
import redIcon from "/src/assets/images/Students/Dashboard/ReportTime/trend-down.svg";
import blueIcon from "/src/assets/images/Students/Dashboard/ReportTime/cup.svg";

export const ReportTimeCardList = [
  {
    id: 1,
    thirdNumber: true,
    icon: blueIcon,
    timeNumberAndTitleColor: "text-[#4318FF]",
    title: "باقی مانده تا موفقیت",
    titleBackgroundColor: "bg-[#ECE8FF]",
  },
  {
    id: 2,
    thirdNumber: false,
    icon: redIcon,
    timeNumberAndTitleColor: "text-[#D10000]",
    title: "کسر ساعت ماهانه",
    titleBackgroundColor: "bg-[#FFE8E8]",
  },
  {
    id: 3,
    thirdNumber: false,
    icon: greenIcon,
    timeNumberAndTitleColor: "text-[#09814A]",
    title: "بیشترین ساعت گزارش شده",
    titleBackgroundColor: "bg-[#F1FFE8]",
  },
];

export const tableListItem = {
  tableBody: [
    { id: 1, one: 87, two: "1403/4/23", three: "8", four: "بررسی نشده" },
    { id: 2, one: 86, two: "1403/4/23", three: "7", four: "رد شده" },
    { id: 3, one: 86, two: "1403/4/23", three: "7", four: "تایید شده" },
    { id: 4, one: 87, two: "1403/4/23", three: "8", four: "بررسی نشده" },
    { id: 5, one: 86, two: "1403/4/23", three: "7", four: "رد شده" },
    { id: 6, one: 85, two: "1403/4/23", three: "6", four: "تایید شده" },
  ],
  tableHead: [
    { id: 1, title: "عملیات" },
    { id: 2, title: "وضعیت گزارش" },
    { id: 3, title: "زمان گزارش" },
    { id: 4, title: "تاریخ" },
    { id: 5, title: "شماره گزارش" },
  ],
};

export const MonthReportCardList = [
  {
    id: 1,
    month: "ماه اول",
    bgColor: "primary-blue",
    textColor: "white",
    border: "primary-blue",
  },
  {
    id: 2,
    month: "ماه دوم",
    bgColor: "primary-gray",
    textColor: "primary-gray-100",
    border: "primary-gray-100",
  },
  {
    id: 3,
    month: "ماه سوم",
    bgColor: "primary-gray",
    textColor: "primary-gray-100",
    border: "primary-gray-100",
  },
  {
    id: 4,
    month: "ماه چهارم",
    bgColor: "primary-gray",
    textColor: "primary-gray-100",
    border: "primary-gray-100",
  },
  {
    id: 5,
    month: "ماه پنجم",
    bgColor: "primary-gray",
    textColor: "primary-gray-100",
    border: "primary-gray-100",
  },
  {
    id: 6,
    month: "ماه ششم",
    bgColor: "primary-gray",
    textColor: "primary-gray-100",
    border: "primary-gray-100",
  },
];

export const WorkCardStatusList = [
  {
    id: 1,
    textTop: "بیشترین",
    textButton: "ساعــت",
    hasTime: true,
    textStatus: "10",
  },
  {
    id: 2,
    textTop: "کمتریـن",
    textButton: "ساعــت",
    hasTime: true,
    textStatus: "2",
  },
  {
    id: 3,
    textTop: "ساعــت",
    textButton: "مورد انتظار",
    hasTime: true,
    textStatus: "80",
  },
  {
    id: 4,
    textTop: "مجموع ",
    textButton: "گزارش",
    hasTime: true,
    textStatus: "25",
  },
  {
    id: 5,
    textTop: "کسر ",
    textButton: "ساعت کاری",
    hasTime: true,
    textStatus: "12",
  },
  {
    id: 6,
    textTop: "میانگین ",
    textButton: "مطالعه",
    hasTime: true,
    textStatus: "67",
  },
  {
    id: 7,
    textTop: "رتبه کلاسی ",
    textButton: "در ساعت کاری",
    hasTime: false,
    textStatus: "7",
  },
  {
    id: 8,
    textTop: "نمـره",
    textButton: "فنـی",
    hasTime: false,
    textStatus: "10/8",
  },
  {
    id: 9,
    textTop: "حضور",
    textButton: "غیاب",
    hasTime: false,
    textStatus: "10/9",
  },
  {
    id: 10,
    textTop: "گزارش ",
    textButton: "دهــی",
    hasTime: false,
    textStatus: "10/7",
  },
  {
    id: 11,
    textTop: "انطباق پذیری",
    textButton: "سیستمی",
    hasTime: false,
    textStatus: "10/8",
  },
];

export const MessageReportCardList = [
  {
    id: 1,
    pointOfView: "دیدگاه استاد",
    message:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با اسد ",
  },
  {
    id: 2,
    pointOfView: "دیدگاه ادمین",
    message:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه ",
  },
];

import editIcon from "/src/assets/images/Students/WorkReports/edit-2.svg?react";
import messageIcon from "/src/assets/images/Students/WorkReports/message-text.svg?react";
import taskIcon from "/src/assets/images/Students/WorkReports/task.svg?react";

export const WorkReportBarList = [
  {
    id: 1,
    icon: editIcon,
    text: "ثبت گزارش کار",
    pageRender: "AddWorkReportPage",
  },
  {
    id: 2,
    icon: messageIcon,
    text: "مشاهده گزارش کارها",
    pageRender: "SeeWorkReportListPage",
  },
  { id: 3, icon: taskIcon, text: "کارنامه", pageRender: "ReportCardPage" },
];

import timerIcon from "../../assets/images/Students/LeaveRequest/timer.svg";
import coffeeIcon from "../../assets/images/Students/LeaveRequest/coffee.svg";
import coffeeIcon2 from "../../assets/images/Students/LeaveRequest/coffee2.svg";

export const LeaveRequestList = [
  {
    id: 1,
    thirdNumber: false,
    icon: timerIcon,
    timeNumberAndTitleColor: "text-[#D10000]",
    title: "میزان تاخیر های روزانه",
    titleBackgroundColor: "bg-[#FFD7D7]",
  },
  {
    id: 2,
    thirdNumber: false,
    icon: coffeeIcon,
    timeNumberAndTitleColor: "text-[#007ACC]",
    title: "مرخصی باقی مانده",
    titleBackgroundColor: "bg-[#E8F9FF]",
  },
  {
    id: 3,
    thirdNumber: false,
    icon: coffeeIcon2,
    timeNumberAndTitleColor: "text-[#3E8E00]",
    title: "مرخصی استفاده شده",
    titleBackgroundColor: "bg-[#EDFFE8]",
  },
];

export const LeaveRequestTableList = {
  tableHead: [
    { id: 1, title: "شماره قسط" },
    { id: 2, title: "تاریخ مرخصی" },
    { id: 3, title: "میزان ساعت مرخصی" },
    { id: 4, title: "وضعیت" },
    { id: 5, title: "عملیات" },
  ],
  tableBody: [
    { id: 1, one: 1, two: "1403/4/23", three: 2, four: "تایید شده" },
    { id: 2, one: 1, two: "1403/4/23", three: 3, four: "در حال بررسی" },
    { id: 3, one: 1, two: "1403/4/23", three: 2, four: "مشروط" },
    { id: 4, one: 1, two: "1403/4/23", three: 6, four: "رد شده" },
    { id: 5, one: 1, two: "1403/4/23", three: 8, four: "تایید شده" },
  ],
};

export const personalInformationInput = [
  { id: 1, name: "name", placeholder: "نام", isNumber: false },
  { id: 2, name: "family", placeholder: "نام خانوادگی", isNumber: false },
  { id: 3, name: "fathersName", placeholder: "نام پدر", isNumber: false },
  { id: 4, name: "birthPlace", placeholder: "محل تولد", isNumber: false },
  { id: 5, name: "birthDate", placeholder: "تاریخ تولد", isNumber: false },
  { id: 6, name: "religion", placeholder: "دین", isNumber: false },
  { id: 7, name: "NationalCode", placeholder: "کد ملی", isNumber: true },
  {
    id: 8,
    name: "NumberOfChildren",
    placeholder: "تعداد فرزند",
    isNumber: false,
  },
  { id: 9, name: "email", placeholder: "ایمیل", isNumber: false },
  { id: 10, name: "phoneNumber", placeholder: "تلفن همراه", isNumber: true },
  {
    id: 11,
    name: "ParentNumber",
    placeholder: "شماره پدر/مادر",
    isNumber: true,
  },
  {
    id: 12,
    name: "EssentialContactNumber",
    placeholder: "شماره تماس ضروری",
    isNumber: true,
  },
];

export const personalInformationRadioStatusMarried = [
  { id: 1, value: "single", title: "مجرد" },
  { id: 2, value: "married", title: "متاهل" },
];

export const personalInformationRadioGender = [
  { id: 1, value: "mail", title: "مرد" },
  { id: 2, value: "female", title: "زن" },
];

export const personalInformationHomeAddress = [
  { id: 1, name: "homeNumber", placeholder: "شماره منزل", isNumber: true },
  { id: 2, name: "PostalCode", placeholder: "کد پستی", isNumber: true },
];

export const personalInformationRadioDutySystem = [
  { id: 1, value: "theArmy", title: "ارتش" },
  { id: 2, value: "army", title: "سپاه" },
  { id: 3, value: "policeForce", title: "نیروی انتظامی" },
  { id: 4, value: "ministryOfDefense", title: "وزارت دفاع " },
  { id: 5, value: "otherEndOfServiceCard", title: "سایر" },
];

export const personInformationRadioExemptionType = [
  { id: 1, value: "Surplus", title: "مازاد" },
  { id: 2, value: "medicine", title: "پزشکی" },
  { id: 3, value: "education", title: "تحصیلی" },
  { id: 4, value: "Sponsorship", title: "کفالت" },
  { id: 5, value: "MartyrsSon", title: "فرزند شهید" },
  { id: 6, value: "Sacrifice", title: "ایثارگری" },
  { id: 7, value: "otherExemption", title: "سایر" },
];

export const personInformationDiploma = [
  {
    id: 1,
    name: "highSchoolDiploma",
    placeholder: "دبیرستان",
    isNumber: false,
  },
  { id: 2, name: "industryDiploma", placeholder: "رشته", isNumber: false },
  {
    id: 3,
    name: "startDateDiploma",
    placeholder: "تاریخ شروع",
    isNumber: false,
  },
  {
    id: 4,
    name: "endDateDiploma",
    placeholder: "تاریخ پایان",
    isNumber: false,
  },
  { id: 5, name: "pointDiploma", placeholder: "معدل", isNumber: false },
];

export const personInformationBachelorsDegree = [
  {
    id: 1,
    name: "highSchoolBachelorsDegree",
    placeholder: "دانشگاه",
    isNumber: false,
  },
  {
    id: 2,
    name: "industryBachelorsDegree",
    placeholder: "رشته",
    isNumber: false,
  },
  {
    id: 3,
    name: "startDateBachelorsDegree",
    placeholder: "تاریخ شروع",
    isNumber: false,
  },
  {
    id: 4,
    name: "endDateBachelorsDegree",
    placeholder: "تاریخ پایان",
    isNumber: false,
  },
  { id: 5, name: "pointBachelorsDegree", placeholder: "معدل", isNumber: false },
];

export const personInformationMastersDegree = [
  {
    id: 1,
    name: "highSchoolMastersDegree",
    placeholder: "دانشگاه",
    isNumber: false,
  },
  {
    id: 2,
    name: "industryMastersDegree",
    placeholder: "رشته",
    isNumber: false,
  },
  {
    id: 3,
    name: "startDateMastersDegree",
    placeholder: "تاریخ شروع",
    isNumber: false,
  },
  {
    id: 4,
    name: "endDateMastersDegree",
    placeholder: "تاریخ پایان",
    isNumber: false,
  },
  { id: 5, name: "pointMastersDegree", placeholder: "معدل", isNumber: false },
];

export const personInformationCompletedTrainingCourses = [
  { id: 1, name: "CourseTopic", placeholder: "موضوع دوره", isNumber: false },
  { id: 2, name: "CourseDuration", placeholder: "مدت دوره", isNumber: false },
  { id: 3, name: "startDate", placeholder: "تاریخ شروع", isNumber: false },
  {
    id: 4,
    name: "NameOfTheInstitution",
    placeholder: "نام موسسه",
    isNumber: false,
  },
  { id: 5, name: "Considerations", placeholder: "ملاحظات", isNumber: false },
];

export const personInformationRadioRelatedSoftware = [
  { id: 1, value: "great", title: "عالی" },
  { id: 2, value: "good", title: "خوب" },
  { id: 3, value: "average", title: "متوسط" },
  { id: 4, value: "weak", title: "ضعیف" },
];

export const personInformationRadioWorkHistory = [
  { id: 1, value: "have", title: "دارم" },
  { id: 2, value: "dontHave", title: "ندارم" },
];

export const personInformationRadioFamiliarLanguagesSuffering1 = [
  { id: 1, value: "average", title: "متوسط" },
  { id: 2, value: "weak", title: "ضعیف" },
];

export const personInformationRadioFamiliarLanguagesSuffering2 = [
  { id: 1, value: "great", title: "عالی" },
  { id: 2, value: "good", title: "خوب" },
];

export const personalInformationLanguageField = [
  { id: 1, title: "خواندن:", register: "reading" },
  { id: 2, title: "نوشتن:", register: "writing" },
  { id: 3, title: "مکالمه:", register: "conversation" },
];

export const personalInformationRepresentative = [
  { id: 1, name: "RepresentativeName", placeholder: "نام", isNumber: false },
  {
    id: 2,
    name: "RepresentativeAcquaintancePeriod",
    placeholder: "مدت آشنایی",
    isNumber: false,
  },
  {
    id: 3,
    name: "Representative ratio",
    placeholder: "نسبت با شما",
    isNumber: false,
  },
  {
    id: 4,
    name: "RepresentativeContactNumber",
    placeholder: "شماره تماس",
    isNumber: true,
  },
  {
    id: 5,
    name: "RepresentativeAddress",
    placeholder: "آدرس",
    isNumber: false,
  },
];

export const personalInformationRadioConnection = [
  { id: 1, value: "makeenInstagram", title: "اینستاگرام مکین" },
  { id: 2, value: "friendsInstagram", title: "اینستاگرام دوستان" },
  { id: 3, value: "makeensSite", title: "سایت مکین" },
  { id: 4, value: "introducingFriends", title: "معرفی دوستان" },
  { id: 5, value: "telegramChannel", title: "کانال تلکرامی" },
  { id: 6, value: "employmentSite", title: "سایت کاریابی" },
  { id: 7, value: "other", title: "سایر" },
];

import TaskSvg from "../../assets/images/menthor/studentsBar/task.svg?react";
import MessageSvg from "../../assets/images/menthor/studentsBar/message-text.svg?react";
import PeopleSvg from "../../assets/images/menthor/studentsBar/people.svg?react";
import ClipboardSvg from "../../assets/images/menthor/studentsBar/clipboard-text.svg?react";

export const mentorPanelStudentsBar = [
  { id: 1, svg: PeopleSvg, title: "لیست دانشجویان", page: "first" },
  { id: 2, svg: TaskSvg, title: "مشاهده گزارش کارها", page: "second" },
  { id: 3, svg: MessageSvg, title: "کارنامه", page: "third" },
  { id: 4, svg: ClipboardSvg, title: "نمره فنی", page: "fourth" },
];

import image from "./../../assets/images/Header/person.png";

export const mentorPageStudentsList = {
  tableHead: [
    { id: 1, title: "ردیف" },
    { id: 2, title: "نام و نام خانوادگی", right: true },
    { id: 3, title: "" },
    { id: 4, title: "" },
    { id: 5, title: "عملیات" },
  ],
  tableBody: [
    { id: 1, one: 1, two: "علیرضا  احمدی ", img: image },
    { id: 2, one: 2, two: "علیرضا  احمدی ", img: image },
    { id: 3, one: 3, two: "علیرضا  احمدی ", img: image },
    { id: 4, one: 4, two: "علیرضا  احمدی ", img: image },
    { id: 5, one: 5, two: "علیرضا  احمدی ", img: image },
  ],
};

export const mentorPageStudentsWorkReport = {
  tableHead: [
    { id: 1, title: "شماره گزارش" },
    { id: 2, title: "نام و نام خانوادگی" },
    { id: 3, title: "تاریخ" },
    { id: 4, title: "زمان گزارش" },
    { id: 5, title: "وضعیت گزارش" },
    { id: 6, title: "عملیات" },
  ],
  tableBody: [
    {
      id: 1,
      one: 87,
      two: "محمد مهدی مقدس نصیری",
      three: "1403/4/23",
      four: "تایید شده",
      five: 8,
    },
    {
      id: 2,
      one: 87,
      two: "محمد مهدی مقدس نصیری",
      three: "1403/4/23",
      four: "رد شده",
      five: 8,
    },
    {
      id: 3,
      one: 87,
      two: "محمد مهدی مقدس نصیری",
      three: "1403/4/23",
      four: "تایید شده",
      five: 8,
    },
    {
      id: 4,
      one: 87,
      two: "محمد مهدی مقدس نصیری",
      three: "1403/4/23",
      four: "بررسی نشده",
      five: 8,
    },
    {
      id: 5,
      one: 87,
      two: "محمد مهدی مقدس نصیری",
      three: "1403/4/23",
      four: "تایید شده",
      five: 8,
    },
    {
      id: 6,
      one: 87,
      two: "محمد مهدی مقدس نصیری",
      three: "1403/4/23",
      four: "تایید شده",
      five: 8,
    },
  ],
};

export const mentorPageStudentsReportCard = {
  tableHead: [
    { id: 1, title: "ردیف" },
    { id: 2, title: "نام و نام خانوادگی", right: true },
    { id: 3, title: "" },
    { id: 4, title: "" },
    { id: 5, title: "عملیات" },
  ],
  tableBody: [
    { id: 1, one: 1, two: "علیرضا  احمدی ", img: image },
    { id: 2, one: 1, two: "علیرضا  احمدی ", img: image },
    { id: 3, one: 1, two: "علیرضا  احمدی ", img: image },
    { id: 4, one: 1, two: "علیرضا  احمدی ", img: image },
    { id: 5, one: 1, two: "علیرضا  احمدی ", img: image },
  ],
};

export const mentorPageStudentsTechnicalScore = {
  tableHead: [
    { id: 1, title: "ردیف" },
    { id: 2, title: "نام و نام خانوادگی", right: true },
    { id: 3, title: "" },
    { id: 4, title: "نمره فنی" },
    { id: 5, title: "عملیات" },
  ],
  tableBody: [
    {
      id: 1,
      one: 1,
      two: "علیرضا  احمدی ",
      four: 5,
      img: image,
      operation: "ویرایش نمره فنی",
    },
    {
      id: 2,
      one: 2,
      two: "علیرضا  احمدی ",
      four: "-",
      img: image,
      operation: "ثبت نمره فنی",
    },
    {
      id: 3,
      one: 3,
      two: "علیرضا  احمدی ",
      four: "-",
      img: image,
      operation: "ثبت نمره فنی",
    },
    {
      id: 4,
      one: 4,
      two: "علیرضا  احمدی ",
      four: "-",
      img: image,
      operation: "ثبت نمره فنی",
    },
    {
      id: 5,
      one: 5,
      two: "علیرضا  احمدی ",
      four: "-",
      img: image,
      operation: "ثبت نمره فنی",
    },
  ],
};

export const technicScoreStudents = {
    tableHead: [
        {id: 1, title: 'هفته'},
        {id: 3, title: ''},
        {id: 2, title: 'نمره فنی',},
        {id: 4, title: ''},
        {id: 5, title: 'عملیات'}
    ],
    tableBody: [
        {id: 1, one: 'اول', three:  5,},
        {id: 2, one: 'دوم', three: '-',},
        {id: 3, one: 'سوم', three: '-',},
        {id: 4, one: 'چهارم', three: '-',},
        {id: 5, one: 'پنجم', three: '-',}
    ]
}


export const CourseCardList = [
    {id: 1, course: 'React', numbers: 73},
    {id: 2, course: 'JAVA', numbers: 73},
    {id: 3, course: 'python', numbers: 73},
    {id: 4, course: 'c#', numbers: 73},
    {id: 5, course: 'angular', numbers: 73},
    {id: 6, course: 'go', numbers: 73},
]

