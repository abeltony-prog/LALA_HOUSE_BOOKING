import SearchProperties from "@components/Filters/searchbar";
import Sidebar from "@components/Navbars/Sidebar";
import { MyProvider } from "context/auth";
import { useSession } from "next-auth/react";
import React, { ReactElement, useState } from "react";
import {
  useGetAllPropertiesQuery,
  useGetUsersQuery,
} from "src/graphql/generated/graphql";

interface iProps {
  children: ReactElement | ReactElement[];
}

const ParentTheme: React.FC<iProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const { data: userDetails, refetch } = useGetUsersQuery({
    email: session?.user?.email,
  });

  // console.log(userDetails);
  const [filters, setFilters] = useState({
    search: "",
    type: "All",
  });

  const [PageTab, setPageTab] = useState("Properties");

  const { data: AllProperties, refetch: ReloadProperties } =
    useGetAllPropertiesQuery();

  const handleSearchChanges = (e: any) => {
    setFilters({
      ...filters,
      [e.target.id]: e.target.value,
    });
  };

  // Apply filters dynamically
  const filteredProperties = AllProperties?.properties.filter((property) => {
    return (
      (!filters.search ||
        property.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        property.per.toLowerCase().includes(filters.search.toLowerCase()) ||
        property.beds.toLowerCase().includes(filters.search.toLowerCase())) &&
      (filters.type === "All" || property.type === filters.type) // Show all properties if "All" is selected
    );
  });

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b p-4">
        <SearchProperties
          filters={filters}
          handleSearchChanges={handleSearchChanges}
        />
      </header>

      <div className="flex flex-1">
        <>
          {" "}
          <Sidebar
            setPageTab={setPageTab}
            refetch={refetch}
            setFilters={setFilters}
            PageTab={PageTab}
            filters={filters}
            SessionDetails={{
              details: session?.user,
              status: status,
              User: userDetails?.users[0],
            }}
          />
          <MyProvider
            value={{
              userInfo: userDetails?.users[0],
              Properties: filteredProperties,
              refetch: ReloadProperties,
              PageTab: PageTab,
            }}
          >
            {children}
          </MyProvider>
        </>
      </div>
    </div>
  );
};

export default ParentTheme;
