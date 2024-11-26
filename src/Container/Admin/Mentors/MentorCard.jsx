const MentorCard = ({ data }) => {
  return (
    <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8  mb-[62px]">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="max-w-[292px] p-6 w-[100%] h-[343px] rounded-[10px] bg-white mx-auto"
          >
            <div className=" w-full flex flex-col justify-between items-start gap-y-[15px]  ">
              <div className="flex w-full items-center justify-between  mb-[8px]">
                <span className="text-[#4318FF] text-[16px] ">
                  {item.mentor}{" "}
                </span>
                <span className="text-[#4318FF] text-[16px]">
                  {item.course}
                </span>
              </div>
              <div className="flex w-full items-center justify-between text-[14px]">
                <span className=" text-[#3A3A3A] font-[400px]">
                  {item.courseCount}
                </span>
                <span className="text-[#3A3A3A] font-semibold">
                  {item.courseCountValue}
                </span>
              </div>
              <div className="flex w-full items-center justify-between text-[14px]">
                <span className=" text-[#3A3A3A] font-[400px]">
                  {item.allMembers}
                </span>
                <span className="text-[#3A3A3A] font-semibold">
                  {item.allMembersValue}
                </span>
              </div>
              <div className="flex w-full items-center justify-between text-[14px]">
                <span className=" text-[#3A3A3A] font-[400px]">
                  {item.activeStudents}
                </span>
                <span className="text-[#3A3A3A] font-semibold">
                  {item.countActiveStudents}
                </span>
              </div>
              <div className="flex w-full items-center justify-between text-[14px]">
                <span className=" text-[#3A3A3A] font-[400px]">
                  {item.graduateds}
                </span>
                <span className="text-[#3A3A3A] font-semibold">
                  {item.graduatedsValue}
                </span>
              </div>
              <div className="flex w-full items-center justify-between text-[14px]">
                <span className=" text-[#3A3A3A] font-[400px]">
                  {item.hierds}
                </span>
                <span className="text-[#3A3A3A] font-semibold">
                  {item.hierdsCount}
                </span>
              </div>
              <div className="flex w-full items-center justify-between text-[14px]">
                <span className=" text-[#3A3A3A] font-[400px]">
                  {item.quiteds}
                </span>
                <span className="text-[#3A3A3A] font-semibold">
                  {item.quitedsCount}
                </span>
              </div>
              <div className="flex w-full items-center justify-between text-[14px]">
                <span className=" text-[#3A3A3A] font-[400px]">
                  {item.fireds}
                </span>
                <span className="text-[#3A3A3A] font-semibold">
                  {item.firedsCount}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MentorCard;
