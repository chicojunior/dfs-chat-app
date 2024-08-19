import { Router, Request, Response } from 'express';
import { Assistant } from '../model/assistant';

const router = Router();
const assistants: Assistant[] = [
  { id: 1, name: 'Bob', isAvailable: true },
  { id: 2, name: 'Alice', isAvailable: false },
  { id: 3, name: 'John', isAvailable: true },
  { id: 4, name: 'Eva', isAvailable: true },
];

function getAvailableAssistant(assistantList: Assistant[]): Assistant | null {
  const availableAssistants = assistantList.filter(
    (assistant) => assistant.isAvailable
  );

  if (availableAssistants.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * availableAssistants.length);

  return availableAssistants[randomIndex];
}

router.get('/', (req: Request, res: Response) => {
  const assistant = getAvailableAssistant(assistants);
  res.json(assistant);
});

export default router;
