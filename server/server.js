import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/job_board');

app.get('/api/health', (req, res) => {
  res.json({ message: 'Job Board API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});