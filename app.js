const express = require("express")
require('dotenv').config()

const app = express()

app.get("/", (req, res) => {
  res.status(200).send("Servidor Express corriendo");
  console.log("peticion recibida")
})

const PORT = process.env.PORT || 4000

// Levantar servidor en puerto 3000
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});