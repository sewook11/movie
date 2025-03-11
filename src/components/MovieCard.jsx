import React from "react";
import { Link } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ id, title, posterPath, voteAverage }) => {
  return (
    <Link to={`/details/${id}`} className="block bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition">
      <img
        src={`${IMAGE_BASE_URL}${posterPath}`}
        alt={title}
        className="w-full h-60 object-cover rounded-md"
      />
      <h3 className="text-white text-lg font-bold mt-2">{title}</h3>
      <p className="text-gray-400 text-sm">⭐ {voteAverage.toFixed(1)}</p>
    </Link>
  );
};

export default MovieCard;
