import { Search, X } from "lucide-react";
import React from "react";

export default function SearchProperties() {
  return (
    <>
      <div className="flex flex-1 items-center gap-2">
        <Search className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Park|Guel, Barcelona"
          className="outline-none w-full text-lg"
        />
      </div>
      <button className="rounded-full p-2 hover:bg-gray-100">
        <X className="h-5 w-5 text-gray-600" />
      </button>
    </>
  );
}
