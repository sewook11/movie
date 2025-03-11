import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); 
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-bold">
        MovieApp
      </Link>

      <button className="lg:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <div className={`lg:flex items-center ${menuOpen ? "block" : "hidden"} w-full lg:w-auto`}>
        <form onSubmit={handleSearch} className="flex mt-4 lg:mt-0">
          <input
            type="text"
            placeholder="영화 검색..."
            className="px-2 py-1 rounded-l bg-gray-700 text-white border-none outline-none w-full lg:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="px-3 py-1 bg-blue-500 text-white rounded-r hover:bg-blue-600"
          >
            검색
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
