//impartacion de librerias
const express = require ('express');
const app = express();
const morgan= require ('morgan');//muestra las solicitudes http get pot put patch en la consola
const cors = require ('cors');//permite conexiones externas al servidor


//configuracion del servidor puerto 3000

app.set('port',process.env.PORT || 3000);
app.set('json spaces',2)//HABILITAMOS JSON


app.use(morgan('dev'));//cargar morgan maneja errores

app.use(express.urlencoded({extended:false}));

app.use(express.json());// manejar el formato Json
app.use(cors());// permitir conexiones externas  



app.get('/', (req, res) => {    
    res.json(
        { 
            "Title": "Hola mundo esta es mi primer api"
        }
    )
});


//comentario ejemplo
app.post('/sumar', (req, res) => { // http://localhost:3000/sumar
  const { num1, num2 } = req.body;// se declaran los datos de entrada

  // Validar que se hayan enviado los dos números  que no esten vacio
  if (!num1 || !num2) {
    return res.status(400).send({ error: 'Faltan números para sumar' });
  }

  // Sumar los números
  const resultado = num1 + num2;

  // Enviar el resultado al front 

  res.send({ resultado });
});


//end point
app.post('/area-triangulo', (req, res) => { // http://localhost:3000/sumar
  const { base, altura } = req.body;// se declaran los datos de entrada

  // Validar que se hayan enviado los dos números  que no esten vacio
  if (!base || !altura) {
    return res.status(400).send({ error: 'Faltan números para sumar' });
  }

  // Sumar los números
  const resultado = base * altura /2;

  // Enviar el resultado al front 

  res.send({ resultado });
});

app.post('/restar', (req, res) => { // http://localhost:3000/sumar
  const { num1, num2 } = req.body;// se declaran los datos de entrada

  // Validar que se hayan enviado los dos números  que no esten vacio
  if (!num1 || !num2) {
    return res.status(400).send({ error: 'Faltan números para sumar' });
  }

  // Sumar los números
  const resultado = num1 - num2;

  // Enviar el resultado al front 

  res.send({ resultado });
});
//Iniciando el servidor


app.listen(app.get('port'),()=>{
    console.log("SERVIDOR EN EL PUERTO 3000");
});

