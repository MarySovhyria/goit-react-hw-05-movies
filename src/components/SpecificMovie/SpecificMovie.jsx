import React, { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useParams, useLocation} from 'react-router-dom';
import { fetchMovieDetails } from 'components/service/API';
import { Title, Image, Container, AdditionalInf } from './SpecificMovie.styled';



const SpecificMovie = () => {
  const { movieID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from || '/');


  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movie = await fetchMovieDetails(movieID);
        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [movieID]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const roundedPopularity = Math.round(movieDetails.vote_average * 10);
  const genres = movieDetails.genres.map(genre => (
    <span key={genre.id}>{genre.name}</span>
  ));

  return (
    <div>
         <Link to={backLinkHref.current}>
        <button>⬅️ Go back</button>
      </Link>
      <Container>
        <div> 
          <Image
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        </div>
        <div>
          <Title>{movieDetails.title}</Title>
          <p>User score: {roundedPopularity}%</p>
      
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <div>{genres}
        </div>
    </div>
      </Container>
     
    <AdditionalInf>
      <h3>Additional information</h3>
              <ul>
                  <li><Link to="cast">Cast</Link></li>
                  <li> <Link to="reviews">Reviews</Link></li>
              </ul>
    </AdditionalInf>
    
     
      <Outlet />

    </div>
  );
};

export default SpecificMovie; 