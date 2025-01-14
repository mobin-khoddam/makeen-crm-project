const SinglePageRow = ({ state, setState }) => {
  return (
    <div className="w-[82%] h-[200px] sm:h-[56px] flex  sm:flex-row flex-col  items-center text-[#6B7280] text-[12px] mx-auto">
      <button
        onClick={() => {
          setState({
            second: false,
            first: true,
            third: false,
          });
        }}
        className="w-full sm:w-1/3 h-full flex   items-center justify-center gap-x-2 transition-all ease-out duration-300 max-sm:rounded-t-[15px] sm:rounded-tr-[15px] sm:rounded-br-[15px]"
        style={{
          backgroundColor: state.first ? "#FACA15" : "white",
          color: state.first && "white",
        }}
      >
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_301_26450" fill="white">
            <path d="M14.8327 13.5H8.16602C7.89268 13.5 7.66602 13.2733 7.66602 13C7.66602 12.7267 7.89268 12.5 8.16602 12.5H14.8327C15.106 12.5 15.3327 12.7267 15.3327 13C15.3327 13.2733 15.106 13.5 14.8327 13.5Z" />
          </mask>
          <path
            d="M14.8327 13.5H8.16602C7.89268 13.5 7.66602 13.2733 7.66602 13C7.66602 12.7267 7.89268 12.5 8.16602 12.5H14.8327C15.106 12.5 15.3327 12.7267 15.3327 13C15.3327 13.2733 15.106 13.5 14.8327 13.5Z"
            fill="#6B7280"
          />
          <path
            d="M14.8327 12.5H8.16602V14.5H14.8327V12.5ZM8.16602 12.5C8.44497 12.5 8.66602 12.721 8.66602 13H6.66602C6.66602 13.8256 7.3404 14.5 8.16602 14.5V12.5ZM8.66602 13C8.66602 13.279 8.44497 13.5 8.16602 13.5V11.5C7.3404 11.5 6.66602 12.1744 6.66602 13H8.66602ZM8.16602 13.5H14.8327V11.5H8.16602V13.5ZM14.8327 13.5C14.5537 13.5 14.3327 13.279 14.3327 13H16.3327C16.3327 12.1744 15.6583 11.5 14.8327 11.5V13.5ZM14.3327 13C14.3327 12.721 14.5537 12.5 14.8327 12.5V14.5C15.6583 14.5 16.3327 13.8256 16.3327 13H14.3327Z"
            fill="#6B7280"
            mask="url(#path-1-inside-1_301_26450)"
          />
          <path
            d="M14.8327 8.83337H8.16602C7.89268 8.83337 7.66602 8.60671 7.66602 8.33337C7.66602 8.06004 7.89268 7.83337 8.16602 7.83337H14.8327C15.106 7.83337 15.3327 8.06004 15.3327 8.33337C15.3327 8.60671 15.106 8.83337 14.8327 8.83337Z"
            fill="#6B7280"
          />
          <path
            d="M14.8327 4.16663H8.16602C7.89268 4.16663 7.66602 3.93996 7.66602 3.66663C7.66602 3.39329 7.89268 3.16663 8.16602 3.16663H14.8327C15.106 3.16663 15.3327 3.39329 15.3327 3.66663C15.3327 3.93996 15.106 4.16663 14.8327 4.16663Z"
            fill="#6B7280"
          />
          <path
            d="M3.49898 4.83329C3.37232 4.83329 3.24565 4.78663 3.14565 4.68663L2.47898 4.01996C2.28565 3.82663 2.28565 3.50663 2.47898 3.31329C2.67232 3.11996 2.99232 3.11996 3.18565 3.31329L3.49898 3.62663L5.14565 1.97996C5.33898 1.78663 5.65898 1.78663 5.85232 1.97996C6.04565 2.17329 6.04565 2.49329 5.85232 2.68663L3.85232 4.68663C3.75232 4.78663 3.62565 4.83329 3.49898 4.83329Z"
            fill="#6B7280"
          />
          <path
            d="M3.49898 9.50004C3.37232 9.50004 3.24565 9.45338 3.14565 9.35337L2.47898 8.68671C2.28565 8.49337 2.28565 8.17338 2.47898 7.98004C2.67232 7.78671 2.99232 7.78671 3.18565 7.98004L3.49898 8.29337L5.14565 6.64671C5.33898 6.45338 5.65898 6.45338 5.85232 6.64671C6.04565 6.84004 6.04565 7.16004 5.85232 7.35338L3.85232 9.35337C3.75232 9.45338 3.62565 9.50004 3.49898 9.50004Z"
            fill="#6B7280"
          />
          <path
            d="M3.49898 14.1667C3.37232 14.1667 3.24565 14.12 3.14565 14.02L2.47898 13.3533C2.28565 13.16 2.28565 12.84 2.47898 12.6467C2.67232 12.4533 2.99232 12.4533 3.18565 12.6467L3.49898 12.96L5.14565 11.3133C5.33898 11.12 5.65898 11.12 5.85232 11.3133C6.04565 11.5067 6.04565 11.8267 5.85232 12.02L3.85232 14.02C3.75232 14.12 3.62565 14.1667 3.49898 14.1667Z"
            fill="#6B7280"
          />
        </svg>
        <span>مشاهده گزارش کارها</span>
      </button>
      <button
        onClick={() => {
          setState({
            second: true,
            first: false,
            third: false,
          });
        }}
        className="w-full sm:w-1/3 h-full flex   items-center justify-center gap-x-2 transition-all ease-out duration-300 "
        style={{
          backgroundColor: state.second ? "#FACA15" : "white",
          color: state.second && "white",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6673 15.1667H2.00065C1.36065 15.1667 0.833984 14.64 0.833984 14V5.33337C0.833984 2.38671 2.38732 0.833374 5.33398 0.833374H10.6673C13.614 0.833374 15.1673 2.38671 15.1673 5.33337V10.6667C15.1673 13.6134 13.614 15.1667 10.6673 15.1667ZM5.33398 1.83337C2.94732 1.83337 1.83398 2.94671 1.83398 5.33337V14C1.83398 14.0934 1.90732 14.1667 2.00065 14.1667H10.6673C13.054 14.1667 14.1673 13.0534 14.1673 10.6667V5.33337C14.1673 2.94671 13.054 1.83337 10.6673 1.83337H5.33398Z"
            fill="#6B7280"
          />
          <path
            d="M11.3327 6.83337H4.66602C4.39268 6.83337 4.16602 6.60671 4.16602 6.33337C4.16602 6.06004 4.39268 5.83337 4.66602 5.83337H11.3327C11.606 5.83337 11.8327 6.06004 11.8327 6.33337C11.8327 6.60671 11.606 6.83337 11.3327 6.83337Z"
            fill="#6B7280"
          />
          <path
            d="M9.33268 10.1666H4.66602C4.39268 10.1666 4.16602 9.93996 4.16602 9.66663C4.16602 9.39329 4.39268 9.16663 4.66602 9.16663H9.33268C9.60602 9.16663 9.83268 9.39329 9.83268 9.66663C9.83268 9.93996 9.60602 10.1666 9.33268 10.1666Z"
            fill="#6B7280"
          />
        </svg>

        <span>کارنامه</span>
      </button>
      <button
        onClick={() => {
          setState({
            second: false,
            first: false,
            third: true,
          });
        }}
        className="w-full sm:w-1/3 h-full flex   items-center justify-center gap-x-2 transition-all ease-out duration-300 max-sm:rounded-b-[15px] sm:rounded-tl-[15px] sm:rounded-bl-[15px]"
        style={{
          backgroundColor: state.third ? "#FACA15" : "white",
          color: state.third && "white",
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
            d="M15.666 12.95H8.66602C8.25602 12.95 7.91602 12.61 7.91602 12.2C7.91602 11.79 8.25602 11.45 8.66602 11.45H15.666C16.076 11.45 16.416 11.79 16.416 12.2C16.416 12.61 16.076 12.95 15.666 12.95Z"
            fill="#6B7280"
          />
          <path
            d="M13.046 16.95H8.66602C8.25602 16.95 7.91602 16.61 7.91602 16.2C7.91602 15.79 8.25602 15.45 8.66602 15.45H13.046C13.456 15.45 13.796 15.79 13.796 16.2C13.796 16.61 13.456 16.95 13.046 16.95Z"
            fill="#6B7280"
          />
          <path
            d="M14.666 6.75H10.666C9.70602 6.75 7.91602 6.75 7.91602 4C7.91602 1.25 9.70602 1.25 10.666 1.25H14.666C15.626 1.25 17.416 1.25 17.416 4C17.416 4.96 17.416 6.75 14.666 6.75ZM10.666 2.75C9.67602 2.75 9.41602 2.75 9.41602 4C9.41602 5.25 9.67602 5.25 10.666 5.25H14.666C15.916 5.25 15.916 4.99 15.916 4C15.916 2.75 15.656 2.75 14.666 2.75H10.666Z"
            fill="#6B7280"
          />
          <path
            d="M15.666 22.7501H9.66602C4.04602 22.7501 2.91602 20.1701 2.91602 16.0001V10.0001C2.91602 5.44005 4.56602 3.49005 8.62602 3.28005C9.02602 3.26005 9.39602 3.57005 9.41602 3.99005C9.43602 4.41005 9.11602 4.75005 8.70602 4.77005C5.86602 4.93005 4.41602 5.78005 4.41602 10.0001V16.0001C4.41602 19.7001 5.14602 21.2501 9.66602 21.2501H15.666C20.186 21.2501 20.916 19.7001 20.916 16.0001V10.0001C20.916 5.78005 19.466 4.93005 16.626 4.77005C16.216 4.75005 15.896 4.39005 15.916 3.98005C15.936 3.57005 16.296 3.25005 16.706 3.27005C20.766 3.49005 22.416 5.44005 22.416 9.99005V15.9901C22.416 20.1701 21.286 22.7501 15.666 22.7501Z"
            fill="#6B7280"
          />
        </svg>

        <span>نمره فنی</span>
      </button>
    </div>
  );
};

export default SinglePageRow;
