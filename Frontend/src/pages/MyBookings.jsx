import { useEffect, useState } from "react";
import { getMyBookings } from "../api/bookingApi";
import useAuth from "../context/useAuth";

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hooks must ALWAYS come before any conditional returns
  useEffect(() => {
    if (!user) return; // <-- allowed

    const fetchBookings = async () => {
      try {
        const res = await getMyBookings();
        setBookings(res.data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user]);

  // Now we can safely return conditionally
  if (!user) {
    return (
      <p style={{ textAlign: "center", marginTop: "30px" }}>
        Please login to view your bookings.
      </p>
    );
  }

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading your bookings...</p>;
  }

  if (bookings.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "30px" }}>
        You have no bookings yet.
      </p>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>My Bookings</h2>

      {bookings.map((booking) => (
        <div
          key={booking._id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>{booking.event?.title}</h3>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(booking.event?.date).toLocaleDateString()}
          </p>
          <p><strong>Location:</strong> {booking.event?.location}</p>
          <p><strong>Seats Booked:</strong> {booking.seats}</p>
          <p>
            <strong>Booked On:</strong>{" "}
            {new Date(booking.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
