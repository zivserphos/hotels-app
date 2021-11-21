import React from "react";
import ToolBar from "./ToolBar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <ToolBar />
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
