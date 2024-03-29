import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import NavB from "./components/NavB";
import RightB from "./components/RightB";
import Digitized from "./components/Digitized";
import DigitizedObject from "./components/DigitizedObject";

const App = () => {
  const [clickedButton, setClickedButton] = useState("");
  const clicked = (button) => {
    setClickedButton(button);
  };

  return (
    <div className="mx-auto">
      <Nav />
      {clickedButton === "space" && <NavB />}
      {/* {clickedButton === "object" && <Nav />} */}
      {/* {clickedButton === "space" && <NavB />} */}

      <div className="flex justify-center gap-10 w[50%] ">
        <LeftSide clicked={clicked} />
        {clickedButton === "space" && <RightB />}
        {clickedButton === "object" && <RightSide />}
      </div>
    </div>
  );
};

export default App;
