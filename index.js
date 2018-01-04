const express = require('express');
const app = express();

// modulo de acesso ao ficheiro base de dados

const config = require('./config/basedados'); // link para pasta config base de dados

// mongoose npm install mongoose
const mongoose = require('mongoose');
const path = require ('path');
mongoose.Promise = global.Promise;

mongoose.connect(config.uri, (err) => {
    if (err) {
            console.log('Não foi possivel estabelecer ligação',err);       
    } else {
        console.log ('conexão estabelecida');
        //console.log (config.secret);
    }
});


 // mongoose.connect('mongodb://localhost/test', { useMongoClient: true });

app.use(express.static(__dirname + '/surfShop/dist/')); // usar o ficheiro do angular em modo produção

/**
 // mensagem e inicio
app.get('/',(req, res) => {  
    res.send('hello world \n <h1>Servidor </h1> '); // para enviar um ficheiro
  });
  
  console.log('a escutar e vivo no port 8080'); 
  app.listen(8080);

 */

 app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname + '/surfShop/dist/index.html'));
     
 })

 // para enviar um ficheiro


console.log('a escutar e vivo no port 8080'); 
app.listen(8080);
