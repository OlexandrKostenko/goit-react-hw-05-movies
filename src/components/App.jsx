import { lazy, Suspense } from "react";
import Cast from "pages/MovieDetails/Cast/Cast";
import Reviews from "pages/MovieDetails/Reviews/Reviews";
import { Routes, Route } from "react-router-dom";
import { NavItem, NavWrapper } from "./App.styled";

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <div>
      <NavWrapper>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </NavWrapper>

      <Suspense fallback={<p>Loading...</p>}>
      <Routes basename='goit-react-hw-05-movies'>
      
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
        
      <Route path="/movies/:id" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} /> 
      </Route>
      
      <Route path='*' element={<Home />} />  
      </Routes>
      </Suspense>
    
    </div>
  );
};
