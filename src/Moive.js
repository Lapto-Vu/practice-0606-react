import React from "react"

function Movie({key, id, year, title, summary, poster}) {
    return (<div className="container">
        <div className="container__image">
            <img src={poster} alt={title}></img>
        </div>
        <div className="container__text">
            <h2>{title}</h2>
            <h3>{summary.slice(0,150)}...</h3>
        </div>
            </div>);
}

export default Movie;