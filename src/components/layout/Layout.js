import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="wrapper lg:w-[1200px] w-full min-h-screen mx-auto flex font-body">
      <Sidebar />
      <div className="flex-1 border-r-[1px] border-l-[1px] border-[#e1e4e7] border-solid ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
