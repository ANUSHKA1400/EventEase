# EventEase – Full-Stack Event Booking Platform

EventEase is a complete full-stack event management and booking platform where users can discover events, register, book seats, and manage their bookings. Admins can create and manage events, view attendees, and track event status in real-time.

🚀 Tech Stack
Frontend

React.js

Context API

Axios

React Router DOM

TailwindCSS

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

Custom Middleware

⭐ Features
👤 Public User

View landing page

Browse all events

Filter by category, location, and date

Register or Log in

🔐 Authentication

JWT-based login & register

Role-based access (User / Admin)

👥 Logged-in User

Book up to 2 seats per event

Prevent booking if event is full

View all bookings

Cancel bookings before event start date

View status: Upcoming / Ongoing / Completed

🛠️ Admin Panel

Create new events

Edit or delete events

Set event capacity

Track event statuses

View attendee list

🎯 Core Logic
✔ Event ID Format

EVT-[MMM][YYYY]-[Random3]
Example: EVT-AUG2025-X4T

✔ Booking Rules

Max 2 seats per user

Block if event is full

Auto logging middleware on each booking

✔ Date Format

DD-MMM-YYYY everywhere

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
🔧 Backend Setup
cd backend
npm install
npm start


Create a .env file:

PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret

🎨 Frontend Setup
cd frontend
npm install
npm start

🧪 API Testing (Postman)

All major APIs tested:

Endpoint	Status
POST /api/auth/register	✔ Working
POST /api/auth/login	✔ Working
GET /api/events	✔ Working
POST /api/bookings	✔ Working
GET /api/bookings/my	✔ Working
Submission

GitHub Repo: https://github.com/ANUSHKA1400/EventEase
Author

Anushka Mitra
Full-Stack Developer
(EventEase Assignment)

