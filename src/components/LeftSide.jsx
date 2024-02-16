import { useState } from "react";
import Button from "./shared/Button";
import image from "./Access/images.jpg";
import car from "./Access/car.jpg";
import Digitized from "./Digitized";
// import { useState } from "react";

const LeftSide = (props) => {
  const [clickedButton, setClickedButton] = useState("");
  const clickObject = (e) => {
    e.preventDefault();
    setClickedButton("object");
    props.clicked("object");
  };

  const clickSpace = (e) => {
    e.preventDefault();
    setClickedButton("space");
    props.clicked("space");
  };
  return (
    <div className="">
      <div>
        <diV>
          <h1 className="text-4xl font-bold">
            Digital version for <br></br>everything
          </h1>
        </diV>
        <div className="flex gap-7 my-5 mt-5 ">
          {/* <span className=" flex items-center bg-black pr-20 p-2 rounded-3xl  text-white "> */}
          <Button
            text="Object"
            className="bg-black text-white outline-none"
            onClick={clickObject}
          />
          {/* </span> */}
          {/* <span> */}
          <Button text="Spaces" className="bg-white" onClick={clickSpace} />
          {/* </span> */}
        </div>
        <div
          className={` p-7 rounded-2xl w-fit mt-5 mb-5 ${
            clickedButton === "space" ? "bg-[#f4d7cb]" : "bg-[#EBFFF9]"
          }`}
        >
          <p className="flex gap-5 font-bold text-3xl ">
            Create a unique digital identity<br></br> and digital twin of real
            world<br></br> things you own on the<br></br> spaceweb
            <img
              className="w-40  rounded-2xl mr-5"
              src={clickedButton === "space" ? car : image}
              alt=""
            />
          </p>
        </div>
        <h2 className="text-3xl font-bold mb-5">Your digital Objects</h2>
        <Digitized />
        <Digitized />
        <Digitized />
      </div>
    </div>
  );
};

export default LeftSide;
