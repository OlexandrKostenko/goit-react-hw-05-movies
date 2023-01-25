import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Cast from "pages/MovieDetails/Cast";
import Reviews from "pages/MovieDetails/Reviews";
import { Routes, Route } from "react-router-dom";
import { NavItem, NavWrapper } from "./App.styled";

export const App = () => {
  return (
    <div>
      <NavWrapper>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </NavWrapper>

    <Routes basename='goit-react-hw-05-movies'>
      <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        
      <Route path="/movies/:id" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} /> 
      </Route>   
    </Routes>
    
    </div>
  );
};
