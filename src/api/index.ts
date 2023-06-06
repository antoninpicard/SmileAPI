import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import random from './randomController';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/randomController', random);

export default router;
