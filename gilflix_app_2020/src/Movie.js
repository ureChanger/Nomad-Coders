import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <img className="movie_img" src={poster} alt={title} title={title}></img>
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <h4 className="movie_summary">{summary}</h4>
                <ul className="movie_genres">
                    {
                        genres.map((genre, index) => {
                            return <li key={index} className="movie_genre">{genre}</li>;
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

export default Movie;