// server.js
import app from './app.js';
import { config } from './config/config.js';

const PORT = config.port;

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
