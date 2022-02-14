import React, {useState} from "react";
import styles from './Movies.module.css'
import iconFilter from './filter_icon.svg';
import iconLupa from './lupa.svg'

const Filtros = ({genres, handleCheckbox, filterGenres, handlerSearch, search, order, handleOrder}) => {

    const [actFiltro, setActFiltro] = useState(false)
    const handleActFiltro = () => {
        if(actFiltro){
            setActFiltro(false)
        } else{
            setActFiltro(true)
        }
    }
    return(
        <div className={styles.filtros}>
            <div className={styles.search}>
                <input type='text' onChange={handlerSearch} value={search}/>
                <img src={iconLupa} alt="Buscar"/>
            </div>
            <div className={styles.cont_filtro_genero}>
                <span onClick={handleActFiltro}><img src={iconFilter} alt='Filtros'/></span>
                <div className={ actFiltro ? `${styles.filtro_act} ${styles.filtro_genero}` : `${styles.filtro_genero}`}>
                {
                    genres && genres.map( g => {
                        return (
                            <div key={`gg${g.id}`} className={styles.item_genres}>
                                <input 
                                    type="checkbox"
                                    name="genres"
                                    id={g.id}
                                    value={g.id}
                                    onChange={ (e) => handleCheckbox(e) }
                                    checked={ filterGenres && filterGenres.includes([g.id])}
                                />
                                <label htmlFor={g.id}>
                                    {g.name}
                                </label>
                            </div>
                            )
                    })
                }
                </div>
            </div>
            <div className={styles.ordenar}>
                <span>Ordenar</span>
                <div>
                    <select name='order' value={order} onChange={handleOrder}>
                        <option value="descFecha">Nuevas - Antiguas</option>
                        <option value="ascFecha">Antiguas - Nuevas</option>
                        <option value="ascPuntaje">0 - 10 puntos</option>
                        <option value="descPuntaje">10 - 0 puntos</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Filtros;