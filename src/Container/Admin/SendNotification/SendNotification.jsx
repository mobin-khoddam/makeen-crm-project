import { useState } from "react";
import SendMessage from "./SendMessage";
import NotificationRecords from "./NotificationRecords";

const SendNotification = () => {
  const [state, setState] = useState({
    first: true,
    second: false,
  });
  return (
    <div className="w-full">
      <div className="w-full h-[56px] flex items-center justify-between mt-6 mb-8">
        <button
          onClick={() => setState({ first: true, second: false })}
          style={{
            backgroundColor: state.first && "#FACA15",
            color: state.first && "white",
          }}
          className="w-1/2 h-full bg-white rounded-tr-[15px] rounded-br-[15px] transition-all ease-linear duration-150"
        >
          ارسال پیام{" "}
        </button>
        <button
          onClick={() => setState({ first: false, second: true })}
          style={{
            backgroundColor: state.second && "#FACA15",
            color: state.second && "white",
          }}
          className="w-1/2 h-full bg-white rounded-tl-[15px] rounded-bl-[15px] transition-all ease-linear duration-150"
        >
          سوابق ارسال{" "}
        </button>
      </div>
      {state.first && <SendMessage />}
      {state.second && <NotificationRecords />}
    </div>
  );
};

export default SendNotification;
