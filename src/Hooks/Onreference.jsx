
// +++++++++++++++++++++++++++++++++++  Onreference Hook in React  +++++++++++++++++++++++++++++++++++++++

import React, { useRef } from "react";

const Onreference = () => {
    var demo = useRef()

    const click = () => {
        console.log(demo);
        // direct console screen par text show : - 
        console.log(demo.current.value);
    }
    return(
        <>
            <h1 style={{textAlign:"center"}}> Onreference Example :</h1>
            <hr />
            <h2>Write Any Text And Show Console Screen :</h2><br />
            <input type="text" ref={demo} /><br /><br />
            <button onClick={click}>Click Me!</button>
        </>
    )
}
export default Onreference;