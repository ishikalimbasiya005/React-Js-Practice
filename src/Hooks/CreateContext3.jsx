import React, {  useContext } from "react";
import Context from "./Context";

const CreateContext3 = () => {
    var demo = useContext(Context)
    return(
        <>
             <h2>CreateContext3 {demo}</h2>
        </>
    )
}

export default CreateContext3;