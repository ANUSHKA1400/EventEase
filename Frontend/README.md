EventEase – Event Booking Platform

A full-stack event booking system where users can browse events, register, book seats, and manage bookings. Admins can create and manage events, monitor attendee lists, and track event statuses.

🚀 Tech Stack
Frontend

React (with Context API)

Axios

React Router DOM

TailwindCSS

Backend

Node.js + Express

MongoDB + Mongoose

JWT Authentication

Custom Middlewares

📌 Features Implemented
👤 Public User

View landing page

Browse all events

Filter by category, location, and date

🔐 Authentication

JWT-based login & register

Role-based access for User/Admin

👥 Logged-in User

Book up to 2 seats per event

Prevent overbooking

View their bookings

Cancel bookings before event date

See event status: Upcoming / Ongoing / Completed

🛠️ Admin

Create events

Update events

Delete events

Define event capacity

View attendee list

Auto event status calculation

🎯 Core Logic
✔ Event ID Format

EVT-[MMM][YYYY]-[Random3]
Example: EVT-AUG2025-X4T

✔ Booking Rules

Max 2 seats per user

Block booking if event is full

Custom booking-logger middleware

✔ Date Format Everywhere

DD-MMM-YYYY

📂 Project Structure
/eventease
│── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── server.js
│
│── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md

⚙️ Setup Instructions
Backend
cd backend
npm install
npm start


Create a .env file:

PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret_key

Frontend
cd frontend
npm install
npm start

API Testing (Postman)

The following APIs were tested using Postman:

POST /api/auth/register – working

POST /api/auth/login – working

GET /api/events – working

POST /api/bookings – working

GET /api/bookings/my – working

All endpoints return proper JSON responses.