import React from "react";
import car from "./Access/car.avif";

const Digitized = () => {
  return (
    <div className="w-[50%]">
      <div className="flex justify-between mb-10 p-[0.7rem] bg-back w-[100%]   rounded-2xl  outline ">
        <span className="flex">
          <img className="w-10 rounded-2xl" src={car} alt="" />
          <p>Car 248</p>
        </span>
        <p className="text-sky-500 mx-3 ">Edit</p>
      </div>
    </div>
  );
};

export default Digitized;
