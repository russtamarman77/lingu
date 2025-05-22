const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// File upload (for .txt file)
const upload = multer({ dest: 'uploads/' });

// Routes
app.post('/manage-server/start', upload.single('messageFile'), (req, res) => {
    const { token, convoId, hattersName, speed } = req.body;
    const messageFile = req.file;

    console.log('Start Server Request:');
    console.log('Token:', token);
    console.log('Convo ID:', convoId);
    console.log('Hatter Name:', hattersName);
    console.log('Speed:', speed);
    console.log('Uploaded File:', messageFile);

    // Dummy response
    res.send(`<h2>Server started!<br>Token: ${token}<br>Convo ID: ${convoId}</h2><a href="/">Go Back</a>`);
});

app.post('/manage-server/stop', (req, res) => {
    const { pid } = req.body;

    console.log('Stop Server Request:', pid);

    // Dummy response
    res.send(`<h2>Server stopped with ID: ${pid}</h2><a href="/">Go Back</a>`);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
