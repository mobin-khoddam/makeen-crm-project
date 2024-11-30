import MentorForm from "./MentorForm";

const AddMentorComponent = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="flex items-center gap-x-2 justify-normal">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0002 23.2501C11.3302 23.2501 10.6502 23.0801 10.0502 22.7301L4.11016 19.3001C2.91016 18.6001 2.16016 17.3101 2.16016 15.9201V9.08011C2.16016 7.69011 2.91016 6.40011 4.11016 5.70011L10.0502 2.27012C11.2502 1.57012 12.7402 1.57012 13.9502 2.27012L19.8902 5.70011C21.0902 6.40011 21.8402 7.69011 21.8402 9.08011V15.9201C21.8402 17.3101 21.0902 18.6001 19.8902 19.3001L13.9502 22.7301C13.3502 23.0801 12.6702 23.2501 12.0002 23.2501ZM12.0002 3.2501C11.5902 3.2501 11.1702 3.3601 10.8002 3.5701L4.86016 7.0001C4.12016 7.4301 3.66016 8.22011 3.66016 9.08011V15.9201C3.66016 16.7701 4.12016 17.5701 4.86016 18.0001L10.8002 21.4301C11.5402 21.8601 12.4602 21.8601 13.2002 21.4301L19.1402 18.0001C19.8802 17.5701 20.3402 16.7801 20.3402 15.9201V9.08011C20.3402 8.23011 19.8802 7.4301 19.1402 7.0001L13.2002 3.5701C12.8302 3.3601 12.4102 3.2501 12.0002 3.2501Z"
            fill="#5C5353"
          />
          <path
            d="M11.9999 12.2498C10.2999 12.2498 8.91992 10.8698 8.91992 9.1698C8.91992 7.4698 10.2999 6.08984 11.9999 6.08984C13.6999 6.08984 15.0799 7.4698 15.0799 9.1698C15.0799 10.8698 13.6999 12.2498 11.9999 12.2498ZM11.9999 7.58984C11.1299 7.58984 10.4199 8.2998 10.4199 9.1698C10.4199 10.0398 11.1299 10.7498 11.9999 10.7498C12.8699 10.7498 13.5799 10.0398 13.5799 9.1698C13.5799 8.2998 12.8699 7.58984 11.9999 7.58984Z"
            fill="#5C5353"
          />
          <path
            d="M16 17.9103C15.59 17.9103 15.25 17.5703 15.25 17.1603C15.25 15.7803 13.79 14.6504 12 14.6504C10.21 14.6504 8.75 15.7803 8.75 17.1603C8.75 17.5703 8.41 17.9103 8 17.9103C7.59 17.9103 7.25 17.5703 7.25 17.1603C7.25 14.9503 9.38 13.1504 12 13.1504C14.62 13.1504 16.75 14.9503 16.75 17.1603C16.75 17.5703 16.41 17.9103 16 17.9103Z"
            fill="#5C5353"
          />
        </svg>
        تعریف استاد جدید
      </h1>
      <MentorForm />
    </div>
  );
};

export default AddMentorComponent;