const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "public", "Rampravesh_Resume2025.pdf");
  res.download(filePath);
});

app.listen(3001, () => console.log("Server running on 3001"));
