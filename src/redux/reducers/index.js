const initialState = {
    movielist: [],
    totalResults: 0,
    loading: false,
    error: null
};


export default (state = initialState, action) => {

    switch (action.type) {
        case 'fetchMovieListInitiate':
            return {
                ...state,
                loading: true
            }
        case 'searchedText':
            console.log(action.payload);
            return {
                ...state,
                searchedText: action.payload.Text
            }
        case 'fetchMovieListSuccess':
            return {
                ...state,
                movielist: action.payload.movielist.Search ? action.payload.movielist.Search :[],
                totalResults: action.payload.movielist.totalResults ? action.payload.movielist.totalResults : 0,
                loading: false
            }
        case 'fetchMovieListdummy':
            return {
                ...state,
                loading: true
            }      
        default:
            return state;
    }
}