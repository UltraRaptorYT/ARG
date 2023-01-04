const http = require("http");
var hostname = "localhost";
var cors = require("cors");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

var port = 3001;

var app = require("./controller/app");

const server = http.createServer(app);
var options = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(
  cors(options)
);

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "signup", "signup.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "login", "login.html"));
});

app.get("/test", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "test.html"));
});

//encoding of the url is act_1_part_1 encoded by BAse64 then MD5, <hashed act_1_part_1>_part_1
app.get("/203d65262f3e3b87c58f97efe2991ddb_part_1", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "public", "act_1", "part_1", "wiki.html")
  );
});

//encoding of the url is act_1_part_2 encoded by BAse64 then MD5, <hashed act_1_part_2>_part_2
app.get("/e99252c5e8edbfe433ac05be478b37a1_part_2", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "public", "act_1", "part_2", "act1_p2.html")
  );
});

//encoding of the url is act_2 encoded by BAse64 then MD5, <hashed act_2>
app.get("/b8cd0600ebec42340062b7392290ca4a", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "act_2", "act_2.html"));
});

//encoding of the url is act_3_part_1 encoded by BAse64 then MD5, <hashed act_3_part_1>_part_1
app.get("/b86153090aed970056518d0cf56600d9_part_1", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "public", "act_3", "part_1", "act3_p1.html")
  );
});

//encoding of the url is act_3_part_2 encoded by BAse64 then MD5, <hashed act_3_part_2>_part_2
app.get("/e02577aeed1a8105c21ca5d17a4dd883_part_2", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "public", "act_3", "part_2", "act3_p2.html")
  );
});

//encoding of the url is act_4 encoded by BAse64 then MD5, <hashed act_4>
app.get("/ed7250f6a5523f0b138de063dd72c06a", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "act_4", "act_4.html"));
});

//encoding of the url is act_5 encoded by BAse64 then MD5, <hashed act_5>
app.get("/4e3467aabd551991ceea85d79c0c5b12", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "act_5", "act_5.html"));
});

//this endpoint must be the last in this script
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "ohnyo.html"));
});

app.use(function (req, res, next) {
  console.log(req.url);
  console.log(req.method);
  console.log(req.path);
  console.log(req.query.id);

  if (req.method != "GET") {
    res.type(".html");
    var msg =
      "<html><body>This server only serves web pages with GET!</body></html>";
    res.end(msg);
  } else {
    next();
  }
});

app.listen(port, hostname, function () {
  console.log(`Server hosted at http://${hostname}:${port}`);
});
