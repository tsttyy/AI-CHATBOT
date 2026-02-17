🤖 AI Chatbot Web Application

A browser-based AI Chatbot built using HTML, CSS, and JavaScript that integrates with an external AI API to generate dynamic responses in real time.

📌 Project Overview

This project is a frontend chatbot interface that allows users to:

Enter text queries

Send requests to an AI API

Receive intelligent responses

View dynamic chat updates in the UI

The application demonstrates asynchronous JavaScript, API integration, and dynamic DOM manipulation.

🚀 Features

Responsive chat interface

Real-time user input handling

Asynchronous API integration using fetch

async/await implementation

Dynamic DOM rendering

Error handling for failed API calls

Clean and minimal UI design

🛠️ Technologies Used

HTML5

CSS3

JavaScript (ES6+)

Fetch API

Async/Await

REST API Integration

Git (Version Control)

⚙️ How It Works

User enters a message in the input field.

JavaScript captures the input using event listeners.

A POST request is sent to the AI API using fetch().

The application waits for the response using async/await.

The response is parsed and dynamically rendered into the chat UI.

Errors are handled using try-catch blocks.

📂 Project Structure
AI-CHATBOT/
│
├── index.html        # Main UI structure
├── style.css         # Styling and layout
├── script.js         # Chat logic & API handling
└── README.md         # Project documentation

🔧 Installation & Usage

Clone the repository:

git clone https://github.com/your-username/AI-CHATBOT.git


Navigate to the project folder:

cd AI-CHATBOT


Open index.html in your browser.

No additional dependencies required.

🧠 Key Concepts Implemented
1. Asynchronous Programming

Used async/await to handle API requests without blocking the UI.

2. Promise Handling

Managed API responses using modern JavaScript promise-based architecture.

3. DOM Manipulation

Dynamically created and appended chat messages.

4. Error Handling

Implemented try-catch blocks to handle API failures gracefully.

⚠️ Improvements & Future Enhancements

Add message loading animation

Add typing indicator

Store chat history in local storage

Improve UI with animations

Add backend proxy for secure API key management

📚 Learning Outcomes

Understanding asynchronous JavaScript

Handling real-time API communication

Managing UI state updates

Debugging network requests

Improving frontend code structure

👨‍💻 Author

Naveen
