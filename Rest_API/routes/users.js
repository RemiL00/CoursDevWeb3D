const express = require("express")
const router = express.Router()
const db = require("../database")

const {getAllUsers, createNewUser, updateUser, deleteUser, getUserById} = require("../controllers/usersControllers")

// GET :ALL
router.get("/users", getAllUsers)

// GET : Un seul utilisateur
router.get('/users/:id', getUserById);

// POST : CRÉER un nouvel utilisateur, basé sur les données passées dans le corps(body) de la requête
router.post("/users", createNewUser);

//PUT : Modifier un utilisateur basé sur les données envoyées dans le corps(body) et le paramètre passé dans l'URL
router.put("/users/:id", updateUser);

//DELETE : Modifier un utilisateur basé sur les données envoyées dans le corps(body) et le paramètre passé dans l'URL
router.delete("/users/:id", deleteUser);

module.exports = router