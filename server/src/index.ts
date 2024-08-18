import express, { Request, Response } from 'express';
import asisstantRoutes from './routes/assistants';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/assistants', asisstantRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
