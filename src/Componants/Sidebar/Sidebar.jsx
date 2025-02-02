import logOutIcon from "/src/assets/images/Sidebar/logOut.png";
import MakeenLogo from "../MakeenLogo/MakeenLogo.jsx";
import SideBarLink from "./SideBarLink.jsx";
import { userRoll } from "../../../store/store.jsx";
import {
  adminSideBar,
  mentorSidebar,
  studentSidebar, superAdminSideBar,
} from "../../helper/ProjectData/Data.jsx";

const Sidebar = () => {
  const { role } = userRoll((state) => state);
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
              {role === "student" ? (
                <SideBarLink data={studentSidebar} />
              ) : role === "mentor" ? (
                <SideBarLink data={mentorSidebar} />
              ) : role === "mentor" ? (
                <SideBarLink data={adminSideBar} />
              ) :
              <SideBarLink data={superAdminSideBar} />}
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
