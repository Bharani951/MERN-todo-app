# MERN-todo-app

Markdown

# Full-Stack MERN To-Do Application with Tailwind CSS

This repository contains the code for a full-stack To-Do application built using the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS. This project serves as a comprehensive guide for setting up a modern web application, covering both frontend and backend development, as well as deployment strategies.

The application allows users to:

- Add new To-Do tasks.
- View existing To-Do tasks.
- Edit the text of To-Do tasks.
- Mark To-Do tasks as complete or incomplete.
- Delete To-Do tasks.

## Features

**Backend (Node.js, Express.js, MongoDB)**

- **RESTful API:** Implements a robust API for CRUD (Create, Read, Update, Delete) operations on To-Do items.
- **MongoDB Atlas:** Utilizes MongoDB Atlas for cloud-hosted database management.
- **Mongoose ODM:** Employs Mongoose for elegant MongoDB object modeling.
- **Environment Variables:** Securely manages sensitive information using `dotenv`.
- **ES Modules:** Configured to use modern ES module import syntax.

**Frontend (React, Tailwind CSS)**

- **React Hooks:** Leverages `useState` and `useEffect` for efficient state management and side effects.
- **Tailwind CSS:** Provides a utility-first CSS framework for rapid and responsive UI development.
- **Axios:** Used for making HTTP requests to the backend API.
- **React Icons:** Integrates popular icon libraries for a visually appealing interface.
- **Vite:** Fast build tool for a streamlined development experience.
- **Proxy Configuration:** Handles API requests seamlessly during development.

## Technologies Used

- **Frontend:**
  - React.js
  - Tailwind CSS
  - Vite
  - Axios
  - React Icons
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - Nodemon (for development)
  - CORS
  - Dotenv

## Architecture

**The project's architecture is clearly separated into distinct frontend and backend layers, communicating over standard HTTP protocols.**

Conceptually, the architecture can be visualized as three primary interacting layers:

+----------------+ +-------------------+ +-----------------+
| | | | | |
| Frontend |<----->| Backend |<----->| Database |
| (React.js) | | (Node.js/Express) | | (MongoDB) |
| | | | | |
+----------------+ +-------------------+ +-----------------+
^ ^
| |
| |
+----------------+ +-------------------+
| | | |
| User's Web | | (Deployment |
| Browser | | Environment) |
| | | |
+----------------+ +-------------------+

## Workflow: Adding a New To-Do Item

1. User types
   To-Do & clicks "Add"
   in Browser UI
   |
   V
   +-------------------+ HTTP POST Request (JSON payload: { text: "..." })
   | React Frontend |-------------------------------------------------------->
   | (Handles form |
   | submission, |
   | Axios POST) |
   +-------------------+
   |
   | (Frontend updates UI with new To-Do optimistic/after success)
   V
   +-------------------+
   | Node.js/Express |
   | (Backend Server) |
   | - Receives POST |
   | - Validates data |
   | - Calls Mongoose |
   | to create doc |
   +-------------------+
   |
   | Mongoose: `new Todo({ ... }).save()`
   V
   +-------------------+
   | MongoDB Atlas |
   | (Database) |
   | - Stores new |
   | To-Do document |
   +-------------------+
   |
   | (MongoDB confirms save)
   V
   +-------------------+ HTTP 201 Created / Success Response (JSON: { newTodo: {...} })
   | Node.js/Express |-------------------------------------------------------->
   | (Backend Server) |
   | - Sends response |
   | to Frontend |
   +-------------------+
