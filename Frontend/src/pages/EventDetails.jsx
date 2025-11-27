import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEventById } from "../api/eventApi";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await getEventById(id);
        setEvent(res.data);
      } catch (err) {
        console.error("Error fetching event:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (!event) return <p style={{ textAlign: "center" }}>Event not found</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>
        <strong>Date:</strong>{" "}
        {new Date(event.date).toLocaleDateString()}
      </p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>

      <button
        onClick={() => navigate(`/events/${id}/book`)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Book Now
      </button>
    </div>
  );
};

export default EventDetails;
