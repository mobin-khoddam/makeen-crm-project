const StudentProfile = ({ profile }) => {
  return (
    <div className="w-[82%] mb-8 h-[65px] px-[24px]  border-[#D1D5DB] border-[1px] border-solid rounded-[10px] bg-[#F9FAFB] mx-auto flex justify-between items-center">
      <div className="flex text-[#00008B] text-[13px] max-sm:text-[10px] md:text-[16px] items-center gap-x-4">
        <img
          src={profile.img}
          className="rounded-full w-[30px] md:w-[46px] "
          alt=""
        />

        <span>{profile.two ? profile.two : profile.fullName}</span>
      </div>
      <div className="text-[#6B7280] text-[13px] md:text-[16px] max-sm:text-[10px]">
        {" "}
        {profile.courseName && profile.courseNumber
          ? `دانشجوی دوره : ${profile.courseName} ${profile.courseNumber}`
          : "دانشجوی دوره ui/ux 14"}
      </div>
    </div>
  );
};

export default StudentProfile;
