# AI Chatbot Backend

## Project Structure

```
backend/
├── app.js              # Main Express application setup
├── server.js           # Server startup file
├── config/
│   └── config.js       # Configuration settings
├── controllers/
│   └── chatController.js # Chat endpoint logic
├── routes/
│   └── chatRoutes.js   # Route definitions
├── services/
│   └── openaiService.js # OpenAI API integration
├── public/             # Static frontend files
│   ├── index.html
│   ├── app.js
│   └── style.css
├── .env                # Environment variables
└── package.json
```

## Configuration

Environment variables are stored in `.env`:

- `OPENAI_API_KEY`: Your OpenAI API key
- `OPENAI_MODEL`: Model to use (default: gpt-4o-mini)
- `PORT`: Server port (default: 8080)

## Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your `.env` file with the required API key

3. Start the server:
   ```bash
   npm start
   ```

The server will run at http://localhost:8080

## API Endpoints

- `POST /chat`: Send a message and receive a response
  - Body: `{ "message": "Your message here" }`
  - Response: `{ "reply": "AI response" }`