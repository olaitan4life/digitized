import React from "react";

const RightB = () => {
  return (
    <div
      className=" border-2 
    p-10 rounded-3xl"
    >
      <div className="">
        <h1 className="text-4xl font-bold mb-4"> +Digitaized a new Object</h1>
        <p className="mb-2 font-semibold">
          What new real world thing are you digitizing
        </p>
        <input
          type="text"
          placeholder="Search"
          className="border w-[30rem] p-2 mb-5 rounded-2xl"
        />
        <p className="font-bold text-xl"> Most common object</p>
        <button className="border w-50 rounded shadow mt-2 p-2 text-black">
          OpenSpace boundry
        </button>
      </div>
    </div>
  );
};

export default RightB;
