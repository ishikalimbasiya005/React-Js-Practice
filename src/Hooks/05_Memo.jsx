
// ++++++++++++++++++++++++++++++++++++ Memo Hook Example +++++++++++++++++++++++++++++++++++++

import React, { useMemo, useState } from "react";

const Memo = () => {
  var [demo, setdemo] = useState(0);
  var [demo2, setdemo2] = useState(0);

  const count = () => {
    setdemo(demo + 1);
  };

  const item = () => {
    setdemo2(demo2 + 1);
  };

  var mydemo = useMemo(
    function hello() {
      console.log("hello changes is show");
    },
    [demo2]
  );
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Memo Hook Example</h1>
      <hr />

      <h3>Click The Button And Show Changes In Console Screen : </h3>
      {mydemo}
      <h2>count : {demo}</h2>
      <button onClick={count}>Count</button>

      <h2>item : {demo2}</h2>
      <button onClick={item}>item</button>
    </>
  );
};

export default Memo;
