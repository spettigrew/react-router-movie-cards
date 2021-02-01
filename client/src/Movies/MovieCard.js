import React from 'react';
import { useParams } from 'react-router-dom';

export default function MovieCard ({movie, handleMovieClick}) {
  const {id} = useParams();
  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper" onClick={() => handleMovieClick(movie.id)}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        {id && (
          <>
            <h3>Actors</h3>
            {id && stars.map(star => (
              <div key={star} className="movie-star">
                {star}
              </div>
            ))}
          <div className="save-button">Save</div>
          </>
        )}

      </div>
    </div>
  );
}