import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies = movies.filter(
    (movie) => movie.title.toLowerCase().includes(query.toLowerCase().trim())
    || movie.description.toLowerCase().includes(query.toLowerCase().trim()),
  );

  return (
    <div className="movies">
      {visibleMovies.map((movie) => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
