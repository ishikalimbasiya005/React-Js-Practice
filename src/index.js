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
// import Onchange from "./Hooks/02_Onchange";
// import Onreference from "./Hooks/03_Onreference.jsx";
// import Map from "./Hooks/04_Map.jsx";
// import Memo from "./Hooks/05_Memo";
// import Context from "./Hooks/06_Context.jsx";
// import CreateContext1 from "./Hooks/CreateContext1";
// import Count from "./Hooks/Example_Count.jsx";
// import Use_State from "./Hooks/Example_Use_State.jsx";


// +++++++++++++++++++++++++ API +++++++++++++++++++++++++++++++++
import CreateApi from "./API/CreateApi";
import ReadApi from "./API/ReadApi";
import UpdateApi from "./API/UpdateApi";
import Login from "./API/Login";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";


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
    {/* <Onchange /> */}
    {/* <Onreference /> */}
     {/* <Map /> */}
    {/* <Memo /> */}
    {/* <Context />
    <CreateContext1 /> */}
    {/* <Count /> */}
    {/* <Use_State /> */}
    

    {/* API : ------------------------- */}
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Login />
              <CreateApi />
            </>
          }
        />
        <Route path="/ReadApi" element={<ReadApi />} />
        <Route path="/UpdateApi/:id" element={<UpdateApi />} />
      </Routes>
    </BrowserRouter>
  </>
);
