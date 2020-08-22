import React from "react";
import Sidebar from "./component/Sidebar";
import Content from "./component/Content";
import { StateProvider } from "./StateProvider";
import "./styles.css";

const App = props => {
  return (
    <div className="container">
      <StateProvider>
        <Sidebar />
        <Content />
      </StateProvider>
    </div>
  );
};

export default App;
