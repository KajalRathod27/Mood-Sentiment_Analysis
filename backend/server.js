// Import required packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

// Import your routes
const songRoutes = require('./routes/songRoutes');


app.use(cors({
    origin: 'http://localhost:5173', // Adjust as necessary for your frontend URL
    methods: ['GET', 'POST'], // Adjust if you have other methods
    credentials: true // If you need to send cookies or authentication headers
}));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Serve static files (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/api/songs', songRoutes);

// Start the server
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
