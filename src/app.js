import  express from 'express';
// import ejs from 'ejs';

//rutas dinamicas
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

import indexRoutes from  './routes/index.js';
import { PORT } from './config.js';


const app = express();
// require('dotenv').config()
//Inicializar el servidor

// Utilizar express.json para recibir peticiones json (bodyparse)
app.use(express.json());

//Configuracion motor de plantilla ejs
app.set('view engine',  'ejs');

// busca un archivo y lo convierte en  una ruta relativa a donde se encuentra este script (archivo)
const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);

// join concatena / o \ en funcion del sistema operativo
app.set('views' , join(__dirname, 'views'));
console.log(join(__dirname, 'views'));

// Generar ruta y pasarlas a router/index.js e inicializarlo la variable en la que se importa
app.use(indexRoutes);

//configurar carpeta public para imagenes y css como estatica
app.use(express.static(join(__dirname, 'public')));

/*
app.listen(3000);
console.log("Servidor puerto: 3000")
*/
const server = app.listen(PORT);
