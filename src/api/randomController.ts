import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

const Phrases: string[] = ["Phrase 1", "Phrase 2", "Phrase 3"];
const Images: string[] = ["image1.png", "image2.png"];

router.get('/randomphrase', (req: Request, res: Response) => {
  const randomIndex: number = Math.floor(Math.random() * Phrases.length);
  const randomPhrase: string = Phrases[randomIndex];
  res.json(randomPhrase);
});

router.get('/randomimage', (req: Request, res: Response) => {
  const randomIndex: number = Math.floor(Math.random() * Images.length);
  const randomImageName: string = Images[randomIndex];
  const imagePath: string = `Images/${randomImageName}`;
  res.sendFile(imagePath, { root: __dirname });
});

export default router;
