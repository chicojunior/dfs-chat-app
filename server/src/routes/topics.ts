import express from 'express';

import { topics } from '../data/mockdata';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(topics);
});

export default router;
