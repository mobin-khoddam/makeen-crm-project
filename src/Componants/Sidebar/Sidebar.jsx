import homeSvg from "../../assets/images/Sidebar/home.svg";
import noteSvg from "/src/assets/images/Sidebar/note.svg";
import financeSvg from "/src/assets/images/Sidebar/card-send.svg";
import LeaveRequestsSvg from "/src/assets/images/Sidebar/cake.svg";
import MessagesSvg from "/src/assets/images/Sidebar/sms.svg";
import PersonalSvg from "/src/assets/images/Sidebar/profile.svg";
import regulationsSvg from "/src/assets/images/Sidebar/judge.svg";
import logOutIcon from "/src/assets/images/Sidebar/logOut.png";
import CustomSidebarLink from "../../helper/CustomSidebarLink/CustomSidebarLink.jsx";
import MakeenLogo from "../MakeenLogo/MakeenLogo.jsx";
const Sidebar = () => {
  return (
    <div className="">
      <div className="drawer md:drawer-open max-md:drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>
        <div className="drawer-side z-[1] md:!contents max-md:!grid">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className=" bg-white text-base-content w-[240px] rounded-2xl py-6 pl-0">
            <div className="mb-6 mx-auto w-fit">
              <MakeenLogo />
            </div>
            <div className="w-full pr-6 flex flex-col gap-6 mb-44">
              <CustomSidebarLink
                location={"/student/dashboard"}
                svg={`${homeSvg}`}
                title="داشبورد"
              />
              <CustomSidebarLink
                location={"/student/work-report"}
                svg={`${noteSvg}`}
                title="گزارش کار"
              />
              <CustomSidebarLink
                location={"/student/finance"}
                svg={`${financeSvg}`}
                title="مالی"
              />
              <CustomSidebarLink
                location={"/student/leave-request"}
                svg={`${LeaveRequestsSvg}`}
                title="درخواست های مرخصی"
              />
              <CustomSidebarLink
                location={"/student/messages"}
                svg={`${MessagesSvg}`}
                title="پیام ها"
              />
              <CustomSidebarLink
                location={"/student/personal-information"}
                svg={`${PersonalSvg}`}
                title="اطلاعات فردی"
              />
              <CustomSidebarLink
                location={"/student/asd"}
                svg={`${regulationsSvg}`}
                title="آیین نامه انضباطی"
              />
            </div>
            <div className="flex gap-4 mb-6 cursor-pointer pr-6">
              <img className="w-6 h-6" src={`${logOutIcon}`} alt="" />
              <span className="text-primary-red font-medium">
                خروج از حساب کاربری
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
