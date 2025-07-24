
// -------------------------   Program of UseState Hook in React :----------------------------------------------

import React, { useState } from "react";

const Use_State = () => {
  const [isOn, setison] = useState("flase");
  const bulbOff = "assects/Screenshot 2025-04-18 084001.png";
  const bulbOn = "assects/Screenshot 2025-04-18 084109.png";
  const demo = () => {
    setison(!isOn);
  };
  return (
    <>
    <h1 style={{textAlign:"center"}}>useState Light Example :--</h1><hr />
      <h2>Light is {isOn ? "ON" : "OFF"}</h2>
      <img
        src={isOn ? bulbOn : bulbOff}
        alt="Bulb"
        style={{ height: "200px", marginBottom: "20px", width: "300px"}}
      />
      <br />
      <button onClick={demo} >Click Me !</button>
    </>
  );
};

export default Use_State;
