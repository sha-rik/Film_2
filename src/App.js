import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//  http://www.omdbapi.com/?i=tt3896198&apikey=fa49fb96
// const movie = {
//   "Title": "Power Slap: Road to the Title",
//   "Year": "2023–",
//   "imdbID": "tt25697028",
//   "Type": "series",
//   "Poster": "N/A"
// }
const API_URL = " http://www.omdbapi.com?apikey=fa49fb96";
const App = () => {
  const [movie, setmovie] = useState([]);
  const [searchTerm,setsearchTerm]=useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setmovie(data.Search);
    console.log(data.Search);
  }
  useEffect(() => {
    searchMovies('superman')


  }, [])
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movie.length > 0 
        ? (
            <div className='container'>
              <div className='row' >
              {movie.map((movie)=>(
                <div className="col-md-3 my-3">
                <MovieCard key={movie.imdbID} movie={movie} />
                </div>
              ))}
              </div>
            </div>
          ) :(
            <div className='empty'>
              <h2>No Movies Found</h2>
              </div>
      )
      }
  </div>
  );
}
export default App;

