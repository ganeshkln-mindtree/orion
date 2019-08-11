
export function fetchMovieListSuccess(movielist){
    
    return {type: 'fetchMovieListSuccess', payload:{movielist}}
}
export function searchedText(Text){
    
    return {type: 'searchedText', payload:{Text}}
}

export function fetchMovieListdummy(payload){
    return {type: 'fetchMovieListdummy', payload}
}
