import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("/data/movieListData.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedMovie = data.results.find((m) => m.id.toString() === id);
        setMovie(selectedMovie);
      })
      .catch((err) => console.error("Error loading movie data:", err));
  }, [id]);


  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} className="w-64 rounded-lg mt-4" />
      <p className="mt-4">{movie.release_date} 개봉</p>
      <p className="mt-2">⭐ {movie.vote_average.toFixed(1)}</p>
    </div>
  );
};

export default MovieDetail;
