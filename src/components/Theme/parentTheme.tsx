import SearchProperties from "@components/Filters/searchbar";
import Sidebar from "@components/Navbars/Sidebar";
import { useSession } from "next-auth/react";
import React, { ReactElement } from "react";
import { useGetUsersQuery } from "src/graphql/generated/graphql";

interface iProps {
  children: ReactElement | ReactElement[];
}

const ParentTheme: React.FC<iProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const {data:userDetails} = useGetUsersQuery({
    email: session?.user?.email
  })
  console.log(userDetails);
  
  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b p-4">
        <SearchProperties />
      </header>

      <div className="flex flex-1">
        <>
          {" "}
          <Sidebar SessionDetails={{
            details : session?.user,
            status: status,
            User:userDetails?.users[0]
          }} />
          {children}
        </>
      </div>
    </div>
  );
};

export default ParentTheme;
