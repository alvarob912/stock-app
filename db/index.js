const mongoose = require('mongoose')

const dbConnect = (app) => {
    mongoose
  .connect(
      `mongodb+srv://alvarobijarra14_db_user:${process.env.PASSWORD}@cluster0.hxxrqiy.mongodb.net/stock-app?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then((result) => {
    const PORT = process.env.PORT
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en http://localhost:${PORT}`);
        });
    console.log("conexion exitosa a la base de datos")
  })
  .catch((err) => console.log(err))
}

module.exports = dbConnect