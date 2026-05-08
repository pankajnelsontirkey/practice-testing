import express, {
  urlencoded,
  type Express,
  type NextFunction,
  type Request,
  type Response
} from 'express';
import morgan from 'morgan';

import router from './routes/index.js';

export interface CustomError extends Error {
  message: string;
  statusCode?: number;
  data?: any;
}

const PORT = process.env.PORT || 5000;
const app: Express = express();

app.use(urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use(
  (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.log('error', error);
    const { statusCode, message, data } = error;
    res.status(statusCode || 500).json({ message, data });
  }
);

app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
