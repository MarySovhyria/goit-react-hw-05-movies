import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCast } from 'components/service/API';


const Cast = () => {
  const { movieID } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {

    const movieCast = async () => {
      try {
        const response = await fetchMovieCast(movieID);
        setCast(response);
      } catch (error) {
        console.error(error);
      }
    };

    movieCast();
  }, [movieID]);

  return (
    <>
      {cast.length !== 0 && (
        <div>
          <h2>Movie Cast</h2>
          <ul>
            {cast.map(actor => (
              <li key={actor.id}>
                <img
                  width="200px"
                  height="300px"
                  src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`
                  }
                  alt={actor.original_name}
                />
                <p>{actor.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {cast.length === 0 && <div>We don't have any cast for this movie.</div>}
    </>
  );
};

export default Cast;