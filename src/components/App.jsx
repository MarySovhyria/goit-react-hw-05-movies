import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../page/Home';
import SpecificMovie from './SpecificMovie/SpecificMovie';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Layout from './Layout/Layout';
import Movies from '../page/Movies';

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieID" element={<SpecificMovie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
  
  )
}
