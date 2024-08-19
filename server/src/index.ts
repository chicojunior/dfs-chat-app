import express, { Request, Response } from 'express';
import assistantRoutes from './routes/assistants';
import topicRoutes from './routes/topics';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/assistants', assistantRoutes);
app.use('/topics', topicRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello DFS!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
