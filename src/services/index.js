import Axios from "axios";
import { fetchMovieListSuccess} from '../redux/Actions';
import 'rxjs';
import { Observable, from, observable } from 'rxjs';

import { mergeMap, map, debounceTime,filter, distinctUntilChanged} from 'rxjs/operators';
import { ofType } from 'redux-observable';

/*export default function fetchMovieList(searchInput) {
    return dispatch => {
        return Axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&s="+searchInput+"&page=1").then(function (response) {

            dispatch(fetchMovieListSuccess(response.data));
            return response;
        })
    }
}*/

function fetchMovieList ( action$ ) {
    
    return action$.pipe(ofType('fetchMovieListdummy'),map(action => action.payload),
    filter(query => query.length >= 3),
    debounceTime(500),distinctUntilChanged(),mergeMap(list =>{ return from(
        
           Axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&s="+list+"&page=1")
            
    
            
        ).pipe(map(response=>fetchMovieListSuccess(response.data))) }))
    }
    
    export default fetchMovieList;
    