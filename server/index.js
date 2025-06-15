import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import chatRoute from './routes/chat.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', chatRoute);

app.listen(3001, () => console.log('API running on http://localhost:3001'));
