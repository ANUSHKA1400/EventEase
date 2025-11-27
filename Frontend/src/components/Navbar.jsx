import { Link } from "react-router-dom";
import useAuth from "../context/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 25px",
        background: "#1e1e1e",
        color: "white",
      }}
    >
      <h2>EventEase</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link style={{ color: "white" }} to="/events">
          Events
        </Link>

        {user ? (
          <>
            <Link style={{ color: "white" }} to="/my-bookings">
              My Bookings
            </Link>
            <button
              onClick={logout}
              style={{ marginLeft: "10px", padding: "5px 12px" }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link style={{ color: "white" }} to="/login">
              Login
            </Link>
            <Link style={{ color: "white" }} to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
