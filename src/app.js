const express = require("express")
const app = express();
const port = 8080;


app.get('/', (req, res) => {

})

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`)
});
