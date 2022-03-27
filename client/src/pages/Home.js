import React from "react";
import Navbar from "../common/Navbar";
import homeImg from "../assets/img/peeps3.svg";

export const Home = () => {
  return (
    <div className="mt-10 flex justify-center gap-28 items-center">
      <div>
        <img className="h-96 w-52" src={homeImg} alt="" />
      </div>
      <div className="flex justify-center items-center border border-gray-300 h-80 w-96 shadow-md rounded-md">
        <div className="flex flex-col justify-start">
          <p className="text-4xl ">
            Social Platform for <br /> Developers
          </p>

          <a
            className="text-xl text-[#01befe] font-semibold underline mt-4"
            href="/scorpian-page"
          >
            Find Developers now
          </a>
        </div>
      </div>
    </div>
  );
};
