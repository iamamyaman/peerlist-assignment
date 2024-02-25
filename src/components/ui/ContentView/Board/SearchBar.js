import React, { useState } from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="flex bg-white  py-4 w-full">
      <img alt="search icon" src="assets/icons/search.svg" className="mr-3" />
      <input
        className="text-sm text-slate-600 w-full outline-none"
        type="text"
        placeholder="Search candidates"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        // onKeyDown={handleKeyPress}
      />
    </header>
  );
};

export default SearchBar;
