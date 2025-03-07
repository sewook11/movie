import React, { useEffect, useState } from "react";
import MovieCard from "./data/MovieCard";
import movieListData from "./data/movieListData.json";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieListData.results);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-white text-3xl font-bold mb-6">인기 영화</h1>
      <div className="grid grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
            genreIds={movie.genre_ids}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
