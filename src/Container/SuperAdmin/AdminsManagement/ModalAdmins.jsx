import { TextField } from "@mui/material";
import AdminsImageUploader from "./AdminsImageUploader";

const ModalAdmins = ({ isOpen, closeModal }) => {
  return (
    <>
      {isOpen && (
        <dialog
          className="modal modal-bottom  bg-[#0000001b] sm:modal-middle"
          open
        >
          <div className="modal-box max-w-lg mx-auto bg-white !h-fit sm:min-h-[670px] shadow-lg rounded-lg !p-6 max-sm:absolute max-sm:left-1/2 max-sm:-translate-x-[50%] max-sm:h-[500px] max-sm:top-1/2 max-sm:!-translate-y-1/2 max-sm:w-[90%] ">
            <span className="flex items-center justify-center gap-1 w-[200px] h-[47px] border-[0.5px] border-solid border-[#4318FF] text-[#4318FF] bg-[#F7F5FF] rounded-[10px] mx-auto mb-8">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12.5C14.7614 12.5 17 10.2614 17 7.5C17 4.73858 14.7614 2.5 12 2.5C9.23858 2.5 7 4.73858 7 7.5C7 10.2614 9.23858 12.5 12 12.5Z"
                  fill="#4318FF"
                />
                <path
                  opacity="0.4"
                  d="M12.0002 15C6.99018 15 2.91016 18.36 2.91016 22.5C2.91016 22.78 3.13016 23 3.41016 23H20.5902C20.8702 23 21.0902 22.78 21.0902 22.5C21.0902 18.36 17.0102 15 12.0002 15Z"
                  fill="#4318FF"
                />
                <path
                  d="M21.4291 15.2398C20.5291 14.3398 19.8191 14.6298 19.2091 15.2398L15.669 18.7799C15.529 18.9199 15.3991 19.1798 15.3691 19.3698L15.1791 20.7198C15.1091 21.2098 15.4491 21.5498 15.9391 21.4798L17.289 21.2898C17.479 21.2598 17.7491 21.1298 17.8791 20.9898L21.419 17.4499C22.039 16.8499 22.3291 16.1398 21.4291 15.2398Z"
                  fill="#4318FF"
                />
              </svg>
              افزودن عوامل اجرایی
            </span>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4 ">
                <TextField
                  dir="rtl"
                  value={"امیررضا"}
                  id="outlined-basic"
                  label="نام"
                  variant="outlined"
                  sx={{
                    fontFamily: "'iran-yekan', sans-serif", // فونت از فایل CSS
                    pointerEvents: "none",
                    textAlign: "right",
                  }}
                />
                <TextField
                  dir="rtl"
                  value={"پاکزاد"}
                  id="outlined-basic"
                  label="نام خانوادگی"
                  variant="outlined"
                  sx={{
                    fontFamily: "'iran-yekan', sans-serif", // فونت از فایل CSS
                    pointerEvents: "none",
                  }}
                />
                <TextField
                  id="outlined-basic"
                  value={"002485637"}
                  label="کد ملی"
                  variant="outlined"
                  sx={{
                    fontFamily: "'iran-yekan', sans-serif", // فونت از فایل CSS
                    pointerEvents: "none",
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="شماره تماس"
                  value={"09121547896"}
                  variant="outlined"
                  sx={{
                    fontFamily: "'iran-yekan', sans-serif", // فونت از فایل CSS
                    pointerEvents: "none",
                  }}
                />
                <TextField
                  id="outlined-basic"
                  value={"هاشم"}
                  label="نام پدر"
                  variant="outlined"
                  sx={{
                    fontFamily: "'iran-yekan', sans-serif", // فونت از فایل CSS
                    pointerEvents: "none",
                  }}
                />
                <TextField
                  id="outlined-basic"
                  value={"ادمین"}
                  label="نقش فرد"
                  variant="outlined"
                  sx={{
                    fontFamily: "'iran-yekan', sans-serif", // فونت از فایل CSS
                    pointerEvents: "none",
                  }}
                />
                <TextField
                  value={"002485637"}
                  id="outlined-basic"
                  label="نام کاربری"
                  variant="outlined"
                  sx={{
                    fontFamily: "'iran-yekan', sans-serif", // فونت از فایل CSS
                    pointerEvents: "none",
                  }}
                />
                <TextField
                  value={"lscnac527zcsk"}
                  id="outlined-basic"
                  label="رمز عبور"
                  variant="outlined"
                  sx={{
                    fontFamily: "'iran-yekan', sans-serif", // فونت از فایل CSS
                    pointerEvents: "none",
                  }}
                />

                {/* <input
                  type="text"
                  {...register("firstName", {
                    required: "نام الزامی است",
                  })}
                  placeholder={
                    errors.firstName ? errors.firstName.message : "نام"
                  }
                  className={`input input-bordered w-full text-[14px] ${
                    errors.firstName
                      ? "placeholder:text-red-500"
                      : "placeholder:text-gray-400"
                  }`}
                />
                <input
                  type="text"
                  {...register("lastName", {
                    required: "نام خانوادگی الزامی است",
                  })}
                  placeholder={
                    errors.lastName ? errors.lastName.message : "نام خانوادگی"
                  }
                  className={`input input-bordered w-full text-[14px] ${
                    errors.lastName
                      ? "placeholder:text-red-500"
                      : "placeholder:text-gray-400"
                  }`}
                />
                <input
                  type="text"
                  {...register("contactNumber", {
                    required: "شماره تماس الزامی است",
                  })}
                  placeholder={
                    errors.contactNumber
                      ? errors.contactNumber.message
                      : "شماره تماس"
                  }
                  className={`input input-bordered w-full text-[14px] ${
                    errors.contactNumber
                      ? "placeholder:text-red-500"
                      : "placeholder:text-gray-400"
                  }`}
                />
                <input
                  type="text"
                  {...register("nationalCode", {
                    required: "کد ملی الزامی است",
                  })}
                  placeholder={
                    errors.nationalCode ? errors.nationalCode.message : "کد ملی"
                  }
                  className={`input input-bordered w-full text-[14px] ${
                    errors.nationalCode
                      ? "placeholder:text-red-500"
                      : "placeholder:text-gray-400"
                  }`}
                />
                <input
                  type="text"
                  {...register("fatherName", {
                    required: "نام پدر الزامی است",
                  })}
                  placeholder={
                    errors.fatherName ? errors.fatherName.message : "نام پدر"
                  }
                  className={`input input-bordered w-full text-[14px] ${
                    errors.fatherName
                      ? "placeholder:text-red-500"
                      : "placeholder:text-gray-400"
                  }`}
                />
                <input
                  type="text"
                  {...register("role", {
                    required: "نقش فرد الزامی است",
                  })}
                  placeholder={errors.role ? errors.role.message : "نقش فرد"}
                  className={`input input-bordered w-full text-[14px] ${
                    errors.role
                      ? "placeholder:text-red-500"
                      : "placeholder:text-gray-400"
                  }`}
                />
                <input
                  type="text"
                  {...register("username", {
                    required: "نام کاربری الزامی است",
                  })}
                  placeholder={
                    errors.username ? errors.username.message : "نام کاربری"
                  }
                  className={`input input-bordered w-full text-[14px] ${
                    errors.username
                      ? "placeholder:text-red-500"
                      : "placeholder:text-gray-400"
                  }`}
                />
                <input
                  type="password"
                  {...register("password", {
                    required: "رمز عبور الزامی است",
                  })}
                  placeholder={
                    errors.password ? errors.password.message : "رمز عبور"
                  }
                  className={`input input-bordered w-full text-[14px] ${
                    errors.password
                      ? "placeholder:text-red-500"
                      : "placeholder:text-gray-400"
                  }`}
                /> */}
              </div>

              <div className="w-[330px] max-sm:w-[80%] mx-auto">
                <AdminsImageUploader />
              </div>

              <div className="flex justify-between mt-6 max-sm:flex-col max-sm:items-center gap-y-2">
                <button
                  onClick={closeModal}
                  type="submit"
                  className="btn  max-sm:w-full bg-[#4318FF] text-white btn-primary  w-[226px]"
                >
                  ثبت اطلاعات
                </button>
                <button
                  onClick={closeModal}
                  type="button"
                  className="btn max-sm:w-full btn-outline w-[226px]"
                >
                  بازگشت
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
};

export default ModalAdmins;
