const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

const index = require("./routes/index.js");
const productRoute = require("./routes/productRoutes");


app.use(cors());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.json());

app.use(index);
app.use("/api", productRoute);



app.listen(port, () => {
	console.log(`Aplicação executando na porta ${port}`);
});
module.exports = app;