// app.js
import express from 'express';
import chatRoutes from './routes/chatRoutes.js';
import { config } from './config/config.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public')); // make sure index.html is inside /public

// Routes
app.use('/', chatRoutes);

export default app;
