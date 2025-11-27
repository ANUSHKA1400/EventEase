import { useEffect, useState } from "react";
import { getEvents } from "../api/eventApi";
import { Link } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await getEvents();
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading events...</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginBottom: "20px" }}>Upcoming Events</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {events.map((event) => (
          <div
            key={event._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>
              <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
            </p>

            <Link
              to={`/events/${event._id}`}
              style={{
                marginTop: "10px",
                display: "inline-block",
                padding: "8px 12px",
                background: "#007bff",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
