const express = require("express");
const http = require("http");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

app.use(cors());

app.use(express.static("client/public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "public", "404.html"));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
