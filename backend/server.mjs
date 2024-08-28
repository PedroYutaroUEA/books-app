import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './config/db.mjs';
import { booksRouter } from './routes/booksRoutes.mjs';

connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', booksRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});