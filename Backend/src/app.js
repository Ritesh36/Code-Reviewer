const express = require('express');
const aiRoutes = require('./routes/ai.routes');

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

app.get("/", (req, res) => {
    res.send("Welcome to the AI API!");
});

app.use('/ai', aiRoutes);

module.exports = app;