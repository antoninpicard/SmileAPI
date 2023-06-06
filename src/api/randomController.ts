import express, { Request, Response, Router } from 'express';
import fs from 'fs';
import path from 'path';

const router: Router = express.Router();

const Phrases: string[] = ["Phrase 1", "Phrase 2", "Phrase 3"];
let Images: Buffer[] = [];

fs.readdirSync(path.join(__dirname, 'Images')).forEach(file => {
  const imagePath = path.join(__dirname, 'Images', file);
  const image = fs.readFileSync(imagePath);
  Images.push(image);
});

router.get('/randomphrase', (req: Request, res: Response) => {
  const randomIndex: number = Math.floor(Math.random() * Phrases.length);
  const randomPhrase: string = Phrases[randomIndex];
  res.json(randomPhrase);
});

router.get('/randomimage', (req: Request, res: Response) => {
  const randomIndex: number = Math.floor(Math.random() * Images.length);
  const randomImage: Buffer = Images[randomIndex];
  res.setHeader('Content-Type', 'image/png');
  res.send(randomImage);
});

export default router;
