import React from "react";

const NavB = () => {
  return (
    <div>
      {/* <div className="flex justify-between p-10 m-1">
        <p className="font-bold text-xl">LOGO</p>

        <button className="p-3 rounded-xl border-2 w-24 ">Connect</button>
      </div> */}
      <div className="flex justify-end gap-4 mb-[2rem] mr-[10rem]">
        <p>Objects</p>
        <button className="rounded-2xl border w-28 ">Spaces</button>
        <p>Activities</p>
      </div>
    </div>
  );
};

export default NavB;
