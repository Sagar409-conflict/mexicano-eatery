# 🔥 El Fuego — Mexican Restaurant

A full-stack monorepo featuring a **Node.js + Express + MySQL** backend API and a **React + Vite** landing page.

## 📁 Project Structure

```
├── server/          # Express API backend
├── client/          # React + Vite frontend
├── docker-compose.yml
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ & npm
- Docker & Docker Compose

### 1. Start MySQL Database

```bash
docker-compose up -d
```

This will start MySQL and auto-seed the database with menu items.

### 2. Copy Images

Copy the generated hero and about images to the client public folder:

```bash
bash setup_images.sh
```

### 3. Start Backend Server

```bash
cd server
npm install
npm run dev
```

Server runs on `http://localhost:5000`

### 4. Start Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Health check |
| `GET` | `/api/menu` | Get all menu items grouped by category |
| `POST` | `/api/reservations` | Create a table reservation |
| `POST` | `/api/contact` | Submit a contact message |

## 🛠 Tech Stack

- **Backend**: Node.js, Express, MySQL2, express-validator
- **Frontend**: React 18, Vite 6
- **Database**: MySQL 8.0 (via Docker)
- **Styling**: Vanilla CSS with CSS Custom Properties
