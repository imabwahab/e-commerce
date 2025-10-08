import React from "react";
import type { Member } from "../assets/assets";

interface MemberProps {
  member: Member
}


const ProfileCardServices: React.FC<MemberProps> = ({ member }) => {
  return (
    <>

      <div className="max-w-80 min-w-70   rounded-2xl">
        <div className="relative -mt-px overflow-hidden rounded-2xl">
          <img src={member.image} alt="" className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
          <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
        </div>
        <div className="px-4 pb-4">
          <p className="mt-4 text-lg font-semibold text-gray-600">{member.name}</p>
          <p className="text-sm font-medium text-gray-500">{member.designation}</p>
        </div>
      </div>
    </>
  );
};


export default ProfileCardServices;