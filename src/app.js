import express from "express";
import indexRoutes from "./routes/index.routes";
import morgan from "morgan";

// Initializing 
const app = express();

// Middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))

// Routes
app.use(indexRoutes);

export default app;