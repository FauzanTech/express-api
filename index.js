const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Fauzan Ganteng");
});

app.get("/api", (req, res) => {
  res.json({ message: "This is a sample API endpoint." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
