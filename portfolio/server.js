const express = require("express");
const path = require("path");
const app = express();

// Step 1: Serve static files from "public" folder
app.use(express.static("public"));

// Step 2: When user hits /download → send file
app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "public", "resume.pdf");
  res.download(filePath, "Sakth-Resume.pdf"); // second param = file name
});

// Step 3: Start server
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
