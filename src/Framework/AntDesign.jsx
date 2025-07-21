import React from "react";
import { Pagination } from "antd";

// Install Ant Design command and then Run the code Using "npm start"
// npm install antd

const AntDesign = () => {
  return (
    <>
      <Pagination align="start" defaultCurrent={1} total={50} />
      <br />
      <Pagination align="center" defaultCurrent={1} total={50} />
      <br />
      <Pagination align="end" defaultCurrent={1} total={50} />
    </>
  );
};

export default AntDesign;
