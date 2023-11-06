

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';


import { HandleMovieSearch } from 'service/API';
import { SearchForm } from 'components/SeacrhForm/SearchForm';
import ListOfFilms from 'components/ListOfFilms/ListOfFilms';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  const [loading, setLoading] = useState(false);

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const movies = await HandleMovieSearch(movieName);
        setSearchResults(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [movieName]);

  return (
    <div>
        <SearchForm value={movieName} onChange={updateQueryString} />
        {loading ? (
          <p>Loading...</p>
        ) : searchResults.length === 0 && movieName ? (
          <h2>🔎 Nothing found</h2>
        ) : (
          <ListOfFilms films={searchResults} />
        )}
    </div>
  );
};

export default Movies;