import addIcon from "/src/assets/images/Students/WorkReports/add.svg";
import removeIcon from "/src/assets/images/Students/WorkReports/minus.svg";
import buttonCustom from "/src/assets/images/Students/WorkReports/buttonCustom.svg";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import WorkReportModal from "./WorkReportModal";

const WorkReportField = () => {
  const [reportForm, setReportForm] = useState([{ id: uuidv4() }]);
  const { register, handleSubmit } = useForm();
  const regexNumber = /^[0-9]+$/;
  const timeNumberHandler = (e) => {
    if (
      e.key === "Tab" ||
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowLeft"
    ) {
      return;
    }
    if (!regexNumber.test(e.key)) {
      e.preventDefault();
    }
  };
  const addNewReport = () => {
    setReportForm([...reportForm, { id: uuidv4() }]);
  };
  const removeReport = (id) => {
    setReportForm((item) => {
      return item.filter((field) => id !== field.id);
    });
  };
  const onSubmit = () => {
    modalRef.current.showModal()
  };

  const modalRef = useRef(null)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-[510px] flex flex-col justify-between gap-52"
    >
      <div className="flex flex-col gap-6">
        {reportForm.map((item, index) => (
          <div
            onClick={() => console.log(item.id)}
            key={item.id}
            className="flex gap-2 items-start placeholder:text-primary-gray-100 max-[560px]:flex-col max-[560px]:items-center"
          >
            <div className="flex gap-2 items-center">
              <input
                {...register(`minute${item.id}`, {
                  required: "this fieldIs required",
                })}
                onKeyDown={timeNumberHandler}
                placeholder="دقیقه"
                maxLength={2}
                type="text"
                className="w-[60px] h-[50px] text-xs border border-primary-gray-100 rounded-md outline-none text-center"
              />
              <span className="font-bold text-lg">:</span>
              <input
                {...register(`hour${item.id}`, {
                  required: "this fieldIs required",
                })}
                onKeyDown={timeNumberHandler}
                placeholder="ساعت"
                maxLength={2}
                type="text"
                className="w-[60px] h-[50px] text-xs border border-primary-gray-100 rounded-md outline-none text-center"
              />
            </div>
            <textarea
              {...register(`text${item.id}`, {
                required: "this fieldIs required",
              })}
              placeholder="توضیحات خود را یاداشت کنید"
              type="text"
              className="w-full h-[50px] min-h-[50px] max-h-[100px] border border-primary-gray-100 rounded-md outline-none mx-2 p-4 max-[560px]:mx-0 text-xs"
            />
            <div className="max-[560px]:w-full [&>button]:min-w-[50px] [&>button]:min-h-[50px] [&>button]:max-w-[50px] [&>button]:max-h-[50px] [&>button]:max-[560px]:min-w-full">
              {index + 1 === reportForm.length ? (
                <button
                  type="button"
                  onClick={addNewReport}
                  className=" border border-primary-blue rounded-md flex justify-center items-center"
                >
                  <img src={`${addIcon}`} alt="" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => removeReport(item.id)}
                  className="border border-primary-red rounded-md flex justify-center items-center"
                >
                  <img src={`${removeIcon}`} alt="" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <WorkReportModal modalRef={modalRef} />
      <div className="flex items-center justify-between">
        <img className="w-[164px] h-[53px] block" src={`${buttonCustom}`} alt="" />
        <button className="text-white bg-primary-blue flex justify-center items-center gap-1 rounded-lg w-[164px] h-[53px]">
          <span>ثبت گزارش کار</span>
        </button>
      </div>
    </form>
  );
};

export default WorkReportField;
