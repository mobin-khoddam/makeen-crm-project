
const FinanceTable = ({ tableHead, tableBody }) => {
  return (
    <div className="overflow-x-auto bg-white ">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr className="bg-[#F9FAFB] border-b border-solid border-[1px] border-[#E5E7EB] h-[64px] ">
            {tableHead.map((elem) => (
              <th className=" text-center" key={elem.id}>
                {elem.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tableBody.map((item) => (
            <tr
              style={{ backgroundColor: item.id % 2 === 0 && "#F9FAFB" }}
              key={item.id}
              className="text-[#3E3838] text-[16px] h-[64px]"
            >
              <th className=" text-center">{item.id}</th>
              <td className=" text-center">{item.usance}</td>
              <td className=" text-center ">{item.paymentTime}</td>
              <td className=" text-center">{item.finePrice}</td>
              <td className=" text-center">{item.depositAmount}</td>
              <td className=" text-center">
                <span
                  style={{
                    color: item.status.includes("شده") ? "#09814A" : "#001EBC",
                    backgroundColor: !item.status.includes("شده") && "#F7F5FF",
                    borderRadius: !item.status.includes("شده") && "10px",
                    paddingRight: !item.status.includes("شده") && "10px",
                    paddingLeft: !item.status.includes("شده") && "10px",
                  }}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinanceTable;
