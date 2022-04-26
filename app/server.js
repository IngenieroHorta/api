const express = require('express');
const conec = require('./conection/connection');
const app = express()

let port = process.env.port || 8080

// connection.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     else {
//         console.log("conexion exitosa");
//     }
// });
app.get('/api', (req, res) => {

    conec.query('SELECT * FROM personaje', (err, result) => {
        if (err) {
            throw err;
        } else {
            res.json( result );
        }
    })
});

app.listen(port);
console.log(`Api escuchando en el puerto # ${port}`);