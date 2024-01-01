const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'snake.html')); // Serve the snake game
});

app.get('/about', (req, res) => {
    res.json({
        "team": "Our Team",
        "members": [
            {"id": "0001", "name": "Hello1"},
            {"id": "0002", "name": "Hello2"},
            {"id": "0003", "name": "Hello3"},
        ]
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});