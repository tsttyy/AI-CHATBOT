// Neural Chat - Enhanced JavaScript
const messagesContainer = document.getElementById("chat-box");
const inputBox = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const charCount = document.getElementById("char-num");
const MAX_CHARS = 500;

// Auto-resize textarea
function autoResize() {
  inputBox.style.height = 'auto';
  inputBox.style.height = Math.min(inputBox.scrollHeight, 120) + 'px';
}

// Character counter
inputBox.addEventListener('input', () => {
  const len = inputBox.value.length;
  charCount.textContent = len;
  charCount.parentElement.classList.toggle('warning', len > MAX_CHARS * 0.9);
  autoResize();
});

// Remove duplicate keydown event listeners if present
// Only one keydown event listener should be attached

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sendMessage();
});

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

// Focus input on load
window.addEventListener('load', () => {
  inputBox.focus();
  autoResize();
});

// Add message to chat window
function addMessage(role, text) {
  // Remove welcome message on first user message
  const welcome = messagesContainer.querySelector('.welcome-message');
  if (welcome && role === 'user') welcome.remove();

  const msg = document.createElement("div");
  msg.classList.add("message", role);

  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const roleLabel = role === 'user' ? 'YOU' : 'NEURAL';

  msg.innerHTML = `
    <div class="avatar">${role === "user" ? "◈" : "⬡"}</div>
    <div class="content">
      <div class="meta">${roleLabel} • ${timestamp}</div>
      <div class="text">${escapeHtml(text)}</div>
    </div>
  `;

  messagesContainer.appendChild(msg);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Typing indicator with animated dots
function showTyping() {
  const typing = document.createElement("div");
  typing.classList.add("message", "assistant", "typing");
  typing.id = "typing";
  typing.innerHTML = `
    <div class="avatar">⬡</div>
    <div class="content">
      <div class="meta">NEURAL • ...</div>
      <div class="text">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  messagesContainer.appendChild(typing);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeTyping() {
  const typing = document.getElementById("typing");
  if (typing) typing.remove();
}

// Send message
async function sendMessage() {
  const text = inputBox.value.trim();
  console.log('User input:', text); // Debug log
  if (!text) return;
  if (text.length > MAX_CHARS) {
    addMessage("assistant", `⚠️ Message too long. Maximum ${MAX_CHARS} characters.`);
    return;
  }

  addMessage("user", text);
  inputBox.value = "";
  charCount.textContent = "0";
  autoResize();

  showTyping();

  try {
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    });

    const data = await res.json();
    removeTyping();

    if (data.error) {
      addMessage("assistant", "⚠️ Error: " + data.error);
    } else {
      addMessage("assistant", data.reply || "⚠️ No response received.");
    }
  } catch (err) {
    removeTyping();
    addMessage("assistant", "⚠️ Connection failed. Please try again.");
    console.error(err);
  }
}


