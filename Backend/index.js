import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import eventRoutes from "./routes/events.js";
import bookingRoutes from "./routes/bookings.js";
import bookingLogger from "./middleware/bookingLogger.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bookingLogger);

// Connect to DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("EventEase Backend API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
