// Definir texto de entrada por defecto
const textoInicial = 'Hola mundo';


// Iniciar marco Express.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { texto: textoInicial, resultado: '' });
});

app.post('/', (req, res) => {
    let texto = req.body.texto;
    const eliminarH = req.body.eliminarH === 'on';
    const eliminarTildes = req.body.eliminarTildes === 'on';
    const reemplazarVPorB = req.body.reemplazarVPorB === 'on';
    const reemplazarXPorKs = req.body.reemplazarXPorKs === 'on';
    const reemplazarCPorK = req.body.reemplazarCPorK === 'on';
    const reemplazarQuPorK = req.body.reemplazarQuPorK === 'on';
    const reemplazarCPorZ = req.body.reemplazarCPorZ === 'on';
    const reemplazarLlPorY = req.body.reemplazarLlPorY === 'on';

    const modificacionCase = req.body.modificacionCase;
    aMayusculas = false;
    aMinusculas = false;  
    if(modificacionCase == 'aMayusculas') {
        aMayusculas = true;
    }
    else if(modificacionCase == 'aMinusculas')    {
        aMinusculas = true;
    }
    
    //se traspasa la info del formulario a una estructura que se pasa a la función kasteyanizar de la biblioteca
    const opciones = {
        reemplazarVPorB: reemplazarVPorB,
        reemplazarCPorK: reemplazarCPorK,
        reemplazarQuPorK: reemplazarQuPorK,
        reemplazarCPorZ: reemplazarCPorZ,
        reemplazarLlPorY: reemplazarLlPorY,
        reemplazarXPorKs: reemplazarXPorKs,
        eliminarH: eliminarH,
        eliminarTildes: eliminarTildes,
        usarSoloMayusculas: aMayusculas,
        usarSoloMinusculas: aMinusculas
    };
    const kasteyano = require('./kasteyano');
    kasteyanizado = kasteyano.kasteyaniza(texto, opciones);

    res.render('index', { texto: req.body.texto, resultado: kasteyanizado });
});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000/');
});

