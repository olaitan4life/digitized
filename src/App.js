import React, { useState } from "react";
import Nav from "./components/Nav";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import NavB from "./components/NavB";
import RightB from "./components/RightB";

const App = () => {
  const [clickedButton, setClickedButton] = useState("");
  const clicked = (button) => {
    setClickedButton(button);
  };

  return (
    <div className="mx-auto">
      {clickedButton === "object" && <Nav />}
      {clickedButton === "space" && <NavB />}

      <div className="flex justify-center gap-10 w[50%] ">
        <LeftSide clicked={clicked} />
        {clickedButton === "space" && <RightB />}
        {clickedButton === "object" && <RightSide />}
      </div>
    </div>
  );
};

export default App;
