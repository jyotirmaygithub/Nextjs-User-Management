import express, { Request, Response } from 'express';
import { connectDB } from './db';
import authRouter from './routes/auth'; // Import the router

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // middleware

app.use("/api/auth", authRouter); // Use the imported router

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
