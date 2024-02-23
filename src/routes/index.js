import {Router} from 'express';
// nos llevamos los render a un archivo dentro de la carpeta controllador
import {home, login, registro, showUsers, insertUsers} from '../controllers/indexroutes.js'
import { conexion } from '../db.js';
//Importar e inicializar el enroutador
Router();

const router = Router();

//Envio de variables dentro del render
router.get('/', home);
router.get('/login', login);
router.get('/registro', registro);

//Ruta base datos
router.get('/connect', showUsers);

router.post('/insertUsers',insertUsers);

export default router;

