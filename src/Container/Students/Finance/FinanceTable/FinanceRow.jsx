import  { useState } from "react";
import FinanceTable from "./Financetable";
import {
  FineTableBody,
  FineTableRow,
  GraduatioTableRow,
  GraduationTableBody,
  StudentTableBody,
  StudentTableRow,
} from "../FinaceData";

const FinanceRow = () => {
  const [active, setActive] = useState({
    first: false,
    second: true,
    third: false,
    forth: false,
  });
  return (
    <>
      <div className="w-full h-[53px]  rounded-lg  flex justify-normal items-center shadow-sm mb-[52px]">
        <button
          onClick={() =>
            setActive({
              first: true,
              second: false,
              third: false,
              forth: false,
            })
          }
          className="w-1/4 cursor-pointer h-full flex items-center justify-center text-[#6B7280] text-[14px] font-medium transition-all ease-linear duration-150 rounded-tr-lg rounded-br-lg  "
          style={{
            backgroundColor: active.first ? "#FACA15" : "white",
            color: active.first ? "white" : "#6B7280",
          }}
        >
          دانشجویی
        </button>
        <button
          onClick={() =>
            setActive({
              first: false,
              second: true,
              third: false,
              forth: false,
            })
          }
          className="w-1/4 cursor-pointer h-full flex items-center justify-center text-[#6B7280] text-[14px] font-medium transition-all ease-linear duration-150 "
          style={{
            backgroundColor: active.second ? "#FACA15" : "white",
            color: active.second ? "white" : "#6B7280",
          }}
        >
          جریمه
        </button>
        <button
          onClick={() =>
            setActive({
              first: false,
              second: false,
              third: true,
              forth: false,
            })
          }
          className="w-1/4 cursor-pointer h-full flex items-center justify-center text-[#6B7280] text-[14px] font-medium transition-all ease-linear duration-150 "
          style={{
            backgroundColor: active.third ? "#FACA15" : "white",
            color: active.third ? "white" : "#6B7280",
          }}
        >
          فارغ التحصیلی
        </button>
        <button
          disabled

          onClick={() => {
            setActive({
              first: false,
              second: false,
              third: false,
              forth: true,
            });
          }}
          className="w-1/4 cursor-pointer h-full flex items-center justify-center text-[#6B7280] text-[14px] font-medium transition-all ease-linear duration-150 rounded-bl-lg rounded-tl-lg"
          style={{
            backgroundColor: active.forth ? "#FACA15" : "white",
            color: active.forth ? "white" : "#6B7280",
            
          }}
        >
          سایر
        </button>
      </div>

      {active.second && (
        <FinanceTable tableHead={FineTableRow} tableBody={FineTableBody} />
      )}
      {active.first && (
        <FinanceTable
          tableBody={StudentTableBody}
          tableHead={StudentTableRow}
        />
      )}
      {active.third && (
        <FinanceTable
          tableBody={GraduationTableBody}
          tableHead={GraduatioTableRow}
        />
      )}
    </>
  );
};

export default FinanceRow;
