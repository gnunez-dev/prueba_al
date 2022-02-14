import React, {useState} from "react";

const Fibonacci = () =>{

    const [number, setNumber] = useState('');
    const [secuencia, setSecuencia] = useState('');
    const [error, setError] = useState('');

    function nFibonacci(n) {
        
        var arr = [0, 1];

        for( var i = 2; i <= n; i++){
            arr.push(arr[i - 1] + arr[i - 2]);
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
            let calculoFibonacci = nFibonacci(number);
            setSecuencia(calculoFibonacci);
        }
    }
    return(
        <div className="cont_input">
            <h1>Fibonacci</h1>
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

export default Fibonacci;