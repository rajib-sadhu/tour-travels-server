import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import userRouter from './modules/user/user.router';
import tourRouter from './modules/tour/tour.route'

// parser
app.use(express.json());
app.use(cors());

// End Points
app.use('/api/user', userRouter);
app.use('/api/tour', tourRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
