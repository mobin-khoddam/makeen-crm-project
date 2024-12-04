import { AdminsData } from "../../../helper/ProjectData/Data";

const MessageToAdmins = () => {
  return (
    <div className="w-full h-fit flex flex-col p-6   rounded-[15px] bg-white">
      <h2 className="text-[16px] text-black font-medium mb-6">
        ارسال پیام به عوامل اجرایی
      </h2>
      {AdminsData.map((admin) => {
        return (
          <div className="flex flex-wrap h-[132px] mb-6  items-center justify-between border border-gray-300 rounded-xl p-4 w-full  mx-auto">
            {/* سمت راست: اطلاعات کاربر */}
            <div className="flex items-center ml-2 space-x-3 rtl:space-x-reverse">
              <img
                src={admin.image}
                alt="User Avatar"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-medium">امیررضا پاکزاد</h3>
                <p className="text-sm text-gray-500">ادمین</p>
              </div>
            </div>

            {/* سمت چپ: پیام و دکمه */}
            <div className="flex flex-1 items-center mt-4 md:mt-0 space-x-3 rtl:space-x-reverse">
              <textarea
                className="flex-1 border border-gray-300 h-[42px] rounded-lg px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="پیام خود را بنویسید..."
                rows={1}
              ></textarea>
              <button className=" text-white p-2 active:scale-95 transition-all ease-linear duration-150">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.06271 13.0728C2.86365 12.973 2.69628 12.8199 2.57931 12.6304C2.46234 12.4409 2.40039 12.2227 2.40039 12C2.40039 11.7773 2.46234 11.5591 2.57931 11.3696C2.69628 11.1802 2.86365 11.027 3.06271 10.9272L19.8627 2.5272C20.071 2.42297 20.3052 2.38162 20.5366 2.40819C20.768 2.43476 20.9866 2.5281 21.1659 2.67683C21.3452 2.82556 21.4773 3.02324 21.5461 3.24577C21.6149 3.46829 21.6175 3.70604 21.5535 3.93L19.8387 9.93C19.767 10.1808 19.6155 10.4013 19.4072 10.5583C19.1989 10.7153 18.9451 10.8001 18.6843 10.8H13.1991C12.8809 10.8 12.5756 10.9264 12.3506 11.1515C12.1255 11.3765 11.9991 11.6817 11.9991 12C11.9991 12.3183 12.1255 12.6235 12.3506 12.8485C12.5756 13.0736 12.8809 13.2 13.1991 13.2H18.6843C18.9451 13.1999 19.1989 13.2847 19.4072 13.4417C19.6155 13.5987 19.767 13.8192 19.8387 14.07L21.5523 20.07C21.6164 20.2939 21.614 20.5316 21.5453 20.7541C21.4767 20.9767 21.3447 21.1744 21.1656 21.3233C20.9865 21.4721 20.7679 21.5656 20.5366 21.5924C20.3052 21.6192 20.0711 21.578 19.8627 21.474L3.06271 13.074V13.0728Z"
                    fill="#1C64F2"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageToAdmins;
