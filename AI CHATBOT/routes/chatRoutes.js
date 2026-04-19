// routes/chatRoutes.js
import express from 'express';
import { chatController } from '../controllers/chatController.js';

const router = express.Router();

// Chat endpoint
router.post('/chat', chatController.handleChat);

export default router;