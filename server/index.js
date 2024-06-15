const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const mongoDB = require('./config/db');
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
const resumeRoutes = require('./routes/resume.route');

const app = express();

//dotenv config
dotenv.config();

//database config   
mongoDB();

//middlewares
app.use(cors({
    origin: 'https://resume-builder-mern-eight.vercel.app',
    credentials: true,
}));

app.use(express.json());
app.use('/styles', express.static(path.join(__dirname, 'styles')));

//routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/data', resumeRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));