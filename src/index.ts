// External Imports
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';

// Internal Imports
import './database/connection';
import routes from './routes/routes';
import AppError from './errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(8080, () => {
  console.log('🔥 Server started http://localhost:8080');
});
