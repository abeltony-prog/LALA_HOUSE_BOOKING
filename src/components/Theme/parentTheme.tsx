import SearchProperties from "@components/Filters/searchbar";
import Sidebar from "@components/Navbars/Sidebar";
import { MyProvider } from "context/auth";
import { useSession } from "next-auth/react";
import React, { ReactElement } from "react";
import { useGetUsersQuery } from "src/graphql/generated/graphql";

interface iProps {
  children: ReactElement | ReactElement[];
}

const ParentTheme: React.FC<iProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const {data:userDetails , refetch} = useGetUsersQuery({
    email: session?.user?.email
  })  
  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b p-4">
        <SearchProperties />
      </header>

      <div className="flex flex-1">
        <>
          {" "}
          <Sidebar refetch={refetch} SessionDetails={{
            details : session?.user,
            status: status,
            User:userDetails?.users[0]
          }} />
          <MyProvider value={{userInfo : userDetails?.users[0]}}>
          {children}
          </MyProvider>
        
        </>
      </div>
    </div>
  );
};

export default ParentTheme;
