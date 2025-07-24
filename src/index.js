import React from "react";
import ReactDOM from "react-dom/client";

// ++++++++++++++++++++++++++ frameworks ++++++++++++++++++++++++++
// import Mui from './FrameWork/Mui.jsx';
// import AntDesign from './FrameWork/AntDesign.jsx';
// import Bootstrap from './FrameWork/Bootstap.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';

// ++++++++++++++++++++++++++ CSS Types ++++++++++++++++++++++++++
// import Home from "./CSS Types/Home.jsx";

// +++++++++++++++++++++++++ Hooks +++++++++++++++++++++++++++++++++
// import UseState from "./Hooks/01_UseState";
// import Use_State from "./Hooks/Use_State.jsx";
// import Onchange from "./Hooks/02_Onchange";
// import Onreference from "./Hooks/03_Onreference.jsx";
// import Map from "./Hooks/04_Map.jsx";
// import Memo from "./Hooks/05_Memo";
// import Count from "./Hooks/06_Count.jsx";
import Context from "./Hooks/07_Context.jsx";
import CreateContext1 from "./Hooks/CreateContext1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* FrameWork :------------ */}
    {/* <Mui /> */}
    {/* <AntDesign /> */}
    {/* <Bootstrap /> */}

    {/* CSS Types :-------------------*/}
    {/* <Home /> */}

    {/* Hooks : ------------------------- */}
    {/* <UseState /> */}
    {/* <Use_State /> */}
    {/* <Onchange /> */}
    {/* <Onreference /> */}
     {/* <Map /> */}
    {/* <Memo /> */}
    {/* <Count /> */}
    <Context />
    <CreateContext1 />
    
  </>
);
