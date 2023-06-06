const express = require('express');
const router = express.Router();

const Phrases = ["Phrase 1", "Phrase 2", "Phrase 3"];
const Images = ["image1.png", "image2.png"];

router.get('/randomphrase', (req, res) => {
  const randomIndex = Math.floor(Math.random() * Phrases.length);
  const randomPhrase = Phrases[randomIndex];
  res.json(randomPhrase);
});

router.get('/randomimage', (req, res) => {
  const randomIndex = Math.floor(Math.random() * Images.length);
  const randomImageName = Images[randomIndex];
  const imagePath = `Images/${randomImageName}`;
  res.sendFile(imagePath, { root: __dirname });
});

module.exports = router;
