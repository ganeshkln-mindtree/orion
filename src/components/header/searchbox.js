import React from 'react';
import { connect } from 'react-redux';
import fetchMovieList from '../../services';
import {fetchMovieListdummy, searchedText} from '../../redux/Actions';

const Searchbox = (props) => {
    const handleInput = (event) => {
        
            props.dispatch(fetchMovieListdummy(event.target.value));
            props.dispatch(searchedText(event.target.value));
           // props.fetchMovieList(event.target.value);
        
    }
    return (<div><input type='text' size="35" onChange={handleInput} /></div>);
};


export default connect()(Searchbox);

