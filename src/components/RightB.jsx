import React from "react";
import map from "./Access/map.jpg";

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
        <div className="flex gap-10 font-bold">
          <button className="p-2 border rounded-full mb-5">Open Space</button>
          <p className="">In-Space</p>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="border w-[30rem] p-2 mb-5 rounded-2xl"
        />

        <p className="font-bold text-xl"> Most common object</p>
        <button className="border w-50 rounded shadow mt-2 p-2 text-black">
          OpenSpace boundry
        </button>
        <div>
          {/* Using map generator :https://google-map-generator.com/ */}
          <iframe
            style={{ width: 500, height: 300 }}
            className="rounded-3xl mt-10"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=523&amp;height=403&amp;hl=en&amp;q=5,bola%20street,lagos%20Ilford+(lagos)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default RightB;
