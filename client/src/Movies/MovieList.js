import React from 'react';
import { useHistory } from 'react-router-dom'
import MovieCard from './MovieCard'

export default function MovieList({movies}) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie}/>
      ))}
    </div>
  );
}

function MovieDetails({movie}) {
  const history = useHistory()

  const handleMovieClick = (id) => {
    history.push(`/movies/${id}`)
  }

  return (
    <MovieCard movie={movie} handleMovieClick={handleMovieClick}/>
  );
}
