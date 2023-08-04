//___(1)
const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require(cloudinary).v2;
require("dotenv").config();

const app = express(); // creation serveur
app.use(cors());
app.use(express.json()); //recuperer les paramettres tyype body

mongoose.connect(process.env.MONGODB_URI); //         on se connecte à mongoose (vinted est le nom du fichier à créer ou à se  connecter si déja créer)

cloudinary.config({
  // cloud_name: "azerty",
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,

  // api_key: "abcd",
  api_key: process.env.CLOUDINARY_API_KEY,

  // api_secret: "xyz",
  api_secret: process.env.CLOUDINARY_API_SECRET,

  secure: true,
});

//___(6)___________________________________________Création model mongoose___________________________________________________________________
// mongoose.connect("mongodb://localhost/vinted"); //         on se connecte à mongoose (vinted est le nom du fichier à créer ou à se  connecter si déja créer)

//___(4)___________________________________________route de bienvenue___________________________________________________________________

//___(5)_____________________________________________1ere route _______________________________________________________________

//___(3)___affiche page introuvable__
//affiche page introuvable
app.all("*", (req, res) => {
  return res.status(404).json("Cette route n'existe pas");
});

//___(2)____Démarrer le serveur :
// Pour écouter les requêtes du port 3000
// app.listen(3000, () => {
app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
