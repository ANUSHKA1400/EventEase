// backend/controllers/eventController.js
import Event from "../models/Event.js";

// CREATE EVENT (Admin)
export const createEvent = async (req, res) => {
  try {
    const event = await Event.create({ ...req.body, createdBy: req.user.id });
    res.status(201).json({ message: "Event created", event });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET ALL EVENTS
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET EVENT BY ID
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
