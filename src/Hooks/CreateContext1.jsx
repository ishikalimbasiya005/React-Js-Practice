import React from "react";
import CreateContext2 from "./CraeteContext2";
import Context from "./Context";

const CreateContext1 = () => {
  const name = " HELLO";
  return (
    <>
    {/* USE : Direct copy value 1 and 3 Not changes in file 2 [example is : HELLO] */}
      <h1 style={{ textAlign: "center" }}>Context Hook Example</h1> <hr />
      <Context.Provider value={name}>
        <h2>CreateContext1{name}</h2>
        <CreateContext2 />
      </Context.Provider>
    </>
  );
};

export default CreateContext1;
