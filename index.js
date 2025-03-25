import express from 'express';
import cors from 'cors';
import connectDB from './database/index.js';
import 'dotenv/config'
const app = express();
const PORT = process.env.PORT || 3000;

connectDB()
app.use(express.json());
app.use(cors());
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT} ..`);
})