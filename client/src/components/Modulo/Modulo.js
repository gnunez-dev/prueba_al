import React, {useState} from "react";

const Modulo = () =>{

    const [number, setNumber] = useState('');
    const [secuencia, setSecuencia] = useState('');
    const [error, setError] = useState('');

    function nModulo(n) {
        
        var arr = [];
        /* ...) adicional se deben reemplazar los
número múltiplos de 3 por la palabra AKE y los números múltiplos de 5 por la palabra
LAB. Si el número es múltiplo de 3 y de 5 se deben mostrar ambas palabras AKELAB. */
        for( var i = 1; i <= n; i++){
            if( i % 3 === 0 && i % 5 === 0 ){
                arr.push('AKELAB');
            } else if( i % 3 === 0 && i % 5 !== 0 ) {
                arr.push('AKE');
            } else if( i % 3 !== 0 && i % 5 === 0 ){
                arr.push('LAB');
            } else {
                arr.push(i)
            }
        }

        return arr.join(', ');
    }

    const handleChange = (e) =>{
        setNumber(e.target.value);
    }
    const handleClick = () =>{

        if(typeof Number(number) !==  'number' || !Number(number) >= 1){
            setError('El valor ingresado debe ser un número mayor o igual a 1')
        } else {
            setError('');
            let calculo = nModulo(number);
            setSecuencia(calculo);
        }
    }
    return(
        <div className="cont_input">
            <h1>Modulo</h1>
            <div>
                <input type="text" name="number" value={number} onChange={(e)=> handleChange(e)}/>
                <button onClick={handleClick}>Generar secuencia</button> 
                <span>{error && error}</span>
            </div>
            { !error && secuencia ? <p className="secuencia">
                {secuencia && secuencia}
            </p> : null}
        </div>
    );
}

export default Modulo;