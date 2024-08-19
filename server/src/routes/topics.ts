import express from 'express';
import { Topic } from '../model/topic';
import { mockData } from '../data/mockdata';

const router = express.Router();

router.get('/topics', (req, res) => {
  res.json(mockData);
});

router.get('/topics/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const topic = mockData.find((topic: Topic) => topic.id === id);

  if (topic) {
    res.json(topic);
  } else {
    res.status(404).send('Topic not found');
  }
});

export default router;
