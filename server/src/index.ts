import express, { Request, Response } from 'express';
import assistantRoutes from './routes/assistants';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/assistants', assistantRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
