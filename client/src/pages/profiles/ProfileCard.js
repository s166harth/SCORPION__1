import React from "react";

export const ProfileCard = () => {
  return (
    <div className="w-64 my-3 rounded-lg h-52 border border-gray-300">
      <div className="flex justify-center items-center ">
        <div>
          <img className="w-24 h-24 rounded-md bg-gray-50" src="" alt="" />
        </div>
      </div>
      <p>name</p>
      <p>description</p>
      <button className="border text-sm font-semibold border-gray-300 py-2 px-3">
        upvote
      </button>
      <button className="border text-sm font-semibold border-gray-300 py-2 px-3">
        downvote
      </button>
    </div>
  );
};
