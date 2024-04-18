const express = require('express');
const mongoose = require('mongoose');

const router = require('./router.js');
//require('dotenv').config(); // For environment variables (optional)

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // For parsing JSON bodies
app.use('/api',router)
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Neighborhood', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
  

