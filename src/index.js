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
// import UseState from "./Hooks/UseState";
// import Use_State from "./Hooks/Use_State.jsx";
// import Onchange from "./Hooks/Onchange";
// import Onreference from "./Hooks/Onreference.jsx";
// import Memo from "./Hooks/Memo";
// import Map from "./Hooks/Map.jsx";
// import Count from "./Hooks/Count.jsx";
import Context from "./Hooks/Context.jsx";
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
    {/* <Memo /> */}
    {/* <Map /> */}
    {/* <Count /> */}
    <Context />
    <CreateContext1 />
    
  </>
);
