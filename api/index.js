'use strict';

const express = require('express');
const app = express();
const data = require('./Movies.json')



app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
  });

app.get('/', (req, res) =>{

    let {Akelab} = req.query;

    if( Akelab === '123456789' ){

        return res.status(200).json(data);
    } else {
        res.status(404).json({msg: 'Debe ingresar los datos correctos para poder acceder a la información'})  
    }

});

app.listen(3001, () => {
    console.log('%s listening at 3001'); 
});
