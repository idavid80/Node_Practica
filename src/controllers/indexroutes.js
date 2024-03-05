// puede llamarse index controller o controller

import { conexion } from "../db.js";

export const home = (req, res) => res.render("home", { title: "Home" });

export const login = (req, res) => res.render("login", { title: "Login" });

export const registro = (req, res) =>
  res.render("registro", { title: "Registro" });

async function userExist(username) {
  const query = `SELECT * FROM users WHERE BINARY nameuser = "${username}"`;
  // console.log(req.body)
  const resultado = await conexion.query(query);
  console.log(resultado);
  return resultado[0] != 0;
}

async function idExist(id) {
  const query = `SELECT * FROM users WHERE BINARY id = "${id}"`;
  // console.log(req.body)
  const resultado = await conexion.query(query);
  console.log(resultado);
  return resultado[0] != 0;
}

export const connect = async (req, res) => {
  const { username, password } = req.body;
  // const query = 'SELECT * FROM users WHERE nameuser = ? AND password = ?';
  const query = `SELECT * FROM users WHERE BINARY password = "${password}" && BINARY nameuser = "${username}"`;
  // console.log(req.body)
  const resultado = await conexion.query(query);

  resultado[0] == 0
    ? res.send("No existe usuario")
    : res.send(`Bienvenido ${username}`);
};

export const showUsers = async (req, res) => {
  const query = "SELECT * FROM userlogin.users";
  const [rows] = await conexion.query(query);
  console.log(rows);
  //res.send(rows);
  // res.render("crud", {title: "Crud", users: showUsers})
  res.json(rows);
};

export const showCrud = async (req, res) => {
  try {
    const query = "SELECT * FROM userlogin.users";
    const [rows] = await conexion.query(query);
    console.log(rows);
    res.render("crud", { title: "User List", users: rows });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error fetching users");
  }
};

export const insertUsers = async (req, res) => {
  const { nameuser, password } = req.body;
  //   console.log(await userExist(nameuser))
  const checkUser = await userExist(nameuser);

  const query = "INSERT INTO userlogin.users(nameuser,password) VALUES(?,?)";
  if (!checkUser) {
    const [rows] = await conexion.query(query, [nameuser, password]);
    res.send("Usuario creado con éxito");
  } else {
    res.send("El usuario ya existe");
  }
};

export const updatetUser = async (req, res) => {
  try {
    const { id, nameuser, password } = req.body;

    const query = 'UPDATE userlogin.users SET nameuser=?, password=? WHERE id=?';
    const [rows] = await conexion.query(query, [nameuser, password, id]);

    //const query = `UPDATE userlogin.users SET nameuser="${nameuser}" password="${password}" WHERE id="${id}"`;
    //const [rows] = await conexion.query(query, [id, nameuser, password]);
    res.send("Usuario actualizado con éxito");
  } catch (error) {
    console.error("Error actualizando usuario:", error);
    res.status(500).send("Error actualizando usuario");
  }
};

export const deleteUsers = async (req, res) => {
  try {
    const userId = req.body.userId;
    console.log(userId);
    // Lógica para eliminar el usuario con el ID proporcionado
    // Por ejemplo, si estás utilizando una base de datos MySQL:
    await conexion.query("DELETE FROM userlogin.users WHERE id = ?", [userId]);

    // Simulación de eliminación para demostración
    console.log(`Eliminado usuario con ID ${userId}`);

    // Envía una respuesta de éxito
    res.status(204).send();
  } catch (error) {
    console.error("Error eliminando usuario:", error);
    res.status(500).send("Error eliminando usuario");
  }
};
