import {GET_MOVIES, SEARCH_MOVIE, FILTER_MOVIES, ORDER_MOVIES} from './actions'
import {orderMoviesReducer, filterMoviesReducer, searchMovieReducer}from './utils'

const inicialState = {
    allMovies: [],
    movies: [],
    genres: [],
    noHayResultados: true
}

export default function rootReducer( state = inicialState, action ){

    switch(action.type){

        case GET_MOVIES:
            
            return {
                ...state, 
                allMovies: action.payload.results,
                movies: action.payload.results,
                genres: action.payload.genres,
                noHayResultados: action.payload.results.length > 0 ? false : true
            }

        case ORDER_MOVIES:

            return {
                ...state,
                movies: orderMoviesReducer(state, action.payload)

            }

        case SEARCH_MOVIE:

            return {
                ...state,
                movies: searchMovieReducer(state.allMovies, action.payload),
                noHayResultados: state.movies.length > 0 ? false : true
            }

        case FILTER_MOVIES:

            const filterResult= filterMoviesReducer(state.allMovies, action.payload)
            return {
                ...state,
                movies: filterResult,
                noHayResultados: filterResult.length > 0 ? false : true
            }

        default:

            return {
                ...state
            }
            
    }

}