// to import it as the module added it in package.json
//name for db : todos
// or have to use const express = require('express');

import dotenv from "dotenv"; // to get access to mongo_uri
import express from "express";
import { connectDB } from "./config/db.js";
import todoRoutes from "./routes/todo.routes.js"; // Import the todo routes for handling requests

dotenv.config(); // Load environment variables from .env file

const app = express(); // Create an instance app of express

app.use(express.json()); // Middleware to parse JSON request bodies

app.use("/api/todos", todoRoutes); // Use the todoRoutes for handling requests to /api/todos

const __dirname = path.resolve(); // Get the current directory name

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist"))); // Serve static files from the frontend build directory in production
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")); // Serve the index.html file for any other routes
  });
}

app.listen(5000, () => {
  connectDB(); // Call the function to connect to the database
  console.log("Server is running on the port http://localhost:5000");
}); // listen and Start the server on port 5000
