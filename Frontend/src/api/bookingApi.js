import api from "./axiosConfig";

export const bookEvent = (data) => api.post("/bookings", data);
export const getMyBookings = () => api.get("/bookings/my-bookings");
