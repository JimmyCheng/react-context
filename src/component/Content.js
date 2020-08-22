import React from "react";
import ButtonList from "./ButtonList";
import Image from "./Image";
import "../styles.css";

const Content = () => {
  console.log("render in content");
  return (
    <div className="content">
      <h1>Hello React Context</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ButtonList />
      <Image />
    </div>
  );
};

export default Content;
