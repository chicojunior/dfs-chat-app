import { Router, Request, Response } from 'express';
import { Assistant } from '../model/assistant';

import { assistants } from '../data/mockdata';

const router = Router();

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
