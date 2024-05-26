import express from 'express';
import cors from 'cors';
import StartPeerServer from './src/index.js';
const app = express();

// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(
	cors({
		origin: 'https://seemetest.netlify.app',
		allowedHeaders: '*',
		allowMethods: '*',
	})
);

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// app.get('*', checkUser);

// Set port from environment variable, defaulting to 5000 if not provided
const PORT = process.env.PORT || 4400;
// Start server and listen on specified port
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
StartPeerServer();
