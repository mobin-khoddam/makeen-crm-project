import { useState } from "react";
import { AdminsData } from "../../../helper/ProjectData/Data";
import { useForm } from "react-hook-form";
import AdminsImageUploader from "./AdminsImageUploader";
import ModalAdmins from "./ModalAdmins";
const Admins = () => {
  const [admins, setAdmins] = useState(AdminsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isOpen, setIsOpen] = useState(false);
  const openSecondModal = () => setIsOpen(true);
  const closeSecondModal = () => setIsOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full h-fit  pt-6 rounded-[15px] mb-8  bg-white">
      <div className="flex items-center justify-between  w-[93%] mb-6 mx-auto">
        <h2 className="text-[16px] font-medium">عوامل اجرایی</h2>
        <button
          onClick={openModal}
          className="w-[102px] h-[33px] border-[1px] border-solid border-[#4318FF] text-[#4318FF] flex items-center justify-center gap-x-1 rounded-lg active:scale-95 transition-all ease-linear duration-150"
        >
          افزودن
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 13.25H6C5.59 13.25 5.25 12.91 5.25 12.5C5.25 12.09 5.59 11.75 6 11.75H18C18.41 11.75 18.75 12.09 18.75 12.5C18.75 12.91 18.41 13.25 18 13.25Z"
              fill="#4318FF"
            />
            <path
              d="M12 19.25C11.59 19.25 11.25 18.91 11.25 18.5V6.5C11.25 6.09 11.59 5.75 12 5.75C12.41 5.75 12.75 6.09 12.75 6.5V18.5C12.75 18.91 12.41 19.25 12 19.25Z"
              fill="#4318FF"
            />
          </svg>
        </button>

        {isModalOpen && (
          <dialog
            className="modal modal-bottom  bg-[#0000001b] sm:modal-middle"
            open
          >
            <div className="modal-box max-w-lg mx-auto bg-white sm:!min-h-[650px] h-fit shadow-lg rounded-lg !p-6 max-sm:absolute max-sm:left-1/2 max-sm:-translate-x-[50%] max-sm:h-[500px] max-sm:top-1/2 max-sm:!-translate-y-1/2 max-sm:w-[90%] ">
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

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
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
                      errors.nationalCode
                        ? errors.nationalCode.message
                        : "کد ملی"
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
                  />
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
      </div>
      <div className="w-[95%] mx-auto mb-6 grid lg:grid-cols-3 sm:grid-cols-2  items-center gap-6">
        {admins.map((admin) => {
          return (
            <div
              key={admin.id}
              className="w-full h-[283px]  flex flex-col items-center justify-start pt-8 gap-1 border-[1px] border-solid border-[#E5E7EB] rounded-[11px]"
            >
              <div className="w-[93%] ">
                <img
                  src={admin.image}
                  alt="adminImage"
                  className="w-[96px] h-[96px] mx-auto mb-3 object-cover"
                />
                <div className="w-full flex flex-col items-center">
                  <span className="text-[#111928] text-xl">
                    {admin.fullName}
                  </span>
                  <span className="text-[#6B7280] text-[14px]">
                    {admin.role}
                  </span>
                </div>
                <div className="pt-6 w-full flex justify-center gap-3">
                  <button
                    className="w-[111px] h-[37px] bg-[#1A56DB] text-white rounded-lg text-[14px] active:scale-95 transition-all ease-linear duration-150"
                    onClick={openSecondModal}
                  >
                    مشاهده اطلاعات{" "}
                  </button>
                  <ModalAdmins closeModal={closeSecondModal} isOpen={isOpen} />
                  <button
                    onClick={() => {
                      setAdmins(admins.filter((elem) => elem.id !== admin.id));
                    }}
                    className="text-[14px] rounded-lg active:scale-95 transition-all ease-linear duration-150 w-[51px] h-[37px] text-[#FD151B] border-[1px] border-solid border-[#FF8E8E]"
                  >
                    حذف
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admins;
