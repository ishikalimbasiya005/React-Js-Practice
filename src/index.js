import React from 'react';
import ReactDOM from 'react-dom/client';

// ++++++++++++++++++++++++++ frameworks ++++++++++++++++++++++++++
// import Mui from './Framework/Mui.jsx';
// import AntDesign from './Framework/AntDesign.jsx';
// import Bootstrap from './Framework/Bootstap.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';

// ++++++++++++++++++++++++++ css types ++++++++++++++++++++++++++
import Home from './CSS-Types/Home.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* ++++++++++++++++++++++++++ frameworks ++++++++++++++++++++++++++ */}
    {/* <Mui /> */}
    {/* <AntDesign /> */}
    {/* <Bootstrap /> */}

    {/* ++++++++++++++++++++++++++ css types ++++++++++++++++++++++++++ */}
    <Home />
  </>
);


