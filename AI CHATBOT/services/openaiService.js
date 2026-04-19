// services/openaiService.js
import fetch from 'node-fetch';
import { config } from '../config/config.js';

export class OpenAIService {
  async generateResponse(message) {
    try {
      const response = await fetch(config.openai.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.openai.apiKey}`,
        },
        body: JSON.stringify({
          model: config.openai.model,
          messages: [{ role: 'user', content: message }],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${data.error?.message || 'Unknown error'}`);
      }

      return data.choices[0].message.content;
    } catch (error) {
      console.error('❌ OpenAI Service Error:', error);
      throw error;
    }
  }
}