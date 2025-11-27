// backend/routes/bookings.js
import express from "express";
import {
  bookEvent,
  getMyBookings
} from "../controllers/bookingController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Book an event
router.post("/", protect, bookEvent);

// Get user’s own bookings
router.get("/my-bookings", protect, getMyBookings);

export default router;
