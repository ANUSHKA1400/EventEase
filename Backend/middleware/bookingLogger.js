// backend/middleware/bookingLogger.js
export default function bookingLogger(req, res, next) {
  if (req.path.includes("/bookings")) {
    console.log(`[Booking Activity] ${req.method} ${req.path} at ${new Date().toISOString()}`);
  }
  next();
}
