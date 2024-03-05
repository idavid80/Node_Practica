import {Router} from 'express';
// nos llevamos los render a un archivo dentro de la carpeta controllador
import {home, login, registro, showUsers, insertUsers, connect, showCrud, deleteUsers, updatetUser} from '../controllers/indexroutes.js'
import { conexion } from '../db.js';
//Importar e inicializar el enroutador
Router();

const router = Router();

//Envio de variables dentro del render
router.get('/', home);
router.get('/login', login);
router.get('/registro', registro);
router.get('/crud', showCrud);

//router.delete('/eliminar/', deleteUsers);
router.delete('/eliminar/', deleteUsers);

//Ruta base datos
router.get('/showUsers', showUsers);

router.post('/connect', connect);

router.post('/insertUsers', insertUsers);
router.put('/updatetUser', updatetUser);

export default router;

