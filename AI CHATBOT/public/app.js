const messagesContainer = document.getElementById("chat-messages");
const inputBox = document.getElementById("chat-input");
const sendBtn = document.querySelector("button[type=submit]");

// Add message to chat window
function addMessage(role, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", role);

  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  msg.innerHTML = `
    <div class="avatar">${role === "user" ? "U" : "A"}</div>
    <div class="content">
      <div class="meta">${role} • ${timestamp}</div>
      <div class="text">${text}</div>
    </div>
  `;

  messagesContainer.appendChild(msg);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Typing indicator
function showTyping() {
  const typing = document.createElement("div");
  typing.classList.add("message", "assistant", "typing");
  typing.innerHTML = `
    <div class="avatar">A</div>
    <div class="content">
      <div class="meta">assistant • ...</div>
      <div class="text">Typing...</div>
    </div>
  `;
  typing.id = "typing";
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
  if (!text) return;

  addMessage("user", text);
  inputBox.value = "";

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
      addMessage("assistant", data.reply || "⚠️ No response");
    }
  } catch (err) {
    removeTyping();
    addMessage("assistant", "⚠️ Failed to connect to server.");
    console.error(err);
  }
}

// Event listeners
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
