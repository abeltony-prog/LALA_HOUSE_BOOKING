import { Search, X } from "lucide-react";
import React from "react";

export default function SearchProperties({filters , handleSearchChanges} : any) {
  return (
    <>
      <div className="flex flex-1 items-center gap-2">
        <Search className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          id="search"
          onChange={handleSearchChanges}
value={filters?.search}
          placeholder="Park|Guel, Barcelona"
          className="w-full text-lg outline-none"
        />
      </div>
      <button className="rounded-full p-2 hover:bg-gray-100">
        <X className="h-5 w-5 text-gray-600" />
      </button>
    </>
  );
}
