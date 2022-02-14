
export const orderMoviesReducer = (state, payload) => {

    if(payload === 'ascFecha' || payload === 'ascPuntaje'){

        if(payload === 'ascFecha'){
            return state.movies.sort( (a, b) => {
                if( a.release_date > b.release_date ) return 1
                if( b.release_date > a.release_date ) return -1
                return 0
            })
        } else {
            return state.movies.sort( (a, b) => {
                if( a.vote_average > b.vote_average ) return 1
                if( b.vote_average > a.vote_average ) return -1
                return 0
            })
        }


    } else {

        if(payload === 'descFecha'){
            return state.movies.sort( (a, b) => {
                if( a.release_date > b.release_date ) return -1
                if( b.release_date > a.release_date ) return 1
                return 0
            });
        } else {
            return state.movies.sort( (a, b) => {
                if( a.vote_average > b.vote_average ) return -1
                if( b.vote_average > a.vote_average ) return 1
                return 0
            });
        }

    }

}

export const searchMovieReducer = ( allMovies, payload ) => {

    return allMovies.filter( m => m.title.toLowerCase().includes( payload.toLowerCase()) )

}

export const filterMoviesReducer = (allMovies, payload) => {
    
    if( payload.length === 0 ){

        return allMovies
        
    } else {

        var moviesFiltradas = [];
        var moviesComprobadas = [];
        for(let i = 0; i < allMovies.length; i++){

            for(let j = 0; j < payload.length; j++){

                if( allMovies[i].genre_ids.includes( Number(payload[j])) ) {


                    if( !moviesComprobadas.includes(allMovies[i].id) ){

                        moviesComprobadas.push(allMovies[i].id);
                        moviesFiltradas.push(allMovies[i]);

                    }
                    
                }
                 
            }
        }

        return moviesFiltradas;

    }

    

}
