import HomeSvg from "/src/assets/images/Sidebar/home.svg?react";
import SmsSvg from "/src/assets/images/Sidebar/sms.svg?react";
import JudgeSvg from "/src/assets/images/Sidebar/judge.svg?react";
import NoteSvg from "/src/assets/images/Sidebar/note.svg?react";
import CakeSvg from "/src/assets/images/Sidebar/cake.svg?react";
import ProfileSvg from "/src/assets/images/Sidebar/profile.svg?react";
import CardSvg from "/src/assets/images/Sidebar/card-send.svg?react";
import PeoplesSvg from "/src/assets/images/Sidebar/people.svg?react";
import UserSvg from "/src/assets/images/Sidebar/user-octagon.svg?react";
import CodeCircleSvg from "/src/assets/images/Sidebar/code-circle.svg?react";
import SettingSvg from "/src/assets/images/Sidebar/setting-2.svg?react";
import NoteFavoriteSvg from "/src/assets/images/Sidebar/note-favorite.svg?react";
import MenuBoardSvg from "/src/assets/images/Sidebar/menu-board.svg?react";
import FinanceSvg from "/src/assets/images/Sidebar/finance-report.svg?react";
import studentImage from "../../assets/images/menthor/profile1.png";
import AdminProfile1 from "../../assets/images/menthor/profile1.png";
import AdminProfile2 from "../../assets/images/menthor/profile2.png";
import AdminProfile3 from "../../assets/images/menthor/profile3.png";
import AdminProfile4 from "../../assets/images/menthor/profile4.png";
import AdminProfile5 from "../../assets/images/menthor/profile5.png";


export const studentSidebar = [
    {id: 1, location: "/student/dashboard", svg: HomeSvg, title: "داشبورد"},
    {id: 2, location: "/student/work-report", svg: NoteSvg, title: "گزارش کار"},
    {id: 3, location: "/student/finance", svg: CardSvg, title: "مالی"},
    {
        id: 4,
        location: "/student/leave-request",
        svg: CakeSvg,
        title: "درخواست های مرخصی",
    },
    {id: 5, location: "/student/messages", svg: SmsSvg, title: "پیام ها"},
    {
        id: 6,
        location: "/student/personal-information",
        svg: ProfileSvg,
        title: "اطلاعات فردی",
    },
    {id: 7, location: false, svg: JudgeSvg, title: "آیین نامه انضباطی"},
];

export const mentorSidebar = [
    {id: 1, location: "/mentor/dashboard", svg: HomeSvg, title: "داشبورد"},
    {id: 2, location: "/mentor/students", svg: PeoplesSvg, title: "دانشجویان"},
    {id: 3, location: "/mentor/messages", svg: SmsSvg, title: "پیام ها"},
];

export const adminSideBar = [
    {id: 1, location: "/admin/dashboard", svg: HomeSvg, title: "داشبورد"},
    {
        id: 2,
        location: "/admin/work-report-and-report-card",
        svg: NoteSvg,
        title: "گزارش کار - کارنامه",
    },
    {
        id: 3,
        location: "/admin/leave-request",
        svg: MenuBoardSvg,
        title: "درخواست های مرخصی",
    },
    {id: 4, location: "/admin/students", svg: PeoplesSvg, title: "دانشجویان"},
    {id: 5, location: "/admin/mentors", svg: UserSvg, title: "اساتید"},
    {
        id: 6,
        location: "/admin/financial-affairs",
        svg: CardSvg,
        title: "امور مالی",
    },
    {id: 7, location: "/admin/courses", svg: CodeCircleSvg, title: "دوره ها"},
    {
        id: 8,
        location: "/admin/send-notification",
        svg: SmsSvg,
        title: "ارسال اعلان",
    },
    {id: 9, location: "/admin/compositions", svg: SettingSvg, title: "تنضیمات"},
    {
        id: 10,
        location: "/admin/disciplinary-regulations",
        svg: NoteFavoriteSvg,
        title: "آیین نامه انظباطی",
    },
];

export const superAdminSideBar = [
    {id: 1, location: "/super-admin/dashboard", svg: HomeSvg, title: "داشبورد"},
    {
        id: 11,
        location: "/super-admin/admins-management",
        svg: UserSvg,
        title: "مدیریت ادمین ها",
    },
    {
        id: 2,
        location: "/admin/work-report-and-report-card",
        svg: NoteSvg,
        title: "گزارش کار - کارنامه",
    },
    {
        id: 3,
        location: "/admin/leave-request",
        svg: MenuBoardSvg,
        title: "درخواست های مرخصی",
    },
    {id: 4, location: "/admin/students", svg: PeoplesSvg, title: "دانشجویان"},
    {id: 5, location: "/admin/mentors", svg: UserSvg, title: "اساتید"},
    {
        id: 6,
        location: "/admin/financial-affairs",
        svg: CardSvg,
        title: "امور مالی",
    },
    {id: 7, location: "/admin/courses", svg: CodeCircleSvg, title: "دوره ها"},
    {
        id: 8, location: "/super-admin/financial/reports", svg: FinanceSvg, title: "گزارش های مالی مکین"
    },
    {
        id: 8,
        location: "/admin/send-notification",
        svg: SmsSvg,
        title: "ارسال اعلان",
    },
    {id: 9, location: "/admin/compositions", svg: SettingSvg, title: "تنضیمات"},
    {
        id: 10,
        location: "/admin/disciplinary-regulations",
        svg: NoteFavoriteSvg,
        title: "آیین نامه انظباطی",
    },

];


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
        {id: 1, one: 87, two: "1403/4/23", three: "8", four: "بررسی نشده"},
        {id: 2, one: 86, two: "1403/4/23", three: "7", four: "رد شده"},
        {id: 3, one: 86, two: "1403/4/23", three: "7", four: "تایید شده"},
        {id: 4, one: 87, two: "1403/4/23", three: "8", four: "بررسی نشده"},
        {id: 5, one: 86, two: "1403/4/23", three: "7", four: "رد شده"},
        {id: 6, one: 85, two: "1403/4/23", three: "6", four: "تایید شده"},
    ],
    tableHead: [
        {id: 1, title: "عملیات"},
        {id: 2, title: "وضعیت گزارش"},
        {id: 3, title: "زمان گزارش"},
        {id: 4, title: "تاریخ"},
        {id: 5, title: "شماره گزارش"},
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
    {id: 3, icon: taskIcon, text: "کارنامه", pageRender: "ReportCardPage"},
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
        {id: 1, title: "شماره قسط"},
        {id: 2, title: "تاریخ مرخصی"},
        {id: 3, title: "میزان ساعت مرخصی"},
        {id: 4, title: "وضعیت"},
        {id: 5, title: "عملیات"},
    ],
    tableBody: [
        {id: 1, one: 1, two: "1403/4/23", three: 2, four: "تایید شده"},
        {id: 2, one: 1, two: "1403/4/23", three: 3, four: "در حال بررسی"},
        {id: 3, one: 1, two: "1403/4/23", three: 2, four: "مشروط"},
        {id: 4, one: 1, two: "1403/4/23", three: 6, four: "رد شده"},
        {id: 5, one: 1, two: "1403/4/23", three: 8, four: "تایید شده"},
    ],
};

export const personalInformationInput = [
    {id: 1, name: "name", placeholder: "نام", isNumber: false},
    {id: 2, name: "family", placeholder: "نام خانوادگی", isNumber: false},
    {id: 3, name: "fathersName", placeholder: "نام پدر", isNumber: false},
    {id: 4, name: "birthPlace", placeholder: "محل تولد", isNumber: false},
    {id: 5, name: "birthDate", placeholder: "تاریخ تولد", isNumber: false},
    {id: 6, name: "religion", placeholder: "دین", isNumber: false},
    {id: 7, name: "NationalCode", placeholder: "کد ملی", isNumber: true},
    {
        id: 8,
        name: "NumberOfChildren",
        placeholder: "تعداد فرزند",
        isNumber: false,
    },
    {id: 9, name: "email", placeholder: "ایمیل", isNumber: false},
    {id: 10, name: "phoneNumber", placeholder: "تلفن همراه", isNumber: true},
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
    {id: 1, value: "single", title: "مجرد"},
    {id: 2, value: "married", title: "متاهل"},
];

export const personalInformationRadioGender = [
    {id: 1, value: "mail", title: "مرد"},
    {id: 2, value: "female", title: "زن"},
];

export const personalInformationHomeAddress = [
    {id: 1, name: "homeNumber", placeholder: "شماره منزل", isNumber: true},
    {id: 2, name: "PostalCode", placeholder: "کد پستی", isNumber: true},
];

export const personalInformationRadioDutySystem = [
    {id: 1, value: "theArmy", title: "ارتش"},
    {id: 2, value: "army", title: "سپاه"},
    {id: 3, value: "policeForce", title: "نیروی انتظامی"},
    {id: 4, value: "ministryOfDefense", title: "وزارت دفاع "},
    {id: 5, value: "otherEndOfServiceCard", title: "سایر"},
];

export const personInformationRadioExemptionType = [
    {id: 1, value: "Surplus", title: "مازاد"},
    {id: 2, value: "medicine", title: "پزشکی"},
    {id: 3, value: "education", title: "تحصیلی"},
    {id: 4, value: "Sponsorship", title: "کفالت"},
    {id: 5, value: "MartyrsSon", title: "فرزند شهید"},
    {id: 6, value: "Sacrifice", title: "ایثارگری"},
    {id: 7, value: "otherExemption", title: "سایر"},
];

export const personInformationDiploma = [
    {
        id: 1,
        name: "highSchoolDiploma",
        placeholder: "دبیرستان",
        isNumber: false,
    },
    {id: 2, name: "industryDiploma", placeholder: "رشته", isNumber: false},
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
    {id: 5, name: "pointDiploma", placeholder: "معدل", isNumber: false},
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
    {id: 5, name: "pointBachelorsDegree", placeholder: "معدل", isNumber: false},
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
    {id: 5, name: "pointMastersDegree", placeholder: "معدل", isNumber: false},
];

export const personInformationCompletedTrainingCourses = [
    {id: 1, name: "CourseTopic", placeholder: "موضوع دوره", isNumber: false},
    {id: 2, name: "CourseDuration", placeholder: "مدت دوره", isNumber: false},
    {id: 3, name: "startDate", placeholder: "تاریخ شروع", isNumber: false},
    {
        id: 4,
        name: "NameOfTheInstitution",
        placeholder: "نام موسسه",
        isNumber: false,
    },
    {id: 5, name: "Considerations", placeholder: "ملاحظات", isNumber: false},
];

export const personInformationRadioRelatedSoftware = [
    {id: 1, value: "great", title: "عالی"},
    {id: 2, value: "good", title: "خوب"},
    {id: 3, value: "average", title: "متوسط"},
    {id: 4, value: "weak", title: "ضعیف"},
];

export const personInformationRadioWorkHistory = [
    {id: 1, value: "have", title: "دارم"},
    {id: 2, value: "dontHave", title: "ندارم"},
];

export const personInformationRadioFamiliarLanguagesSuffering1 = [
    {id: 1, value: "average", title: "متوسط"},
    {id: 2, value: "weak", title: "ضعیف"},
];

export const personInformationRadioFamiliarLanguagesSuffering2 = [
    {id: 1, value: "great", title: "عالی"},
    {id: 2, value: "good", title: "خوب"},
];

export const personalInformationLanguageField = [
    {id: 1, title: "خواندن:", register: "reading"},
    {id: 2, title: "نوشتن:", register: "writing"},
    {id: 3, title: "مکالمه:", register: "conversation"},
];

export const personalInformationRepresentative = [
    {id: 1, name: "RepresentativeName", placeholder: "نام", isNumber: false},
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
    {id: 1, value: "makeenInstagram", title: "اینستاگرام مکین"},
    {id: 2, value: "friendsInstagram", title: "اینستاگرام دوستان"},
    {id: 3, value: "makeensSite", title: "سایت مکین"},
    {id: 4, value: "introducingFriends", title: "معرفی دوستان"},
    {id: 5, value: "telegramChannel", title: "کانال تلکرامی"},
    {id: 6, value: "employmentSite", title: "سایت کاریابی"},
    {id: 7, value: "other", title: "سایر"},
];

import TaskSvg from "../../assets/images/menthor/studentsBar/task.svg?react";
import MessageSvg from "../../assets/images/menthor/studentsBar/message-text.svg?react";
import PeopleSvg from "../../assets/images/menthor/studentsBar/people.svg?react";
import ClipboardSvg from "../../assets/images/menthor/studentsBar/clipboard-text.svg?react";

export const mentorPanelStudentsBar = [
    {id: 1, svg: PeopleSvg, title: "لیست دانشجویان", page: "first"},
    {id: 2, svg: TaskSvg, title: "مشاهده گزارش کارها", page: "second"},
    {id: 3, svg: MessageSvg, title: "کارنامه", page: "third"},
    {id: 4, svg: ClipboardSvg, title: "نمره فنی", page: "fourth"},
];

import image from "./../../assets/images/Header/person.png";

export const mentorPageStudentsList = {
    tableHead: [
        {id: 1, title: "ردیف"},
        {id: 2, title: "نام و نام خانوادگی", right: true},
        {id: 3, title: ""},
        {id: 4, title: ""},
        {id: 5, title: "عملیات"},
    ],
    tableBody: [
        {id: 1, one: 1, two: "علیرضا  احمدی ", img: image},
        {id: 2, one: 2, two: "علیرضا  احمدی ", img: image},
        {id: 3, one: 3, two: "علیرضا  احمدی ", img: image},
        {id: 4, one: 4, two: "علیرضا  احمدی ", img: image},
        {id: 5, one: 5, two: "علیرضا  احمدی ", img: image},
    ],
};

export const mentorPageStudentsWorkReport = {
    tableHead: [
        {id: 1, title: "شماره گزارش"},
        {id: 2, title: "نام و نام خانوادگی"},
        {id: 3, title: "تاریخ"},
        {id: 4, title: "زمان گزارش"},
        {id: 5, title: "وضعیت گزارش"},
        {id: 6, title: "عملیات"},
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
        {id: 1, title: "ردیف"},
        {id: 2, title: "نام و نام خانوادگی", right: true},
        {id: 3, title: ""},
        {id: 4, title: ""},
        {id: 5, title: "عملیات"},
    ],
    tableBody: [
        {id: 1, one: 1, two: "علیرضا  احمدی ", img: image},
        {id: 2, one: 1, two: "علیرضا  احمدی ", img: image},
        {id: 3, one: 1, two: "علیرضا  احمدی ", img: image},
        {id: 4, one: 1, two: "علیرضا  احمدی ", img: image},
        {id: 5, one: 1, two: "علیرضا  احمدی ", img: image},
    ],
};

export const mentorPageStudentsTechnicalScore = {
    tableHead: [
        {id: 1, title: "ردیف"},
        {id: 2, title: "نام و نام خانوادگی", right: true},
        {id: 3, title: ""},
        {id: 4, title: "نمره فنی"},
        {id: 5, title: "عملیات"},
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
        {id: 1, title: "هفته"},
        {id: 3, title: ""},
        {id: 2, title: "نمره فنی"},
        {id: 4, title: ""},
        {id: 5, title: "عملیات"},
    ],
    tableBody: [
        {id: 1, one: "اول", three: 5},
        {id: 2, one: "دوم", three: "-"},
        {id: 3, one: "سوم", three: "-"},
        {id: 4, one: "چهارم", three: "-"},
        {id: 5, one: "پنجم", three: "-"},
    ],
};

export const CourseCardList = [
    {id: 1, course: "React", numbers: 73},
    {id: 2, course: "JAVA", numbers: 73},
    {id: 3, course: "python", numbers: 73},
    {id: 4, course: "c#", numbers: 73},
    {id: 5, course: "angular", numbers: 73},
    {id: 6, course: "go", numbers: 73},
];

export const adminPanelLeaveRecords = {
    tableHead: [
        {id: 1, title: "#"},
        {id: 2, title: "نام و نام خانوادگی "},
        {id: 3, title: "نام فرعی دوره"},
        {id: 4, title: "تاریخ"},
        {id: 5, title: "میزان تاخیر"},
        {id: 6, title: "باقی مانده مرخصی"},
        {id: 7, title: "عملیات"},
    ],
    tableBody: [
        {
            id: 1,
            row: 1,
            name: "علیرضا  احمدی ",
            courseName: "ui/ux ",
            date: "1403/7/24",
            amountOfDelay: "21 دقیقه",
            range: {max: 16, min: 8},
            operation: "ویرایش",
        },
        {
            id: 2,
            row: 2,
            name: "علیرضا  احمدی ",
            courseName: "ui/ux ",
            date: "1403/7/24",
            amountOfDelay: "21 دقیقه",
            range: {max: 16, min: 8},
            operation: "ویرایش",
        },
        {
            id: 3,
            row: 3,
            name: "علیرضا  احمدی ",
            courseName: "ui/ux ",
            date: "1403/7/24",
            amountOfDelay: "21 دقیقه",
            range: {max: 16, min: 8},
            operation: "ویرایش",
        },
        {
            id: 4,
            row: 4,
            name: "علیرضا  احمدی ",
            courseName: "ui/ux ",
            date: "1403/7/24",
            amountOfDelay: "21 دقیقه",
            range: {max: 16, min: 8},
            operation: "ویرایش",
        },
        {
            id: 5,
            row: 5,
            name: "علیرضا  احمدی ",
            courseName: "ui/ux ",
            date: "1403/7/24",
            amountOfDelay: "21 دقیقه",
            range: {max: 16, min: 8},
            operation: "ویرایش",
        },
        {
            id: 6,
            row: 6,
            name: "علیرضا  احمدی ",
            courseName: "ui/ux ",
            date: "1403/7/24",
            amountOfDelay: "21 دقیقه",
            range: {max: 16, min: 8},
            operation: "ویرایش",
        },
        {
            id: 7,
            row: 7,
            name: "علیرضا  احمدی ",
            courseName: "ui/ux ",
            date: "1403/7/24",
            amountOfDelay: "21 دقیقه",
            range: {max: 16, min: 8},
            operation: "ویرایش",
        },
    ],
};

export const ReportSheetData = {
    row: [
        {id: 1, title: "#"},
        {id: 2, title: "نام و نام خانوادگی "},
        {id: 3, title: "نام فرعی دوره "},
        {id: 4, title: "شماره دوره "},
        {id: 5, title: "نمره فنی"},
        {id: 6, title: "نمره انطباق پذیری"},
        {id: 7, title: "عملیات"},
    ],
    body: [
        {
            id: 1,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            technicalMark: 10,
            SoftMark: 10,
        },
        {
            id: 2,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            technicalMark: 10,
            SoftMark: 10,
        },
        {
            id: 3,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            technicalMark: 10,
            SoftMark: 10,
        },
        {
            id: 4,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            technicalMark: 10,
            SoftMark: 10,
        },
        {
            id: 5,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            technicalMark: 10,
            SoftMark: 10,
        },
    ],
};

export const AdminWorkReport = {
    head: [
        {id: 1, title: "#"},
        {id: 2, title: "شماره گزارش "},
        {id: 3, title: "نام و نام خانوادگی "},
        {id: 4, title: "نام فرعی دوره "},
        {id: 5, title: "شماره دوره "},
        {id: 6, title: "ساعت کار"},
        {id: 7, title: "عملیات"},
    ],
    body: [
        {
            id: 1,
            reportNumber: 55,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            workhour: (
                <svg
                    width="59"
                    height="22"
                    viewBox="0 0 59 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="22.25"
                        y="0.25"
                        width="36.5"
                        height="21.5"
                        rx="4.75"
                        stroke="#09814A"
                        stroke-width="0.5"
                    />
                    <rect width="33" height="22" rx="5" fill="#09814A"/>
                    <path
                        d="M17.196 15.748L16.104 16.14L14.368 11.394C14.1627 10.8433 13.9573 10.232 13.752 9.56C13.5467 10.232 13.3413 10.8433 13.136 11.394L11.414 16.14L10.308 15.748L12.016 11.114C12.38 10.106 12.66 9.27067 12.856 8.608C13.0613 7.94533 13.1687 7.37133 13.178 6.886H14.312C14.3307 7.37133 14.438 7.94533 14.634 8.608C14.8393 9.27067 15.124 10.106 15.488 11.114L17.196 15.748Z"
                        fill="white"
                    />
                    <path
                        d="M40.3498 10.778C40.3498 9.94733 40.3265 9.22867 40.2798 8.622C40.2425 8.01533 40.1538 7.46 40.0138 6.956L41.0498 6.746C41.2178 7.14733 41.3345 7.78667 41.3998 8.664C41.4745 9.532 41.5118 10.4513 41.5118 11.422V16H40.3498V11.338V10.778ZM49.1073 6.886V9.098C49.1073 9.59267 48.9906 10.05 48.7573 10.47C48.5333 10.89 48.2206 11.2213 47.8193 11.464C47.4179 11.7067 46.9699 11.828 46.4753 11.828C45.9246 11.828 45.4439 11.674 45.0333 11.366V11.422V16H43.8713V11.338V10.778C43.8713 9.94733 43.8479 9.22867 43.8013 8.622C43.7639 8.01533 43.6753 7.46 43.5353 6.956L44.5713 6.746C44.7486 7.194 44.8793 7.978 44.9633 9.098V9.154V9.238C45.0006 9.62067 45.1593 9.94733 45.4393 10.218C45.7286 10.4793 46.0739 10.61 46.4753 10.61C46.8953 10.61 47.2499 10.4653 47.5393 10.176C47.8286 9.87733 47.9733 9.518 47.9733 9.098V6.886H49.1073Z"
                        fill="#09814A"
                    />
                </svg>
            ),
            img: studentImage,
        },
        {
            id: 2,
            reportNumber: 54,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            workhour: (
                <svg
                    width="59"
                    height="22"
                    viewBox="0 0 59 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="22.25"
                        y="0.25"
                        width="36.5"
                        height="21.5"
                        rx="4.75"
                        stroke="#FACA15"
                        stroke-width="0.5"
                    />
                    <rect width="33" height="22" rx="5" fill="#FACA15"/>
                    <path
                        d="M17.196 15.748L16.104 16.14L14.368 11.394C14.1627 10.8433 13.9573 10.232 13.752 9.56C13.5467 10.232 13.3413 10.8433 13.136 11.394L11.414 16.14L10.308 15.748L12.016 11.114C12.38 10.106 12.66 9.27067 12.856 8.608C13.0613 7.94533 13.1687 7.37133 13.178 6.886H14.312C14.3307 7.37133 14.438 7.94533 14.634 8.608C14.8393 9.27067 15.124 10.106 15.488 11.114L17.196 15.748Z"
                        fill="white"
                    />
                    <path
                        d="M45.1815 8.328C45.9935 9.14 46.6095 9.79333 47.0295 10.288C47.4495 10.7733 47.7668 11.254 47.9815 11.73C48.1961 12.1967 48.3035 12.71 48.3035 13.27C48.3035 14.2033 48.0561 14.8987 47.5615 15.356C47.0761 15.8133 46.4088 16.042 45.5595 16.042C45.1955 16.042 44.8781 15.9673 44.6075 15.818C44.3461 15.6687 44.1455 15.4493 44.0055 15.16C43.7161 15.748 43.1981 16.042 42.4515 16.042C41.6021 16.042 40.9301 15.8133 40.4355 15.356C39.9408 14.8987 39.6935 14.2033 39.6935 13.27C39.6935 12.71 39.8008 12.192 40.0155 11.716C40.2301 11.24 40.5428 10.764 40.9535 10.288C41.3735 9.80267 41.9988 9.14467 42.8295 8.314L43.1935 7.936L42.3675 7.124L43.1935 6.34C43.1935 6.34 43.8561 7.00267 45.1815 8.328ZM45.6155 14.922C46.0075 14.922 46.3528 14.824 46.6515 14.628C46.9501 14.4227 47.0948 14.0027 47.0855 13.368C47.0761 12.9573 46.9921 12.5653 46.8335 12.192C46.6748 11.8093 46.4041 11.38 46.0215 10.904C45.6388 10.428 45.0835 9.826 44.3555 9.098C44.1128 8.85533 43.9915 8.734 43.9915 8.734L43.6555 9.098C42.9275 9.83533 42.3675 10.442 41.9755 10.918C41.5928 11.3847 41.3221 11.8093 41.1635 12.192C41.0048 12.5653 40.9208 12.9573 40.9115 13.368C40.9021 14.404 41.3968 14.922 42.3955 14.922C42.7315 14.922 42.9835 14.8333 43.1515 14.656C43.3288 14.4693 43.4175 14.236 43.4175 13.956V12.794H44.5795V13.956C44.5795 14.236 44.6681 14.4693 44.8455 14.656C45.0228 14.8333 45.2795 14.922 45.6155 14.922Z"
                        fill="#FACA15"
                    />
                </svg>
            ),
            img: studentImage,
        },
        {
            id: 3,
            reportNumber: 53,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            workhour: (
                <svg
                    width="59"
                    height="22"
                    viewBox="0 0 59 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="22.25"
                        y="0.25"
                        width="36.5"
                        height="21.5"
                        rx="4.75"
                        stroke="#DC0000"
                        stroke-width="0.5"
                    />
                    <rect width="33" height="22" rx="5" fill="#DC0000"/>
                    <path
                        d="M17.196 15.748L16.104 16.14L14.368 11.394C14.1627 10.8433 13.9573 10.232 13.752 9.56C13.5467 10.232 13.3413 10.8433 13.136 11.394L11.414 16.14L10.308 15.748L12.016 11.114C12.38 10.106 12.66 9.27067 12.856 8.608C13.0613 7.94533 13.1687 7.37133 13.178 6.886H14.312C14.3307 7.37133 14.438 7.94533 14.634 8.608C14.8393 9.27067 15.124 10.106 15.488 11.114L17.196 15.748Z"
                        fill="white"
                    />
                    <path
                        d="M44.5051 16C44.0571 16 43.6418 15.8927 43.2591 15.678C42.8858 15.454 42.5871 15.1553 42.3631 14.782C42.1485 14.3993 42.0411 13.984 42.0411 13.536C42.0411 13.088 42.1485 12.6773 42.3631 12.304C42.5871 11.9307 42.8858 11.6367 43.2591 11.422C43.6418 11.198 44.0571 11.086 44.5051 11.086C44.9531 11.086 45.3638 11.198 45.7371 11.422C46.1105 11.6367 46.4045 11.9307 46.6191 12.304C46.8431 12.6773 46.9551 13.088 46.9551 13.536C46.9551 13.984 46.8431 14.3993 46.6191 14.782C46.4045 15.1553 46.1105 15.454 45.7371 15.678C45.3638 15.8927 44.9531 16 44.5051 16ZM44.5051 14.852C44.8691 14.852 45.1771 14.726 45.4291 14.474C45.6811 14.2127 45.8071 13.9 45.8071 13.536C45.8071 13.172 45.6811 12.864 45.4291 12.612C45.1771 12.36 44.8691 12.234 44.5051 12.234C44.1411 12.234 43.8285 12.36 43.5671 12.612C43.3151 12.864 43.1891 13.172 43.1891 13.536C43.1891 13.9 43.3151 14.2127 43.5671 14.474C43.8285 14.726 44.1411 14.852 44.5051 14.852Z"
                        fill="#DC0000"
                    />
                </svg>
            ),
            img: studentImage,
        },
        {
            id: 4,
            reportNumber: 52,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            workhour: (
                <svg
                    width="59"
                    height="22"
                    viewBox="0 0 59 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="22.25"
                        y="0.25"
                        width="36.5"
                        height="21.5"
                        rx="4.75"
                        stroke="#09814A"
                        stroke-width="0.5"
                    />
                    <rect width="33" height="22" rx="5" fill="#09814A"/>
                    <path
                        d="M17.196 15.748L16.104 16.14L14.368 11.394C14.1627 10.8433 13.9573 10.232 13.752 9.56C13.5467 10.232 13.3413 10.8433 13.136 11.394L11.414 16.14L10.308 15.748L12.016 11.114C12.38 10.106 12.66 9.27067 12.856 8.608C13.0613 7.94533 13.1687 7.37133 13.178 6.886H14.312C14.3307 7.37133 14.438 7.94533 14.634 8.608C14.8393 9.27067 15.124 10.106 15.488 11.114L17.196 15.748Z"
                        fill="white"
                    />
                    <path
                        d="M40.3498 10.778C40.3498 9.94733 40.3265 9.22867 40.2798 8.622C40.2425 8.01533 40.1538 7.46 40.0138 6.956L41.0498 6.746C41.2178 7.14733 41.3345 7.78667 41.3998 8.664C41.4745 9.532 41.5118 10.4513 41.5118 11.422V16H40.3498V11.338V10.778ZM49.1073 6.886V9.098C49.1073 9.59267 48.9906 10.05 48.7573 10.47C48.5333 10.89 48.2206 11.2213 47.8193 11.464C47.4179 11.7067 46.9699 11.828 46.4753 11.828C45.9246 11.828 45.4439 11.674 45.0333 11.366V11.422V16H43.8713V11.338V10.778C43.8713 9.94733 43.8479 9.22867 43.8013 8.622C43.7639 8.01533 43.6753 7.46 43.5353 6.956L44.5713 6.746C44.7486 7.194 44.8793 7.978 44.9633 9.098V9.154V9.238C45.0006 9.62067 45.1593 9.94733 45.4393 10.218C45.7286 10.4793 46.0739 10.61 46.4753 10.61C46.8953 10.61 47.2499 10.4653 47.5393 10.176C47.8286 9.87733 47.9733 9.518 47.9733 9.098V6.886H49.1073Z"
                        fill="#09814A"
                    />
                </svg>
            ),
            img: studentImage,
        },
        {
            id: 5,
            reportNumber: 51,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            workhour: (
                <svg
                    width="59"
                    height="22"
                    viewBox="0 0 59 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="22.25"
                        y="0.25"
                        width="36.5"
                        height="21.5"
                        rx="4.75"
                        stroke="#09814A"
                        stroke-width="0.5"
                    />
                    <rect width="33" height="22" rx="5" fill="#09814A"/>
                    <path
                        d="M17.196 15.748L16.104 16.14L14.368 11.394C14.1627 10.8433 13.9573 10.232 13.752 9.56C13.5467 10.232 13.3413 10.8433 13.136 11.394L11.414 16.14L10.308 15.748L12.016 11.114C12.38 10.106 12.66 9.27067 12.856 8.608C13.0613 7.94533 13.1687 7.37133 13.178 6.886H14.312C14.3307 7.37133 14.438 7.94533 14.634 8.608C14.8393 9.27067 15.124 10.106 15.488 11.114L17.196 15.748Z"
                        fill="white"
                    />
                    <path
                        d="M40.3498 10.778C40.3498 9.94733 40.3265 9.22867 40.2798 8.622C40.2425 8.01533 40.1538 7.46 40.0138 6.956L41.0498 6.746C41.2178 7.14733 41.3345 7.78667 41.3998 8.664C41.4745 9.532 41.5118 10.4513 41.5118 11.422V16H40.3498V11.338V10.778ZM49.1073 6.886V9.098C49.1073 9.59267 48.9906 10.05 48.7573 10.47C48.5333 10.89 48.2206 11.2213 47.8193 11.464C47.4179 11.7067 46.9699 11.828 46.4753 11.828C45.9246 11.828 45.4439 11.674 45.0333 11.366V11.422V16H43.8713V11.338V10.778C43.8713 9.94733 43.8479 9.22867 43.8013 8.622C43.7639 8.01533 43.6753 7.46 43.5353 6.956L44.5713 6.746C44.7486 7.194 44.8793 7.978 44.9633 9.098V9.154V9.238C45.0006 9.62067 45.1593 9.94733 45.4393 10.218C45.7286 10.4793 46.0739 10.61 46.4753 10.61C46.8953 10.61 47.2499 10.4653 47.5393 10.176C47.8286 9.87733 47.9733 9.518 47.9733 9.098V6.886H49.1073Z"
                        fill="#09814A"
                    />
                </svg>
            ),
            img: studentImage,
        },
    ],
};

export const LeaveRequestData = {
    head: [
        {id: 1, title: "#"},
        {id: 2, title: "نام و نام خانوادگی "},
        {id: 3, title: "دوره "},
        {id: 4, title: "شماره دوره "},
        {id: 5, title: "تاریخ ثبت "},
        {id: 6, title: "وضعیت"},
        {id: 7, title: "عملیات"},
    ],
    body: [
        {
            id: 1,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            date: "1402/07/25",
            status: "تایید شده",
        },
        {
            id: 2,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            date: "1402/07/25",
            status: "تایید شده",
        },
        {
            id: 3,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            date: "1402/07/25",
            status: "تایید شده",
        },
        {
            id: 4,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            date: "1402/07/25",
            status: "تایید شده",
        },
        {
            id: 5,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            date: "1402/07/25",
            status: "تایید شده",
        },
        {
            id: 6,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            date: "1402/07/25",
            status: "رد شده",
        },
        {
            id: 7,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            date: "1402/07/25",
            status: "تایید شده",
        },

        {
            id: 8,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            date: "1402/07/25",
            status: "رد شده",
        },
    ],
};
export const MentorsData = {
    head: [
        {id: 1, title: "#"},
        {id: 2, title: "نام و نام خانوادگی "},
        {id: 3, title: "نام فرعی دوره "},
        {id: 4, title: "زمان استخدام"},
        {id: 5, title: "وضعیت دوره"},
        {id: 6, title: "عملیات"},
    ],
    body: [
        {
            id: 1,
            fullName: "حسین رفیعی",
            courseName: "REACT ",
            date: "1402/07/25",
            status: "فعال",
        },
        {
            id: 2,
            fullName: "محسن زیرک",
            courseName: "ui/ux ",
            courseNumber: 13,
            date: "1402/07/25",
            status: "غیرفعال",
        },
        {
            id: 3,
            fullName: "خانم پیشداد",
            courseName: "PHP",
            courseNumber: 13,
            date: "1402/07/25",
            status: "غیرفعال",
        },
        {
            id: 4,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            date: "1402/07/25",
            status: "فعال",
        },
        {
            id: 5,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            date: "1402/07/25",
            status: "فعال",
        },
        {
            id: 6,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            date: "1402/07/25",
            status: "فعال",
        },
        {
            id: 7,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            date: "1402/07/25",
            status: "فعال",
        },

        {
            id: 8,
            fullName: "مسعود رمضانی",
            courseName: "ui/ux ",
            courseNumber: 13,
            date: "1402/07/25",
            status: "فعال",
        },
    ],
};

export const MentorsCardData = [
    {
        id: 1,
        mentor: "استاد کاظمی",
        course: "PHP",
        courseCount: "تعداد دوره برگذار شده",
        courseCountValue: 16,
        allMembers: "تعداد کل شرکت کننده ها ",
        allMembersValue: 160,
        activeStudents: "تعداد دانشجوی فعال",
        countActiveStudents: 10,
        graduateds: "تعداد فارغ التحصیل",
        graduatedsValue: 160,
        hierds: "تعداد استخدامی",
        hierdsCount: 76,
        quiteds: "تعداد انصرافی",
        quitedsCount: 12,
        fireds: "تعداد ریجکتی",
        firedsCount: 18,
    },
    {
        id: 2,
        mentor: "استاد زیرک",
        course: "LARAVEL",
        courseCount: "تعداد دوره برگذار شده",
        courseCountValue: 16,
        allMembers: "تعداد کل شرکت کننده ها ",
        allMembersValue: 160,
        activeStudents: "تعداد دانشجوی فعال",
        countActiveStudents: 10,
        graduateds: "تعداد فارغ التحصیل",
        graduatedsValue: 160,
        hierds: "تعداد استخدامی",
        hierdsCount: 76,
        quiteds: "تعداد انصرافی",
        quitedsCount: 12,
        fireds: "تعداد ریجکتی",
        firedsCount: 18,
    },
    {
        id: 3,
        mentor: "استاد صادقی کیا",
        course: "UI UX",
        courseCount: "تعداد دوره برگذار شده",
        courseCountValue: 16,
        allMembers: "تعداد کل شرکت کننده ها ",
        allMembersValue: 160,
        activeStudents: "تعداد دانشجوی فعال",
        countActiveStudents: 10,
        graduateds: "تعداد فارغ التحصیل",
        graduatedsValue: 160,
        hierds: "تعداد استخدامی",
        hierdsCount: 76,
        quiteds: "تعداد انصرافی",
        quitedsCount: 12,
        fireds: "تعداد ریجکتی",
        firedsCount: 18,
    },
    {
        id: 4,
        mentor: "استاد آذریان",
        course: "REACT",
        courseCount: "تعداد دوره برگذار شده",
        courseCountValue: 16,
        allMembers: "تعداد کل شرکت کننده ها ",
        allMembersValue: 160,
        activeStudents: "تعداد دانشجوی فعال",
        countActiveStudents: 10,
        graduateds: "تعداد فارغ التحصیل",
        graduatedsValue: 160,
        hierds: "تعداد استخدامی",
        hierdsCount: 76,
        quiteds: "تعداد انصرافی",
        quitedsCount: 12,
        fireds: "تعداد ریجکتی",
        firedsCount: 18,
    },
    {
        id: 5,
        mentor: "استاد رفیعی",
        course: "REACT",
        courseCount: "تعداد دوره برگذار شده",
        courseCountValue: 16,
        allMembers: "تعداد کل شرکت کننده ها ",
        allMembersValue: 160,
        activeStudents: "تعداد دانشجوی فعال",
        countActiveStudents: 10,
        graduateds: "تعداد فارغ التحصیل",
        graduatedsValue: 160,
        hierds: "تعداد استخدامی",
        hierdsCount: 76,
        quiteds: "تعداد انصرافی",
        quitedsCount: 12,
        fireds: "تعداد ریجکتی",
        firedsCount: 18,
    },
    {
        id: 6,
        mentor: "استاد صادقی کیا",
        course: "UI UX",
        courseCount: "تعداد دوره برگذار شده",
        courseCountValue: 16,
        allMembers: "تعداد کل شرکت کننده ها ",
        allMembersValue: 160,
        activeStudents: "تعداد دانشجوی فعال",
        countActiveStudents: 10,
        graduateds: "تعداد فارغ التحصیل",
        graduatedsValue: 160,
        hierds: "تعداد استخدامی",
        hierdsCount: 76,
        quiteds: "تعداد انصرافی",
        quitedsCount: 12,
        fireds: "تعداد ریجکتی",
        firedsCount: 18,
    },
];

export const NotificationRecordsData = {
    head: [
        {id: 1, title: "#"},
        {id: 2, title: "موضوع پیام"},
        {id: 3, title: "تیتر اصلی "},
        {id: 4, title: "تیتر فرعی"},
        {id: 5, title: "شماره دوره"},
        {id: 6, title: "تاریخ"},
        {id: 7, title: "عملیات"},
    ],
    body: [
        {
            id: 1,
            subject: "تبریک عید",
            mainTitle: "فرانت اند ",
            subtitle: "REACT",
            courseNumber: 18,
            date: "1403/2/13",
        },
        {
            id: 2,
            subject: "تبریک روز زن",
            mainTitle: "مقدماتی",
            subtitle: "مقدماتی",
            courseNumber: 18,
            date: "1403/2/13",
        },
        {
            id: 3,
            subject: "تبریک روز زن",
            mainTitle: "فرانت اند",
            subtitle: "REACT",
            courseNumber: 18,
            date: "1403/2/13",
        },
        {
            id: 4,
            subject: "دعوت به جشن",
            mainTitle: "UI UX",
            subtitle: "UI UX",
            courseNumber: 18,
            date: "1403/2/13",
        },
        {
            id: 5,
            subject: "دعوت به جشن",
            mainTitle: "UI UX",
            subtitle: "UI UX",
            courseNumber: 18,
            date: "1403/2/13",
        },
        {
            id: 6,
            subject: "تبریک روز زن",
            mainTitle: "فرانت اند",
            subtitle: "REACT",
            courseNumber: 18,
            date: "1403/2/13",
        },
    ],
};

export const coursesDataListStudents = [
    {
        id: 1,
        courseName: "PHP",
        courseList: [
            {
                id: 1,
                courseHeld: 16,
                membersNumber: 10,
                activeStudents: 20,
                graduate: 20,
                employment: 0,
                withdrawal: 500,
                rejection: 1,
            },
        ],
    },
    {
        id: 2,
        courseName: "React",
        courseList: [
            {
                id: 2,
                courseHeld: 0,
                membersNumber: 10,
                activeStudents: 20,
                graduate: 2,
                employment: 2,
                withdrawal: 200,
                rejection: 100,
            },
        ],
    },
    {
        id: 3,
        courseName: "python",
        courseList: [
            {
                id: 3,
                courseHeld: 1,
                membersNumber: 0,
                activeStudents: 20,
                graduate: 0,
                employment: 0,
                withdrawal: 20,
                rejection: 10,
            },
        ],
    },
    {
        id: 4,
        courseName: "ui / ux",
        courseList: [
            {
                id: 4,
                courseHeld: 100,
                membersNumber: 0,
                activeStudents: 0,
                graduate: 0,
                employment: 0,
                withdrawal: 900,
                rejection: 0,
            },
        ],
    },
    {
        id: 5,
        courseName: "node.js",
        courseList: [
            {
                id: 5,
                courseHeld: 1,
                membersNumber: 0,
                activeStudents: 20,
                graduate: 3,
                employment: 10,
                withdrawal: 20,
                rejection: 10,
            },
        ],
    },
    {
        id: 6,
        courseName: "java",
        courseList: [
            {
                id: 6,
                courseHeld: 1,
                membersNumber: 0,
                activeStudents: 20,
                graduate: 0,
                employment: 0,
                withdrawal: 20,
                rejection: 10,
            },
        ],
    },
];

export const courseStudentsCollapse = [
    {
        id: 1,
        open: false,
        CourseName: "تعداد کل فرانت اند",
        courseNumber: 10,
        courseList: [
            {
                id: 1,
                courseHeld: 1,
                membersNumber: 0,
                activeStudents: 20,
                graduate: 0,
                employment: 0,
                withdrawal: 20,
                rejection: 3,
            },
        ],
    },
    {
        id: 2,
        open: false,
        CourseName: "تعداد کل بک اند",
        courseNumber: 10,
        courseList: [
            {
                id: 2,
                courseHeld: 1,
                membersNumber: 0,
                activeStudents: 20,
                graduate: 0,
                employment: 0,
                withdrawal: 20,
                rejection: 4,
            },
        ],
    },
    {
        id: 3,
        open: false,
        CourseName: "تعداد کل UI UX",
        courseNumber: 5,
        courseList: [
            {
                id: 3,
                courseHeld: 1,
                membersNumber: 0,
                activeStudents: 20,
                graduate: 0,
                employment: 0,
                withdrawal: 20,
                rejection: 6,
            },
        ],
    },
    {
        id: 4,
        open: false,
        CourseName: "تعداد کل مقدماتی",
        courseNumber: 9,
        courseList: [
            {
                id: 4,
                courseHeld: 1,
                membersNumber: 0,
                activeStudents: 20,
                graduate: 0,
                employment: 0,
                withdrawal: 20,
                rejection: 8,
            },
        ],
    },
    {
        id: 5,
        open: false,
        CourseName: "تعداد کل فرانت اند",
        courseNumber: 10,
        courseList: [
            {
                id: 5,
                courseHeld: 1,
                membersNumber: 0,
                activeStudents: 20,
                graduate: 0,
                employment: 0,
                withdrawal: 20,
                rejection: 9,
            },
        ],
    },
];

export const adminPageStudentsInformation = {
    linK: "/admin/students/",
    tableHead: [
        {id: 1, title: "#"},
        {id: 2, title: "نام و نام خانوادگی "},
        {id: 3, title: "دوره"},
        {id: 4, title: "وضعیت"},
        {id: 5, title: "عملیات"},
    ],
    tableBody: [
        {
            id: 1,
            name: "علیرضا  احمدی ",
            course: "react",
            phoneNumber: "09397636467 ",
            status: "دانشجو",
            information: "مشاهده اطلاعات",
        },
        {
            id: 2,
            name: "علیرضا  احمدی ",
            course: "react",
            phoneNumber: "09397636467 ",
            status: "فارغ التحصیل",
            information: "مشاهده اطلاعات",
        },
        {
            id: 3,
            name: "علیرضا  احمدی ",
            course: "react",
            phoneNumber: "09397636467 ",
            status: "استخدام",
            information: "مشاهده اطلاعات",
        },
        {
            id: 4,
            name: "علیرضا  احمدی ",
            course: "react",
            phoneNumber: "09397636467 ",
            status: "دانشجو",
            information: "مشاهده اطلاعات",
        },
        {
            id: 5,
            name: "علیرضا  احمدی ",
            course: "react",
            phoneNumber: "09397636467 ",
            status: "فارغ التحصیل",
            information: "مشاهده اطلاعات",
        },
        {
            id: 6,
            name: "علیرضا  احمدی ",
            course: "react",
            phoneNumber: "09397636467 ",
            status: "استخدام",
            information: "مشاهده اطلاعات",
        },
    ],
};
export const adminFinanceStudents = {
    head: [
        {id: 1, title: "#"},
        {id: 2, title: "نام و نام خانوادگی "},
        {id: 3, title: "دوره"},
        {id: 4, title: "شماره دوره"},
        {id: 5, title: "پرداخت شده"},
        {id: 6, title: "مانده"},
        {id: 7, title: "وضعیت"},
        {id: 8, title: "عملیات"},
    ],
    body: [
        {
            id: 1,
            name: "علیرضا  احمدی ",
            course: "react",
            courseNumber: 18,
            amount: "15.240.238",
            remain: "1.450.237",
            status: "استخدام",
        },
        {
            id: 2,
            name: "علیرضا  احمدی ",
            course: "react",
            courseNumber: 18,
            amount: "15.240.238",
            remain: "1.450.237",
            status: "دانشجو",
        },
        {
            id: 3,
            name: "علیرضا  احمدی ",
            course: "react",
            courseNumber: 18,
            amount: "15.240.238",
            remain: "1.450.237",
            status: "دانشجو",
        },
        {
            id: 4,
            name: "علیرضا  احمدی ",
            course: "react",
            courseNumber: 18,
            amount: "15.240.238",
            remain: "1.450.237",
            status: "فارغ التحصیل",
        },
        {
            id: 5,
            name: "علیرضا  احمدی ",
            course: "react",
            courseNumber: 18,
            amount: "15.240.238",
            remain: "1.450.237",
            status: "دانشجو",
        },
    ],
};
export const LatestTransActionFinanceData = {
    head: [
        {id: 1, title: "#"},
        {id: 2, title: "نام و نام خانوادگی "},
        {id: 3, title: "دوره"},
        {id: 4, title: "شماره دوره"},
        {id: 5, title: "تاریخ پرداخت"},
        {id: 6, title: "مبلغ قسط"},
        {id: 7, title: "وضعیت"},
        {id: 8, title: "عملیات"},
    ],
    body: [
        {
            id: 1,
            name: "علیرضا  احمدی ",
            course: "react",
            courseNumber: 18,
            date: "1403/8/28",
            amount: "15.240.238",
            status: "استخدام",
        },
        {
            id: 2,
            name: "علیرضا  احمدی ",
            course: "react",
            courseNumber: 18,
            date: "1403/8/28",
            amount: "15.240.238",
            status: "دانشجو",
        },
        {
            id: 3,
            name: "علیرضا  احمدی ",
            course: "react",
            courseNumber: 18,
            date: "1403/8/28",
            amount: "15.240.238",
            status: "دانشجو",
        },
        {
            id: 4,
            name: "علیرضا  احمدی ",
            course: "react",
            courseNumber: 18,
            date: "1403/8/28",
            amount: "15.240.238",
            status: "فارغ التحصیل",
        },
        {
            id: 5,
            name: "علیرضا  احمدی ",
            course: "react",
            courseNumber: 18,
            date: "1403/8/28",
            amount: "15.240.238",
            status: "دانشجو",
        },
    ],
};
export const ArrearsTableData = {
    head: [
        {id: 1, title: "#"},
        {id: 2, title: "نام و نام خانوادگی "},
        {id: 3, title: "دوره"},
        {id: 4, title: "شماره دوره"},
        {id: 5, title: "مهلت پرداخت"},
        {id: 6, title: "مبلغ قسط"},
        {id: 7, title: "وضعیت"},
        {id: 8, title: "عملیات"},
    ],
    body: [
        {
            id: 1,
            name: "علیرضا  احمدی ",
            course: "react",
            courseNumber: 18,
            PaymentDeadline: "1403/8/28",
            amount: "15.240.238",
            status: "استخدام",
        },
        {
            id: 2,
            name: "علیرضا  احمدی ",
            course: "react",
            courseNumber: 18,
            PaymentDeadline: "1403/8/28",
            amount: "15.240.238",
            status: "دانشجو",
        },
        {
            id: 3,
            name: "علیرضا  احمدی ",
            course: "react",
            courseNumber: 18,
            PaymentDeadline: "1403/8/28",
            amount: "15.240.238",
            status: "دانشجو",
        },
        {
            id: 4,
            name: "علیرضا  احمدی ",
            course: "react",
            courseNumber: 18,
            PaymentDeadline: "1403/8/28",
            amount: "15.240.238",
            status: "فارغ التحصیل",
        },
        {
            id: 5,
            name: "علیرضا  احمدی ",
            course: "react",
            courseNumber: 18,
            PaymentDeadline: "1403/8/28",
            amount: "15.240.238",
            status: "دانشجو",
        },
    ],
};

export const adminPanelStudentsFinanceData = {
    head: [
        {id: 1, title: "شماره قسط"},
        {id: 2, title: "مهلت پرداخت تا"},
        {id: 3, title: "زمان پرداخت شده"},
        {id: 4, title: "مبلغ قسط"},
        {id: 5, title: "مبلغ واریزی"},
        {id: 6, title: "وضعیت"},
    ],
    body: [
        {
            id: 1,
            row: 1,
            paymentDeadline: "1403/4/24",
            paidTime: "1403/4/24",
            installmentAmount: "1.200.000",
            DepositAmount: "1.200.000",
            status: "پرداخت شده",
        },
        {
            id: 2,
            row: 2,
            paymentDeadline: "1403/4/24",
            paidTime: "1403/4/24",
            installmentAmount: "1.200.000",
            DepositAmount: "1.200.000",
            status: "پرداخت شده",
        },
        {
            id: 3,
            row: 3,
            paymentDeadline: "1403/4/24",
            paidTime: "1403/4/24",
            installmentAmount: "1.200.000",
            DepositAmount: "1.200.000",
            status: "پرداخت قسط ",
        },
        {
            id: 4,
            row: 4,
            paymentDeadline: "1403/4/24",
            paidTime: "1403/4/24",
            installmentAmount: "1.200.000",
            DepositAmount: "1.200.000",
            status: "پرداخت قسط ",
        },
        {
            id: 5,
            row: 5,
            paymentDeadline: "1403/4/24",
            paidTime: "1403/4/24",
            installmentAmount: "1.200.000",
            DepositAmount: "1.200.000",
            status: "پرداخت قسط ",
        },
        {
            id: 6,
            row: 6,
            paymentDeadline: "1403/4/24",
            paidTime: "1403/4/24",
            installmentAmount: "1.200.000",
            DepositAmount: "1.200.000",
            status: "پرداخت قسط ",
        },
    ],
};

export const LeaveRequestListAdminPanel = [
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

export const adminPanelStudentsLeaveRequestData = {
    head: [
        {id: 1, title: "شماره قسط"},
        {id: 2, title: "تاریخ مرخصی"},
        {id: 3, title: "میزان ساعت مرخصی"},
        {id: 4, title: "وضعیت"},
        {id: 5, title: "عملیات"},
    ],
    body: [
        {
            id: 1,
            installmentNumber: 1,
            leaveRequestDate: "1403/4/24",
            vacationHours: 2,
            status: "تایید شده",
            operation: "عملیات",
        },
        {
            id: 2,
            installmentNumber: 2,
            leaveRequestDate: "1403/4/24",
            vacationHours: 1,
            status: "رد شده",
            operation: "عملیات",
        },
        {
            id: 3,
            installmentNumber: 3,
            leaveRequestDate: "1403/4/24",
            vacationHours: 4,
            status: "در حال بررسی",
            operation: "عملیات",
        },
        {
            id: 4,
            installmentNumber: 4,
            leaveRequestDate: "1403/4/24",
            vacationHours: 4,
            status: "مشروط",
            operation: "عملیات",
        },
        {
            id: 5,
            installmentNumber: 5,
            leaveRequestDate: "1403/4/24",
            vacationHours: 1,
            status: "رد شده",
            operation: "عملیات",
        },
        {
            id: 6,
            installmentNumber: 6,
            leaveRequestDate: "1403/4/24",
            vacationHours: 4,
            status: "در حال بررسی",
            operation: "عملیات",
        },
        {
            id: 7,
            installmentNumber: 7,
            leaveRequestDate: "1403/4/24",
            vacationHours: 4,
            status: "مشروط",
            operation: "عملیات",
        },
    ],
};

import img1 from "/src/assets/images/Admin/Courses/Frame1.png";
import img2 from "/src/assets/images/Admin/Courses/Frame2.png";
import img3 from "/src/assets/images/Admin/Courses/Frame3.png";

export const panelAdminCourses = [
    {id: 1, img: img1},
    {id: 2, img: img2},
    {id: 3, img: img3},
    {id: 4, img: img1},
    {id: 5, img: img2},
    {id: 6, img: img3},
    {id: 7, img: img1},
    {id: 8, img: img2},
    {id: 9, img: img3},
];

import img4 from "/src/assets/images/Admin/Courses/Frame4.png";
import img5 from "/src/assets/images/Admin/Courses/Frame5.png";
import img6 from "/src/assets/images/Admin/Courses/Frame6.png";

export const panelAdminCourses2 = [
    {id: 1, img: img4},
    {id: 2, img: img5},
    {id: 3, img: img6},
    {id: 4, img: img4},
    {id: 5, img: img5},
    {id: 6, img: img6},
    {id: 7, img: img4},
    {id: 8, img: img5},
    {id: 9, img: img6},
];

import img7 from "/src/assets/images/Admin/Courses/Group.png";
import img8 from "/src/assets/images/Admin/Courses/Group1.png";
import img9 from "/src/assets/images/Admin/Courses/Group2.png";

export const panelAdminCourses3 = [
    {id: 1, img: img7},
    {id: 2, img: img8},
    {id: 3, img: img9},
    {id: 4, img: img7},
    {id: 5, img: img8},
    {id: 6, img: img9},
    {id: 7, img: img7},
    {id: 8, img: img8},
    {id: 9, img: img9},
];

export const adminPanelSetTimeCourseRadioInput = [
    {id: 1, value: "شنبه", title: "شنبه"},
    {id: 2, value: "یکشنبه", title: "یکشنبه"},
    {id: 3, value: "دوشنبه", title: "دوشنبه"},
    {id: 4, value: "سه‌شنبه", title: "سه‌شنبه"},
    {id: 5, value: "چهارشنبه", title: "چهارشنبه"},
    {id: 6, value: "پنجشنبه", title: "پنجشنبه"},
    {id: 7, value: "جمعه", title: "جمعه"},
];

export const AdminsData = [
    {
        id: 1,
        fullName: "محمد صادقی کیا",
        role: "سوپر ادمین",
        image: AdminProfile1,
    },
    {
        id: 2,
        fullName: "امیررضا پاکزاد",
        role: "ادمین",
        image: AdminProfile2,
    },
    {
        id: 3,
        fullName: "خانم پیشداد",
        role: "ادمین",
        image: AdminProfile3,
    },
    {
        id: 4,
        fullName: "حسین رفیعی",
        role: "ادمین",
        image: AdminProfile4,
    },
    {
        id: 5,
        fullName: "محمد سلطانی",
        role: "ادمین",
        image: AdminProfile5,
    },
    {
        id: 6,
        fullName: "مبین خدام",
        role: "ادمین",
        image: AdminProfile1,
    },
];


export const adminPanelSettingWorkReportSettings = [
    {id: 1, hour: 'minimumWorkReportHour', minute: 'minimumWorkReportMinute', title: 'حداقل زمان قابل قبول گزارش کار'},
    {id: 2, hour: 'calculateBaseReportHour', minute: 'calculateBaseReportMinute', title: 'محاسبه مبنای گزارش'},
    {id: 3, hour: 'reportDeadlineHour', minute: 'reportDeadlineMinute', title: 'آخرین مهلت ارسال گزارش'},
    {
        id: 4,
        hour: 'deadlineReportFineHour',
        minute: 'deadlineReportFineMinute',
        title: 'آخرین مهلت ارسال گزارش با احتساب جریمه'
    },
    {id: 5, fine: 'PenaltyPerHourDeducted', title: 'جریمه به ازای هر ساعت کسر'},
]

export const adminPanelSettingLeaveAndAbsence = [
    {id: 1, placeholder: 'ساعت', name: 'maximumHoursOfLeave', title: 'حداکثر ساعت مجاز مرخصی'},
    {id: 2, placeholder: 'ضریب', name: 'noticeOfLeaveUntil24', title: 'اطلاع مرخصی تا 24 ساعت با ضریب'},
    {id: 3, placeholder: 'ضریب', name: 'lessNoticeOfLeave24', title: 'اطلاع مرخصی کمتر از 24 ساعت با ضریب'},
    {id: 4, placeholder: 'ضریب', name: 'leaveWithoutNotice', title: 'مرخصی بدون اطلاع دادن با ضریب'},
]

import fineIcon from '/src/assets/images/Admin/Compositions/ticket-expired.svg'
import CardIcon from '/src/assets/images/Admin/Compositions/card-pos.svg'
import graduateIcon from '/src/assets/images/Admin/Compositions/teacher.svg'

export const TransferToCardAdminPanel = [
    {id: 1, title: 'تنظیمات کارت به کارت جریمه', icon: fineIcon, inputName: 'transferToFineCard'},
    {id: 2, title: 'تنظیمات کارت به کارت قسط', icon: CardIcon, inputName: 'TransferToInstallmentCard'},
    {id: 3, title: 'تنظیمات کارت به کارت فارغ التحصیلان', icon: graduateIcon, inputName: 'transferToGraduateCard'},
]