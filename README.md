# Mundo Pet 🐾

<div align="center">
  <img src="./preview.svg" alt="Mundo Pet Preview" width="100%">
</div>

> Appointment scheduler & manager for pet shops. Vanilla JS + JSON Server. Made with Rocketseat Fullstack course.

## 📌 About the Project

**Mundo Pet** is a web application designed to help pet shops manage their daily appointments efficiently. Originally inspired by a barbershop scheduling system (HairDay), this project was fully adapted, redesigned, and implemented for the pet care context.

The application allows users to schedule services for their pets, automatically blocking past hours and already booked slots. It uses a simulated backend with `json-server` to persist data, providing a complete frontend experience with real-world business logic. 

## ✨ Features

- **Fully Responsive Design:** The layout adapts perfectly to mobile, tablet, and desktop screens, providing a seamless user experience across all devices.
- **Create Appointments:** Schedule a service providing the pet's name, owner's name, phone number, service type, and date/time.
- **Dynamic Input Mask:** Automatic formatting for Brazilian phone numbers using Regex.
- **Smart Time Slot Management:**
  - Automatically blocks past hours for the current day.
  - Automatically disables time slots that are already booked to prevent conflicts.
- **Daily Schedule View:** Fetches and displays all appointments for a specific day, categorized by periods (Morning, Afternoon, and Night).
- **Cancel Appointments:** Easily remove an appointment from the schedule with a simple click (triggering a DELETE request).
- **Timezone Reliability:** Uses `Day.js` to handle timezone formatting (`YYYY-MM-DDTHH:mm:ssZ`) and prevent date-shifting bugs.

## 🚀 Technologies Used

- **HTML5 & CSS3:** Semantic markup, responsive design (Media Queries), and custom styling.
- **JavaScript (Vanilla):** Modular ES6+ for all frontend logic and DOM manipulation.
- **Day.js:** Lightweight library for advanced date and time formatting.
- **Webpack:** Frontend tooling and module bundling.
- **JSON Server:** Full fake REST API for backend simulation.

## 📁 Data Structure

Appointments are saved in the `server.json` file following this exact structure:

```json
{
  "id": "1",
  "pet": "Thor",
  "owner": "Fernanda Costa",
  "service": "Vacinação",
  "when": "2024-05-20T09:00:00-03:00"
}
```

## ☁️ Vercel Deployment & API Details

This project is deployed on Vercel. Since Vercel's serverless environment has a **Read-Only** file system, standard `json-server` POST/DELETE requests to a physical `server.json` file would return a `500 Internal Server Error`.

**The Solution:** The API is configured to run as a Serverless Function (`/api/server.js`) using `json-server` in **In-Memory mode**. The data is loaded as a JavaScript object, allowing the application to successfully perform POST and DELETE requests during the active session. *Note: Because it's in-memory on a serverless function, data changes will not persist permanently after the function goes cold.*

The application dynamically routes API requests using:
`window.location.hostname === "localhost" ? "http://localhost:3333" : "/api"`

## 🛠️ Getting Started

Follow the instructions below to run the project in your local environment.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone [https://github.com/AndrePassoni/mundo-pet.git](https://github.com/AndrePassoni/mundo-pet.git)
```

2. Navigate to the project directory:
```bash
cd mundo-pet
```

3. Install the dependencies:
```bash
npm install
```

### Running the Application

You will need two terminal windows to run the frontend and the fake API simultaneously.

1. **Start the JSON Server (API):**
```bash
npm run server
```
*(The API will be available at `http://localhost:3333`)*

2. **Start the Frontend Application:**
```bash
npm run dev
```
*(Open the local URL provided in your terminal to view the project)*

---
<p align="center">
  Made with 💜 by <a href="https://github.com/AndrePassoni">André Passoni</a>
</p>