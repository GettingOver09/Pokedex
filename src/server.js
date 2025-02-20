const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const pokemonRouter = require("../routes/pokemon.js");

const app = express();
app.set("view engine", "ejs"); // templating engine: ejs
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", pokemonRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port https://localhost:${PORT}`);
});
