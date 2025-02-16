import SearchProperties from "@components/Filters/searchbar";
import Sidebar from "@components/Navbars/Sidebar";
import React, { ReactElement } from "react";

interface iProps {
  children: ReactElement | ReactElement[];
}

const ParentTheme: React.FC<iProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b p-4">
        <SearchProperties />
      </header>

      <div className="flex flex-1">
        <>
          {" "}
          <Sidebar />
          {children}
        </>
      </div>
    </div>
  );
};

export default ParentTheme;
