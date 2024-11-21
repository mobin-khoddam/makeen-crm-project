import { useState } from "react";
import ReportSheet from "./ReportSheet";
import WorkReportPart from "./WorkReportPart";

const WorkReport = () => {
  const [state, setState] = useState({
    first: true,
    second: false,
  });
  return (
    <div className="w-full h-fit">
      <div className="w-full h-[56px] bg-white rounded-[15px] shadow-sm flex items-center mb-[32px]">
        <button
          onClick={() => {
            setState({
              first: true,
              second: false,
            });
          }}
          className="w-1/2 h-full flex items-center justify-center gap-2 text-[#6B7280] font-medium ease-out transition-all duration-150 rounded-tr-[15px] rounded-br-[15px]"
          style={{
            backgroundColor: state.first && "#FACA15",
            color: state.first && "white",
          }}
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5 12.95H8.5C8.09 12.95 7.75 12.61 7.75 12.2C7.75 11.79 8.09 11.45 8.5 11.45H15.5C15.91 11.45 16.25 11.79 16.25 12.2C16.25 12.61 15.91 12.95 15.5 12.95Z"
              fill="currentColor"
            />
            <path
              d="M12.88 16.95H8.5C8.09 16.95 7.75 16.61 7.75 16.2C7.75 15.79 8.09 15.45 8.5 15.45H12.88C13.29 15.45 13.63 15.79 13.63 16.2C13.63 16.61 13.29 16.95 12.88 16.95Z"
              fill="currentColor"
            />
            <path
              d="M14.5 6.75H10.5C9.54 6.75 7.75 6.75 7.75 4C7.75 1.25 9.54 1.25 10.5 1.25H14.5C15.46 1.25 17.25 1.25 17.25 4C17.25 4.96 17.25 6.75 14.5 6.75ZM10.5 2.75C9.51 2.75 9.25 2.75 9.25 4C9.25 5.25 9.51 5.25 10.5 5.25H14.5C15.75 5.25 15.75 4.99 15.75 4C15.75 2.75 15.49 2.75 14.5 2.75H10.5Z"
              fill="currentColor"
            />
            <path
              d="M15.5 22.75H9.5C3.88 22.75 2.75 20.17 2.75 16V9.99999C2.75 5.43999 4.4 3.48999 8.46 3.27999C8.86 3.25999 9.23 3.56999 9.25 3.98999C9.27 4.40999 8.95 4.74999 8.54 4.76999C5.7 4.92999 4.25 5.77999 4.25 9.99999V16C4.25 19.7 4.98 21.25 9.5 21.25H15.5C20.02 21.25 20.75 19.7 20.75 16V9.99999C20.75 5.77999 19.3 4.92999 16.46 4.76999C16.05 4.74999 15.73 4.38999 15.75 3.97999C15.77 3.56999 16.13 3.24999 16.54 3.26999C20.6 3.48999 22.25 5.43999 22.25 9.98999V15.99C22.25 20.17 21.12 22.75 15.5 22.75Z"
              fill="currentColor"
            />
          </svg>
          گزارش کار
        </button>
        <button
          style={{
            backgroundColor: state.second && "#FACA15",
            color: state.second && "white",
          }}
          onClick={() => {
            setState({
              first: false,
              second: true,
            });
          }}
          className="w-1/2 h-full flex items-center justify-center gap-2 text-[#6B7280] font-medium ease-out transition-all duration-150 rounded-tl-[15px] rounded-bl-[15px]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0002 15.1667H6.00016C2.38016 15.1667 0.833496 13.62 0.833496 10V6.00001C0.833496 2.38001 2.38016 0.833344 6.00016 0.833344H9.3335C9.60683 0.833344 9.8335 1.06001 9.8335 1.33334C9.8335 1.60668 9.60683 1.83334 9.3335 1.83334H6.00016C2.92683 1.83334 1.8335 2.92668 1.8335 6.00001V10C1.8335 13.0733 2.92683 14.1667 6.00016 14.1667H10.0002C13.0735 14.1667 14.1668 13.0733 14.1668 10V6.66668C14.1668 6.39334 14.3935 6.16668 14.6668 6.16668C14.9402 6.16668 15.1668 6.39334 15.1668 6.66668V10C15.1668 13.62 13.6202 15.1667 10.0002 15.1667Z"
              fill="currentColor"
            />
            <path
              d="M14.6668 7.16667H12.0002C9.72016 7.16667 8.8335 6.28 8.8335 4V1.33334C8.8335 1.13334 8.9535 0.946669 9.14016 0.873336C9.32683 0.793336 9.54016 0.840003 9.68683 0.980003L15.0202 6.31334C15.1602 6.45334 15.2068 6.67334 15.1268 6.86C15.0468 7.04667 14.8668 7.16667 14.6668 7.16667ZM9.8335 2.54V4C9.8335 5.72 10.2802 6.16667 12.0002 6.16667H13.4602L9.8335 2.54Z"
              fill="currentColor"
            />
            <path
              d="M8.6665 9.16666H4.6665C4.39317 9.16666 4.1665 8.93999 4.1665 8.66666C4.1665 8.39332 4.39317 8.16666 4.6665 8.16666H8.6665C8.93984 8.16666 9.1665 8.39332 9.1665 8.66666C9.1665 8.93999 8.93984 9.16666 8.6665 9.16666Z"
              fill="currentColor"
            />
            <path
              d="M7.33317 11.8333H4.6665C4.39317 11.8333 4.1665 11.6067 4.1665 11.3333C4.1665 11.06 4.39317 10.8333 4.6665 10.8333H7.33317C7.6065 10.8333 7.83317 11.06 7.83317 11.3333C7.83317 11.6067 7.6065 11.8333 7.33317 11.8333Z"
              fill="currentColor"
            />
          </svg>
          کارنامه
        </button>
      </div>
      {state.second && <ReportSheet />}
      {state.first && <WorkReportPart />}
    </div>
  );
};

export default WorkReport;
