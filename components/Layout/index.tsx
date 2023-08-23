import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex bg-[#F9F9F9] text-[#9C9CA0]">
      <Sidebar/>
      <div className="flex flex-col w-[100%]">
      <Header />
      {children}
      </div>


    </div>
  );
};

export default Layout;