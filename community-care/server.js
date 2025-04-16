require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2"); // Use pg for PostgreSQL
const app = express();

app.use(express.json());
app.use(cors());

// Connect to MySQL Database
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Change if using a different database
  password: "", // Enter MySQL password if set
  database: "community_care",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err);
    return;
  }
  console.log("Connected to database");
});

// API Route - Test if server is working
app.get("/", (req, res) => {
  res.send("CommUnity Care Backend is Running!");
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
