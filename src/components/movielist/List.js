import React from 'react';
 const List = (props) => {
    return (<div className="productGrid">
        <img src={props.movie.Poster}/>
        <div>Name: {props.movie.Title}</div>
        <div>Year: {props.movie.Year}</div>
        <div>imdbID: {props.movie.imdbID}</div>
        <div>Type: {props.movie.Type}</div>
        </div>
        );
 }

export default List;