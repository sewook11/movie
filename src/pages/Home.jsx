import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_URL = "https://api.themoviedb.org/3/movie/popular?language=ko-KR";
const API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    })
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error("오류 발생:", err));
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-white text-3xl font-bold mb-6">인기 영화</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
