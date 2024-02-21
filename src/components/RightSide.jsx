import React from "react";
import Button from "./shared/Button";

const RightSide = () => {
  return (
    <div
      className=" border-2 
    p-10 rounded-3xl"
    >
      <div className="">
        <h1 className="text-4xl font-bold mb-5"> +Digitaized a new Object</h1>
        <p className="mb-2 font-semibold">
          What new real world thing are you digitizing
        </p>
        <input
          type="text"
          placeholder="Search"
          className="border w-[30rem] p-2 mb-5 rounded-2xl"
        />
        <p className="font-bold text-xl"> Most common object</p>
        <diV className="">
          <button className="p-2 w-20 mx-5 shadow rounded border"> Car</button>
          <button className="p-2 w-20 mx-5 shadow rounded border">
            Building
          </button>
          <button className="p-2 w-20 mx-5 shadow rounded border">Truck</button>
          <button className="p-2 w-35 mx-5 shadow rounded border">
            Electric Pole
          </button>
          <br />
          <button className="p-1 shadow-xl w-20 mx-5 rounded border mt-5">
            Land
          </button>
          {/* <Button text="Car" />
          <Button text="Car" />
          <Button text="Car" />
          <Button text="Car" /> */}
        </diV>
      </div>
    </div>
  );
};

export default RightSide;
