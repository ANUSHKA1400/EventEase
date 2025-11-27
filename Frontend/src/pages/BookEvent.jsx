import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { bookEvent } from "../api/bookingApi";
import useAuth from "../context/useAuth";

const BookEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [seats, setSeats] = useState(1);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  if (!user) {
    return (
      <p style={{ textAlign: "center", marginTop: "30px" }}>
        You must be logged in to book an event.
      </p>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      await bookEvent({
        eventId: id,
        userId: user._id,
        seats,
      });

      setSuccess("Booked successfully!");
      setTimeout(() => navigate("/my-bookings"), 1200);
    } catch (err) {
      setError(err.response?.data?.message || "Booking failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Book Event</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <label>Number of Seats</label>
        <input
          type="number"
          min="1"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#28a745",
            color: "white",
            border: "none",
            marginTop: "10px",
          }}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookEvent;
