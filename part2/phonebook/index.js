const express = require("express");
const app = express();

app.use(express.json()); // Middleware for parsing JSON

let persons = [
  // Add your hardcoded data here
];

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
