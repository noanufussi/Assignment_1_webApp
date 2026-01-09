const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('../config/db');

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});