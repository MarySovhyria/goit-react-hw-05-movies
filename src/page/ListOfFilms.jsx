import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const ListOfFilms = ( {films} ) => {
    const location = useLocation();

    return (
            <ul>
            {   films.map(movie => (
            <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}
                 state={{ from: location }}>
                {movie.title}
                </Link>
                
                </li>
            ))
             }
            </ul>
    )
   
}
export default ListOfFilms;