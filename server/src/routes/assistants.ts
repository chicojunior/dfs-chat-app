import { Router, Request, Response } from 'express';
import { Assistant } from '../model/model';

const router = Router();
let assistants: Assistant[] = [
  { id: 1, name: 'Bob' },
  { id: 1, name: 'Alice' },
  { id: 1, name: 'John' },
  { id: 1, name: 'Eva' },
];

function getRandomAssistant<Assistant>(arr: Assistant[]): Assistant {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

router.get('/', (req: Request, res: Response) => {
  const assistant = getRandomAssistant(assistants);
  res.json(assistant);
});

export default router;
