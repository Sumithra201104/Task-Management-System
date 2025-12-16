# 📋 Task Management System

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

A full-stack web application designed to manage tasks efficiently with secure authentication and role-based access control. Built with modern web technologies following clean architecture and security best practices.

## 🚀 Features

### 🔐 Authentication
- User Registration and Login
- JWT-based authentication with HTTP-only cookies
- Secure Logout functionality

### 👥 Role-Based Access Control
- **Admin**: View all users and tasks
- **Normal User**: Create, update, and delete only their own tasks

### ✅ Task Management
- Create new tasks
- Update task status: Pending, In Progress, Completed
- Soft delete tasks
- Persistent storage with MongoDB

### 🎨 User Interface
- Clean and minimal UI
- Protected dashboard access
- Admin-only section clearly separated
- Responsive layout

## 🛠️ Technology Stack

| Component | Technologies |
|-----------|--------------|
| **Frontend** | React (Create React App), Axios, React Router DOM, CSS |
| **Backend** | Node.js, Express.js, MongoDB Atlas, Mongoose, JWT, Cookie-Parser, CORS |

## 🏗️ System Architecture

```
Frontend (React)
    |
    |  HTTP Requests (Axios)
    ↓
Backend (Node.js + Express)
    |
    |  JWT Authentication
    ↓
Database (MongoDB Atlas)
```

## 📁 Project Structure

```
Task-Manager/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── App.js
    │   └── index.js
    └── package.json
```

## 📋 Prerequisites

- Node.js (LTS version)
- MongoDB Atlas account
- npm package manager

## 🚀 Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_secret_key
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

   **Expected output:**
   ```
   MongoDB connected
   Server running on port 5000
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend server:
   ```bash
   npm start
   ```

4. Open your browser and visit: [http://localhost:3000](http://localhost:3000)

## 👨‍💼 Admin Account Setup

Admin users are created manually in MongoDB. Here's an example admin document:

```json
{
  "name": "Admin",
  "email": "admin@example.com",
  "password": "<bcrypt_hashed_password>",
  "role": "admin"
}
```

> **Note:** Passwords must be stored in bcrypt-hashed format.

## 🔄 Application Workflow

1. User registers or logs in
2. JWT token is generated and stored securely in cookies
3. User is redirected to the dashboard
4. Normal users manage their own tasks
5. Admin users can view all users and tasks
6. User can log out securely

## 🎥 Demo Video

A 2-5 minute demonstration video showcasing:
- User registration and login
- Task creation, update, and deletion
- Role-based access behavior
- Admin viewing all users
- Logout functionality

## ✅ Assignment Requirements Fulfilled

- ✅ User Authentication
- ✅ JWT-based Security
- ✅ Role-Based Access Control
- ✅ Task CRUD Operations
- ✅ Clean User Interface
- ✅ MongoDB Data Persistence

## 🎯 Objectives

- Implement secure user authentication using JWT
- Provide role-based access (Admin and Normal User)
- Perform full CRUD operations on tasks
- Ensure data persistence using MongoDB
- Build a clean and user-friendly interface

## 📝 Conclusion

This project successfully demonstrates the development of a secure, scalable, and clean full-stack web application. It follows industry-standard practices for authentication, authorization, and frontend-backend integration, making it suitable for both academic evaluation and real-world use.

## 👩‍💻 Developed By

**SUMITHRA E**