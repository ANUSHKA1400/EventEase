// backend/controllers/bookingController.js
import Booking from "../models/Booking.js";
import Event from "../models/Event.js";

// BOOK EVENT
export const bookEvent = async (req, res) => {
  try {
    const { eventId, seatsBooked } = req.body;

    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    if (event.seats < seatsBooked)
      return res.status(400).json({ message: "Not enough seats" });

    const booking = await Booking.create({
      user: req.user.id,
      event: eventId,
      seatsBooked,
    });

    event.seats -= seatsBooked;
    await event.save();

    res.status(201).json({ message: "Booking confirmed", booking });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET USER BOOKINGS
export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("event")
      .sort({ createdAt: -1 });

    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
