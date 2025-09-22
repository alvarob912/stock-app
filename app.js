const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send("Servidor Express corriendo pedilo 🚀");
  console.log("peticion recibida")
})

// Levantar servidor en puerto 3000
app.listen(4000, () => {
  console.log("Servidor escuchando en http://localhost:4000");
});