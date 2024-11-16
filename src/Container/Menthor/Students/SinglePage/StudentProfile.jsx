import React from "react";

const StudentProfile = ({ profile }) => {
  return (
    <div className="w-[82%] mb-8 h-[65px] px-[24px]  border-[#D1D5DB] border-[1px] border-solid rounded-[10px] bg-[#F9FAFB] mx-auto flex justify-between items-center">
      <div className="flex text-[#00008B] text-[16px] items-center gap-x-4">
        <img src={profile.img} className="rounded-full" alt="" />
        <span>{profile.two}</span>
      </div>
      <div className="text-[#6B7280] text-[16px]">دانشجوی دوره ui/ux 14 </div>
    </div>
  );
};

export default StudentProfile;
