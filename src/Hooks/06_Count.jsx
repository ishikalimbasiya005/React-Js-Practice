import React, { useState } from "react";

const Count = () => {
    var [num , setnum] = useState(0)
    const demo = () => {
        setnum(num + 1)
    }
    return(
        <>
            <h1 style={{ textAlign: "center" }}>Count  Example</h1>
            <hr />
           <h2>Count : {num} </h2>
           <button onClick={demo}>Count</button>
        </>
    )
}

export default Count;