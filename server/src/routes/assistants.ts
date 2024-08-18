import { Router, Request, Response } from 'express';
import { Assistant } from '../model/model';

const router = Router();
let assistants: Assistant[] = [
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Alice' },
  { id: 3, name: 'John' },
  { id: 4, name: 'Eva' },
];

function getAvailableAssistant<Assistant>(arr: Assistant[]): Assistant {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

router.get('/', (req: Request, res: Response) => {
  const assistant = getAvailableAssistant(assistants);
  res.json(assistant);
});

export default router;
