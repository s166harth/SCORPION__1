import React from "react";
import { ProfileCard } from "./ProfileCard";

export const ScorpianPage = () => {
  return (
    <div className="p-4 mx-5">
      <div>
        <p className="text-2xl text-[#01befe] font-semibold underline ">
          Top Four Profiles
        </p>
        <ProfileCard />
      </div>
      <div>
        <p className="text-2xl text-[#01befe] font-semibold underline mt-3">
          Profiles
        </p>
        <ProfileCard />
      </div>
    </div>
  );
};
