import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_URL = "https://api.themoviedb.org/3/movie";
const API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error("Error fetching movie details:", err));
  }, [id]);

  if (!movie) return <div className="text-white">영화를 찾을 수 없습니다.</div>;

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="w-64 rounded-lg mt-4"
      />
      <p className="mt-4">{movie.release_date} 개봉</p>
      <p className="mt-2">⭐ {movie.vote_average.toFixed(1)}</p>
      <p className="mt-4">{movie.overview}</p>
    </div>
  );
};

export default MovieDetail;
