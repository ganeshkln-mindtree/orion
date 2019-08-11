import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './List';



class Movielist extends Component {
   
    render() {
        const { movielist, totalResults, loading, searchedText } = this.props;
        return (<div className="mainContent">
            <h1 className="searchNote">You searched for: {searchedText},{totalResults} results found</h1>
            {loading && <div class="loader">Loading</div>}
    {!loading && <div>{movielist.map(movie => <List movie={movie} />)}</div>}
    
    </div>);
    }
}
const mapStateToProps = state => ({
    movielist: state.movielist,
    totalResults: state.totalResults,
    searchInput: state.searchInput,
    loading: state.loading,
    searchedText: state.searchedText
});
export default connect(mapStateToProps)(Movielist);