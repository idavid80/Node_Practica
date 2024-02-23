// puede llamarse index controller o controller
import { conexion } from "../db.js";

export const home = (req, res) => res.render('home', {title: 'Home'});

export const login = (req, res) => res.render("login", {title: 'Login'});

export const registro = (req, res) => res.render("registro", {title: 'Registro'});


export const showUsers= async (req, res) => {
    const query = 'SELECT * FROM userlogin.users'
    const [rows] = await conexion.query(query);
    res.json(rows);
    /*
    const queryPrueba = 'SELECT 1+1 AS RESULT'
    const query1 = 'SELECT * FROM userlogin.users'
    //const [result] = await conexion.query('SELECT 1+1 AS RESULT')
   const resul = await conexion.query(query1)
   res.json(resul[0])
 //  res.json(resul[0][0].RESULT == 2? 'Todo bien': 'Algo salio mal')
*/
};

export const insertUsers = async (req, res) => {
    const { nameuser, password} = req.body;
    const query = "INSERT INTO userlogin.users(nameuser,password) VALUES(?,?)";
    const [rows] = await conexion.query(query, [nameuser, password]);
    res.send({'Hola `${nameuser}`  tu usuario fue creado correctamente': rows})
/*        "id": rows.insertId,
        "nameuser": nameuser,
        "password": password
    }
    );*/

  //  console.log(req.body);
  //  res.send("ads");
 /*
    await conexion.query(
        `INSERT INTO usuarios VALUES(?,?,?)`, [null, req.body.usuario, req.body.password],
        (err, result) =>{
            if (err){
                console.log(err);
                return res.send(`Error al registrar el usuario`);
            }else{
                console.log(result);
                return res.redirect('/');
            }
        });*/
};

