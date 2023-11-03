import ListOfFilms from "./ListOfFilms";
import { fetchTrendingMovies } from "components/service/API";
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [trendingFilms, setTrendingFilms] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          try {
            const movies = await fetchTrendingMovies();
            setTrendingFilms(movies); 
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <div>
            <h1>Trending Movies</h1>
            {trendingFilms.length === 0 ? (
                <h2>Sorry, no films to show</h2>

            ) : (
                <ListOfFilms films = {trendingFilms} />
            )
            };
        </div>
    );
    
};
export default Home;