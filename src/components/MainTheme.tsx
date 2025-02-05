import React, { ReactElement } from "react";
import HeaderMenu from "./navbar/headerMenu";

interface iProps {
  children: ReactElement | ReactElement[];
}

const MainTheme: React.FC<iProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <HeaderMenu />
      <>{children}</>
    </div>
  );
};

export default MainTheme;
