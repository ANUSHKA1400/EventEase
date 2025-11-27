import api from "./axiosConfig";

export const getEvents = () => api.get("/events");
export const getEventById = (id) => api.get(`/events/${id}`);
