// controllers/chatController.js
import { OpenAIService } from '../services/openaiService.js';

const openaiService = new OpenAIService();

export const chatController = {
  async handleChat(req, res) {
    try {
      const { message } = req.body;

      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const reply = await openaiService.generateResponse(message);
      res.json({ reply });
    } catch (error) {
      console.error('❌ Chat Controller Error:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  },
};