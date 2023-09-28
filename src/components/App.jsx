import HomePage from "pages/HomePage";
import MovieDetailsPage from "pages/MovieDetailsPage";
import MoviesPage from "pages/MoviesPage";
import { NavLink, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>
      
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/:movieId" element={<MovieDetailsPage/>}></Route>
      </Routes>
    </div>
  );
};
