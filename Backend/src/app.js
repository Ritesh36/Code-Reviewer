const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require("cors");

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the AI API!");
});

app.use('/ai', aiRoutes);

module.exports = app;