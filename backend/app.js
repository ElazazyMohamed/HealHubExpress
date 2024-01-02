import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

//initializations
dotenv.config();
const app = express();

// .env
const port = process.env.PORT || 4000;
const mongo = process.env.MONGO_URI;

//middleware
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000',credentials:true}));
app.use(cookieParser());

//connect to db
mongoose
  .connect(mongo)
  .then(() => {
    app.listen(port, () => console.log(`Connected to MongoDB and Server is running on port ${port}`));
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if there's an error connecting to the database
  });
  
