import { Route, Routes, Navigate } from 'react-router-dom';
import React, { lazy } from 'react';

import Layout from './Layout/Layout';

const Home = lazy(() => import('../page/Home'));
const Movies = lazy(() => import('../page/Movies'));
const SpecificMovie = lazy(() => import('./SpecificMovie/SpecificMovie'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
