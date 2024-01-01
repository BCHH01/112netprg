const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'snake.html')); // Serve the snake game
});

app.get('/about', (req, res) => {
    res.json({
        "team": "Group name",
        "members": [
            {"id": "410855497", "name": "聶克威"},
            {"id": "410855257", "name": "陳宏豪"},
            {"id": "410856073", "name": "陳樂恒"},
            {"id": "410856024", "name": "龐嘉多"},
        ]
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
