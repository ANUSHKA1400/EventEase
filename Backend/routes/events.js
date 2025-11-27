// backend/routes/events.js
import express from "express";
import {
  createEvent,
  getEvents,
  getEventById
} from "../controllers/eventController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all events
router.get("/", getEvents);

// Get event details
router.get("/:id", getEventById);

// Create event (admin only)
router.post("/", protect, adminOnly, createEvent);

export default router;
