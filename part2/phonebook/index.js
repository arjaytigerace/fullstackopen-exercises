const express = require("express");
const app = express();
// Import the morgan middleware
const morgan = require("morgan");

// Apply morgan to your app with the 'tiny' configuration which logs minimal information
app.use(morgan("tiny"));

app.use(express.json()); // Middleware for parsing JSON requests

// Hardcoded data for the phonebook entries
let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

// Route for retrieving all phonebook entries
app.get("/api/persons", (req, res) => {
  res.json(persons); // Respond with JSON-formatted list of persons
});

// Route for displaying info about phonebook
app.get("/info", (req, res) => {
  const date = new Date(); // Get current date and time
  // Send a response that includes the number of entries and the current date
  res.send(
    `<p>Phonebook has info for ${persons.length} people</p>` + `<p>${date}</p>`
  );
});

// Route for deleting a phonebook entry by id
app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id); // Convert the id from params to a number
  persons = persons.filter((p) => p.id !== id); // Remove the person with the given id
  res.status(204).end(); // Send a 204 No Content status
});

// Route for adding a new phonebook entry
app.post("/api/persons", (req, res) => {
  const body = req.body; // Get the body data from the request

  // Check if the name or number is missing and return an error if so
  if (!body.name || !body.number) {
    return res.status(400).json({ error: "name or number is missing" });
  }

  // Check if the name already exists in the phonebook and return an error if so
  if (persons.some((p) => p.name === body.name)) {
    return res.status(400).json({ error: "name must be unique" });
  }

  // Create a new person object with a random id
  const newPerson = {
    id: Math.floor(Math.random() * 10000),
    name: body.name,
    number: body.number,
  };

  // Add the new person to the phonebook
  persons = persons.concat(newPerson);
  res.json(newPerson); // Send the new person as the response
});

// Start the server on port 3001
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
