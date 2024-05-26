// import express from 'express';
// import http from 'http';
// import cors from 'cors';
// import { Server } from 'socket.io';
// import StartPeerServer from './src/index.js';
// const socketToPeerHashMap = {};
// // Create Express application
// const app = express();
// const server = http.createServer(app);

// // Socket For Video Call Feature
// const io = new Server(server, {
// 	cors: {
// 		origin: 'http://localhost:3001',
// 	},
// });
// io.on('connection', (socket) => {
// 	socket.emit('me', socket.id);

// 	socket.on('disconnect', () => {
// 		socket.broadcast.emit('callEnded');
// 	});

// 	socket.on('callUser', (data) => {
// 		io.to(data.userToCall).emit('callUser', {
// 			signal: data.signalData,
// 			from: data.from,
// 			name: data.name,
// 		});

// 		socket.on('answerCall', (data) => {
// 			io.to(data.to).emit('callAccepted'), data.signal;
// 		});
// 	});
// });
// // Middleware setup
// app.use(express.json()); // Parse JSON bodies
// app.use(
// 	cors({
// 		origin: 'https://seemetest.netlify.app',
// 		allowedHeaders: '*',
// 		allowMethods: '*',
// 	})
// );

// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// // app.get('*', checkUser);

// // Set port from environment variable, defaulting to 5000 if not provided
// const PORT = process.env.PORT || 5000;
// // Start server and listen on specified port
// app.listen(PORT, () => {
// 	console.log(`Server is running on port ${PORT}`);
// });
// StartPeerServer();

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
	},
});

io.on('connection', (socket) => {
	socket.emit('me', socket.id);

	socket.on('disconnect', () => {
		socket.broadcast.emit('callEnded');
	});

	socket.on('callUser', (data) => {
		io.to(data.userToCall).emit('callUser', {
			signal: data.signalData,
			from: data.from,
			name: data.name,
		});
	});

	socket.on('answerCall', (data) => {
		io.to(data.to).emit('callAccepted', data.signal);
	});
});

server.listen(5000, () => console.log('server is running on port 5000'));
