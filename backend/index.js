import express from 'express';
import { PORT, db_url } from './config.js';
import cors from 'cors';
import bookRoutes from './routes/routes.js';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(db_url)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message);
    });