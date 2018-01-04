const crypto = require('crypto') // .randomBytes(255).toString('hex');

/*
        // versão com teste // cyfer node doc
crtypto comverte e cria


*/
crypto.randomBytes(256, (err, buf) => {
    if (err) throw err;
    console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
  });

// exporta o modulo no index temos que importar

module.exports = {
   uri: 'mongodb://localhost/SurfShop',
   secret: 'crypto' ,
   db:'Renato-shop'

}