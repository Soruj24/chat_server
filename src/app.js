const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const userRouter = require("./router/userRouter");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Ensure this matches frontend
    methods: ["GET", "POST"],
    credentials: true,
  },
});



io.on("connection", (socket) => {

  console.log("A user connected to server");

  socket.on("message", (data) => {
    
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected from root namespace");
  });


});



app.use(express.json());
app.use("/api/users", userRouter);

module.exports = server