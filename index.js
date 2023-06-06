// // app.js
// const express = require('express');
// const app = express();

// // Définition des routes
// app.get('/', (req, res) => {
//   res.send('Bienvenue sur mon API !');
// });

// // Démarrez le serveur
// app.listen(3000, () => {
//   console.log('API démarrée sur le port 3000.');
// });

let port = "5321";
const express = require('express');
const app = express();
const randomController = require('./RandomController');

app.use('/api', randomController);

// Autres routes et middleware peuvent être configurés ici

app.listen(port, () => {
  console.log('Serveur démarré sur le port '+ port + '.');
});
