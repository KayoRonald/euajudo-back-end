// External Imports
import express from 'express';
import cors from 'cors';

// Internal Imports
import './database/connection';
import routes from './routes/routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(8080, () => {
  console.log('🔥 Server started http://localhost:8080');
});
