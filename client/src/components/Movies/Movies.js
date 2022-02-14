import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, filterMovie, searchMovie, orderMovie } from "../../redux/actions";
import Filtros from "./Filtros";
import styles from './Movies.module.css';
import imgLoading from './loading.gif'

const Movies = () => {
    const dispatch = useDispatch();
    const {movies, genres, noHayResultados} = useSelector(state => state);
    const [filterGenres, setFilterGenres] = useState([]);
    const [search, setSearch] = useState('');
    const [order, setOrder] = useState('');

    useEffect(()=>{

        dispatch(getMovies())

    },[dispatch])

    const handleCheckbox = (e) => {

        if( !e.target.checked ){

            let genresNewFiltrado = filterGenres.filter( g => g !== e.target.value );
            setFilterGenres(genresNewFiltrado);
            dispatch(filterMovie(genresNewFiltrado))

        } else {

            if(e.target.checked){
                
                setFilterGenres([...filterGenres, e.target.value]);
                dispatch(filterMovie([...filterGenres, e.target.value]))

            }

        }

    }

    const handlerSearch = (e) => {
        setSearch(e.target.value);
        dispatch(searchMovie(e.target.value))
    }

    const handleOrder = (e) => {
        setOrder(e.target.value)
        dispatch(orderMovie(e.target.value))
    }

    const movieGeneros = (generosMovie) => {
        
            var arr = [];
            var arrSinFiltrar = [];
            
            for( var i = 0; i < generosMovie.length; i++){

                arrSinFiltrar = genres.filter( g => g.id === generosMovie[i] )
                //genres {id, name}
                
            }
            console.log({arrSinFiltrar, arr})
            arr = arrSinFiltrar.map( g => {
                console.log({nameg:g.name})
                return g.name})
            return arr.join(', ');
    }

    return(
        <div className={styles.movies}>
            <h1>Películas</h1>
            <Filtros
                genres = {genres}
                handleCheckbox = {handleCheckbox}
                handlerSearch={handlerSearch}
                search={search}
                order={order}
                handleOrder={handleOrder}
            />
            {   noHayResultados && noHayResultados ?
                <div className={styles.loading}>
                    <img src={imgLoading} alt=""/>
                </div>
                :
                <div className={styles.cont_movies}>
                    {
                        movies && movies.length !== 0 ? movies.map( movie => {
                            return (
                                <div key={movie.id} className={styles.movie}>
                                    <h2>{`${movie.title} (${movie.release_date})`}</h2>
                                    <div className={styles.cont_movie}>
                                        <div className={styles.img_movie}>
                                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                                        </div>
                                        <div className={styles.info_movie}>
                                            <p>{movie.overview}</p>
                                            <div className={styles.detalles_movie}>
                                                <span><b>Título:</b> {movie.title}</span>
                                                <span><b>Calificación:</b> {movie.vote_average}</span>
                                                <span><b>Genero:</b> {movieGeneros(movie.genre_ids)}</span>
                                                <span><b>Fecha de realización:</b> {movie.release_date}</span>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            )
                        })
                        : null
                    }
                </div>
            }
        </div>
    )
}

export default Movies;