
// +++++++++++++++++++++++++++++++++ OnChange Hook in React +++++++++++++++++++++++++++++++++++++++++++

import React, { useState } from "react";

const Onchange = () => {
    // Print <h2> code :----
    var [data, setdata] = useState('')
    const mychange = (demo) => {
        console.log(demo)
        setdata(demo.target.value)
    }

    // Print console screen :----------
    // Type Any text in input box and check console screen----
    // const demo = (data) => {
    //     console.log("Hello");
    // }    

    return(
        <>
            <h1 style={{textAlign:"center"}}>OnChange Hook Example :--</h1>
            <hr />
            {/* print <h2> code :----- */}
            <h3>Write Any Text :--</h3>
            <h2>{data}</h2>
            <input type="text" onChange={mychange} />

             {/* Print in console screen */}
             {/* <input type="text" onChange={demo} /> */}
        </>
    )
}
export default Onchange;