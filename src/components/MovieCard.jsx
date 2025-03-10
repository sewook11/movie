import React from "react";
import { Link } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const GENRE_MAP = {
  16: "애니메이션",
  28: "액션",
  12: "모험",
  35: "코미디",
  18: "드라마",
  14: "판타지",
  878: "SF",
  10751: "가족",
  27: "공포",
  53: "스릴러",
  9648: "미스터리",
  10749: "로맨스",
};

const MovieCard = ({ id, title, posterPath, voteAverage, genreIds }) => {
  return (
    <Link
      to={`/details/${id}`}
      className="block bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition"
    >
      <img
        src={`${IMAGE_BASE_URL}${posterPath}`}
        alt={title}
        className="w-full h-60 object-cover rounded-md"
      />
      <h3 className="text-white text-lg font-bold mt-2">{title}</h3>
      <p className="text-gray-400 text-sm">⭐ {voteAverage.toFixed(1)}</p>
      <p className="text-gray-500 text-xs">
        {genreIds.map((id) => GENRE_MAP[id] || "기타").join(", ")}
      </p>
    </Link>
  );
};

export default MovieCard;
