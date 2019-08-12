import React from 'react';
 const List = (props) => {
    return (<div className="productGrid">
        <img src={props.movie.Poster} onError={(e)=>{e.target.onerror = null; e.target.src="logo192.png"}}/>
        <div>Name: {props.movie.Title}</div>
        <div>Year: {props.movie.Year}</div>
        <div>imdbID: {props.movie.imdbID}</div>
        <div>Type: {props.movie.Type}</div>
        </div>
        );
 }

export default List;