const express = require('express')
const app = express()
const mysql = require("mysql")
const cors = require('cors')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "formulario"
})

app.use(express.json())
app.use(cors())

app.use("/register", (req, res) => {

    const nome = req.body.nome
    const email = req.body.email
    const telefone = req.body.telefone
    const faculdade = req.body.faculdade
    const curso = req.body.curso

    let mysql = `INSERT INTO user (nome, email, telefone, faculdade, curso) VALUES ( '${nome}', '${email}', '${telefone}', '${faculdade}', '${curso}');`
    db.query(mysql, (err, result) => {
        res.send(result)
        console.log(err)
    })
})

app.listen(3001, () => {
    console.log("Servidor Inciado")
})