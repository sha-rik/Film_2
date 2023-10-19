import React from 'react'

const MovieCard = ({ movie }) => {
    return (


         <div className="card" style={{width: "18rem"}}>
            <img src={movie.Poster!=="N/A" ? movie.Poster : "https://via.placeholder.com/400"} className="card-img-top" alt={movie.Title}/>
            <div className="card-body">
              <h5 className="card-title">{movie.Title} {movie.Year}</h5>
              <p className="card-text">{movie.Type}</p>
            </div>
        </div>
        // <div className='movies'>
        //     <div>
        //         <p>{movie.Year}</p>
        //     </div>

        //     <div>
        //         <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
        //         <h3>{movie.Title}</h3>
        //     </div>
        //     <div>
        //         <span>{movie.Type}</span>
        //         {/* <div>{movie.Type}</div> */}
        //     </div>
        // </div>


    )
}

export default MovieCard
