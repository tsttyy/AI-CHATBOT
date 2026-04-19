// config/config.js
import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 8080,
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    apiUrl: 'https://api.openai.com/v1/chat/completions',
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
  },
};