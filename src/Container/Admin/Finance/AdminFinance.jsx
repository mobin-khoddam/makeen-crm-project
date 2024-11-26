import React, { useState } from "react";
import StudentsFinance from "./StudentsFinance";
import LatestTransactions from "./LatestTransactions";
import Arrears from "./Arrears";

const AdminFinance = () => {
  const [state, setState] = useState({
    first: true,
    second: false,
    third: false,
  });
  return (
    <div className="w-full">
      <div className="w-full h-[56px] flex items-center justify-between mt-6 mb-8">
        <button
          onClick={() => setState({ first: true, second: false, third: false })}
          style={{
            backgroundColor: state.first && "#FACA15",
            color: state.first && "white",
          }}
          className="w-1/3 h-full bg-white rounded-tr-[15px] rounded-br-[15px] transition-all ease-linear duration-150"
        >
          دانشجویان
        </button>
        <button
          onClick={() => setState({ first: false, second: true, third: false })}
          style={{
            backgroundColor: state.second && "#FACA15",
            color: state.second && "white",
          }}
          className="w-1/3 h-full bg-white  transition-all ease-linear duration-150"
        >
          آخرین تراکنش ها
        </button>
        <button
          onClick={() => setState({ first: false, second: false, third: true })}
          style={{
            backgroundColor: state.third && "#FACA15",
            color: state.third && "white",
          }}
          className="w-1/3 h-full bg-white rounded-tl-[15px] rounded-bl-[15px] transition-all ease-linear duration-150"
        >
          معوقی ها{" "}
        </button>
      </div>
      {state.first && <StudentsFinance />}
      {state.second && <LatestTransactions />}
      {state.third && <Arrears />}
    </div>
  );
};

export default AdminFinance;
