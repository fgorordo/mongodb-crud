import express from "express";
import indexRoutes from "./routes/api/index.routes";
import morgan from "morgan";
import dotenv from "dotenv";

// ENV
dotenv.config();
// Initializing 
const app = express();

// Middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))

// Routes
app.use(indexRoutes);

export default app;