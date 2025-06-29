# Real-Time Cybersecurity-Themed Location Tracker

A modern, real-time multi-user location sharing app with a cyber/neon theme. Built with React, Node.js, TypeScript, PostgreSQL, Socket.IO, and Google Maps API. Perfect for demonstrating teamwork, security, and advanced web development skills.

---

## 🚀 Features
- **Live Location Sharing:** See your own and others’ locations on a cyber-themed map in real time.
- **Socket.IO Real-Time Updates:** All users see location changes instantly—no refresh needed.
- **Google Maps Integration:** Interactive map and street view.
- **Phone Number Link:** Share and identify locations by phone number (with user consent).
- **Modern Cyber UI:** Neon, animated, and responsive.
- **Privacy-First:** No tracking without user action.

---

## 🛠️ Tech Stack
- **Frontend:** React (TypeScript), Google Maps JavaScript API, Socket.IO Client
- **Backend:** Node.js, Express (TypeScript), Socket.IO Server
- **Database:** PostgreSQL
- **Styling:** Custom CSS (neon/cyber theme)
- **Tooling:** VS Code, npm, ts-node, dotenv, ESLint

---

## 📦 Project Structure
```
location-tracker/
  backend/         # Express + Socket.IO + DB API
  frontend/        # React UI + Google Maps + Socket.IO client
  database.sql     # PostgreSQL schema
  README.md        # This file
```

---

## ⚡ Getting Started

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/location-tracker.git
cd location-tracker
```

### 2. Setup the Backend
```sh
cd backend
npm install
# Configure your .env with DB connection details
npx ts-node src/index.ts
```

### 3. Setup the Frontend
```sh
cd ../frontend
npm install
# Add your Google Maps API key to .env
npm start
```

### 4. Open in Browser
Visit [http://localhost:3000](http://localhost:3000)

---

## 🗺️ Usage
- Enter your phone number and click **Share Location**.
- Allow location permissions in your browser.
- Open the app in another browser/device, use a different phone number, and share location.
- See all users’ locations update in real time!

---

## 🔒 Security & Privacy
- Locations are only shared with explicit user consent.
- No background tracking or unauthorized access.
- CORS and environment variables are used for security.

---

## 🌱 Future Improvements
- User authentication (register/login)
- Group/team-based sharing
- Location history/trails
- Push notifications
- Role-based access
- Mobile app (PWA or native)
- End-to-end encryption for location data
- Cloud deployment

---

## 💡 Why This Project Matters
- **Safety:** Real-time sharing is vital for personal and team safety.
- **Teamwork:** Enables coordination in events, fieldwork, or emergencies.
- **Modern Skills:** Showcases full-stack, real-time, and secure web development.
- **Portfolio-Ready:** Eye-catching cyber UI and advanced features impress employers.

---

## 👩‍💻 Author
- **HARSHITHA JOSHI** 

---

## 📄 License
[MIT](LICENSE)

