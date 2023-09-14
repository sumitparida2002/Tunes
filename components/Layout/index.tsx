import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

import MusicPlayer from "../MusicPlayer";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex bg-[#F9F9F9] text-[#9C9CA0] ">
      <Sidebar />
      <div className="flex flex-col w-[100%] z-[0]">
        <Header />
        {children}
      </div>
      <div className="fixed bottom-0  z-[3] w-[100%]">
        <MusicPlayer />
      </div>
    </div>
  );
};

export default Layout;
