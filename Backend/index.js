import express from "express"
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"
import watchListRoute from "./routes/watchListRoute.js"

dotenv.config()

// mongodb connection
connectDB()

const app = express();
//middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

// routes

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1", watchListRoute);











const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})