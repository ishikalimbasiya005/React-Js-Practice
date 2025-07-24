
// +++++++++++++++++++++++++++++++++++++++ UseState Hook in React +++++++++++++++++++++++++++++++++++++++++++

// USE OF :---- use of varible in globally OR make a state

import React, { useState } from "react";

const UseState = () => {
        const [name , setname] =useState('hello');
    const hello = () => {
        setname("hello world!");
    }
    return(
        <>
            <h1 style={{textAlign:"center"}}>UseState Example :--</h1>
            <hr />
            <h2>{name}</h2>
            <button onClick={hello}> Click me!</button>
        </>
    )
}

export default UseState;