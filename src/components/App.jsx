import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Cast from "pages/MovieDetails/Cast";
import Reviews from "pages/MovieDetails/Reviews";
import { Routes, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>

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
