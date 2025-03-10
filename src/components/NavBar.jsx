import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">OZ무비</Link>
      <div>
        <Link to="/" className="px-4 py-2 bg-gray-700 rounded mr-2">홈</Link>
        <button className="px-4 py-2 bg-purple-600 rounded">로그인</button>
      </div>
    </nav>
  );
};

export default NavBar;
