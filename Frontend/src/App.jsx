import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import MyBookings from "./pages/MyBookings";
import BookEvent from "./pages/BookEvent";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/events/:id/book" element={<BookEvent />} />

          <Route path="/" element={<Events />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
