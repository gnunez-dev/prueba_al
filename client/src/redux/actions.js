import axios from 'axios';

//CONSTANTES
export const GET_MOVIES = 'GET_MOVIES';
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const FILTER_MOVIES = 'FILTER_MOVIES';
export const ORDER_MOVIES = 'ORDER_MOVIES';

//GET
export const getMovies = () => {

    return dispatch => {
        return axios.get('http://localhost:3001/?Akelab=123456789')
            .then( movies => dispatch( {type: GET_MOVIES, payload: movies.data} ))
            .catch( error => { return {msg: 'Ha ocurrido un error al tratar de obtener las películas', error}})
    }

}


//SET

export const searchMovie = (search) => {
    return {type: SEARCH_MOVIE, payload: search}
}

export const filterMovie = (filter) => {
    return {type: FILTER_MOVIES, payload: filter}
}
export const orderMovie = (order) => {
    return {type: ORDER_MOVIES, payload: order}
}