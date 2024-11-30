import { useForm, Controller } from "react-hook-form";
import MentorImageUploader from "./MentorImageUploader";

const MentorForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="  w-full">
        <div className="w-full px-6 py-8 bg-white  rounded-[15px]">
          <h2 className="text-xl font-medium text-[16px] text-[#3E3838] mb-4">
            مشخصات استاد
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-4">
            <input
              {...register("name", { required: "وارد کردن نام الزامی است" })}
              placeholder="نام"
              className="border outline-none p-2 rounded shadow-md"
            />
            {errors.name && (
              <h3 className="text-red-500 text-sm">{errors.name.message}</h3>
            )}

            <input
              {...register("lastName", {
                required: "وارد کردن نام خانوادگی الزامی است",
              })}
              placeholder="نام خانوادگی"
              className="border outline-none p-2 rounded h-[53px] shadow-md"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">
                {errors.lastName.message}
              </span>
            )}

            <input
              {...register("nationalId", { required: "کد ملی الزامی است" })}
              placeholder="کد ملی"
              className="border outline-none p-2 rounded shadow-md"
            />
            {errors.nationalId && (
              <span className="text-red-500 text-sm">
                {errors.nationalId.message}
              </span>
            )}

            <input
              {...register("contactNumber", {
                required: "شماره تماس الزامی است",
              })}
              placeholder="شماره تماس"
              className="border outline-none p-2 rounded shadow-md"
            />
            {errors.contactNumber && (
              <span className="text-red-500 text-sm">
                {errors.contactNumber.message}
              </span>
            )}

            <input
              {...register("constantNumber", {
                required: "شماره تلفن ثابت الزامی است",
              })}
              placeholder="تلفن ثابت"
              className="border outline-none p-2 rounded h-[53px] shadow-md"
            />
            {errors.degree && (
              <span className="text-red-500 text-sm">
                {errors.degree.message}
              </span>
            )}

            <input
              {...register("birthday")}
              placeholder="تاریخ تولد"
              className="border p-2 rounded shadow-md"
            />

            <input
              {...register("referrer")}
              placeholder="معرف"
              className="border outline-none p-2 rounded shadow-md"
            />
            <input
              {...register("university")}
              placeholder="دانشگاه"
              className="border outline-none p-2 rounded shadow-md"
            />
            <input
              {...register("degree")}
              placeholder="مدرک تحصیلی"
              className="border outline-none p-2 rounded h-[53px] shadow-md"
            />
            <input
              {...register("workplace")}
              placeholder="محل کار"
              className="border outline-none p-2 rounded h-[53px] shadow-md"
            />
            <input
              {...register("skills")}
              placeholder="مهارت ها"
              className="border outline-none p-2 rounded h-[53px] shadow-md"
            />
            <input
              {...register("workExperience")}
              placeholder="سوابق کاری"
              className="border outline-none p-2 rounded h-[53px] shadow-md"
            />
          </div>
        </div>
        <div className="w-full bg-white  py-8 md:h-fit lg:h-[324px] rounded-[15px] mt-6 overflow-auto">
          <div className="max-sm:w-full mx-auto  bg-white sm:w-[640px] lg:w-[640px] md:w-[250px]  h-fit sm:h-[260px] md:h-fit lg:h-[260px] grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 ">
            <div className=" w-[250px] mx-auto mb-5">
              <h3 className="mb-6 text-center text-[16px] text-[#3E3838] font-medium">
                آپلود عکس
              </h3>
              <MentorImageUploader />
            </div>
            <div className="w-[250px] mx-auto">
              <h3 className="mb-6 text-center text-[16px] text-[#3E3838] font-medium">
                آپلود رزومه
              </h3>
              <MentorImageUploader />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className=" block w-full lg:w-[188px] !mx-auto  mt-[40px] bg-[#4318FF] text-white px-4 py-2 rounded-[10px] mb-[40px] hover:bg-blue-600"
        >
          ثبت استاد
        </button>
      </form>
    </>
  );
};

export default MentorForm;
