import React from 'react';  
import { useDispatch, useSelector } from 'react-redux';

const Mystore = () => {
    var mymsg = useSelector ((state) => state.Greetingmsg);
    var dispatch = useDispatch();

    const handleclick = () => {
        dispatch({
            type : 'msg'
        })
    }
    return(
        <>
            <h2>{mymsg}</h2>
            <button onClick={handleclick}>Click Me!</button>
        </>
    )
}

export default Mystore;