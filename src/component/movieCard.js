import React from "react";
import "./searchMovie.css";
import Moment from 'react-moment';

const MovieCard = (props) => {
  return (
    <div className="card" key={props.movie.id}>
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`}
        alt={props.movie.title + " poster"}
      />
      <div className="card--content">
        <h3 className="card--title">{props.movie.title}</h3>
        <p>
          <small className="date">
            RELEASE DATE: <Moment format="MMMM Do, YYYY">{props.movie.release_date}</Moment>
          </small>
        </p>
        <p>
          <small className="rating">RATING: {props.movie.vote_average}</small>
        </p>
        <p className="card-desc">{props.movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
