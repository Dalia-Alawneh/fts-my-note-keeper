import express from 'express';
import cors from 'cors';
import connectDB from './database/index.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
connectDB()

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT} ..`);
})