import express from "express";
import dotenv from "dotenv";
import userRoutes from "@routes/user-route";
import { requestTimer } from "@middlewares/request-timer";
import { connectDB } from "@config/data-source";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(requestTimer);

// Routes
app.use("/api/users", userRoutes);

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
