import express, { Request, Response, Router } from 'express';
import path from 'path';

const router: Router = express.Router();

const Phrases: string[] = ["Phrase 1", "Phrase 2", "Phrase 3"];
const Images: string[] = ["image2.png", "abc.png"];

router.get('/randomphrase', (req: Request, res: Response) => {
  const randomIndex: number = Math.floor(Math.random() * Phrases.length);
  const randomPhrase: string = Phrases[randomIndex];
  res.json(randomPhrase);
});

router.get('/randomimage', (req: Request, res: Response) => {
  const randomIndex: number = Math.floor(Math.random() * Images.length);
  const randomImageName: string = Images[randomIndex];
  const imagePath: string = path.join(__dirname, 'Images', randomImageName);
  console.log(`randomIndex: ${randomIndex}, randomImageName: ${randomImageName}, imagePath: ${imagePath}`);
  res.sendFile(imagePath);
});



export default router;
