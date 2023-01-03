var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require("cors");
const supabase = require("../config/supabase");
const superbase = require("../config/superbase");

app.options("*", cors());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(urlencodedParser);
app.use(cors());

//sign up endpoint
app.post("/signup", (req, res) => {
  var email = req.body.email;
  var full_name = req.body.full_name;
  var password = req.body.password;
  var admin_number = req.body.admin_number;
  var student_class = req.body.student_class;
  supabase.auth
    .signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: full_name,
          admin_number: admin_number,
          student_class: student_class,
        },
      },
    })
    .then(({ data, error }) => {
      if (error) {
        console.log(error);
        return;
      } else {
        let stage = 1;
        let uid = data["user"]["id"];
        supabase
          .from("progress")
          .insert({
            stage: stage,
            uid: uid,
          })
          .then(({ data, error }) => {
            if (error) {
              console.log(error);
              return;
            }
            res.status(202).send(data);
          });
      }
    });
});

//login endpoint
app.post("/login", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  if (email == "" || password == "") {
    res.status(500).send("An input is empty");
    return;
  } else {
    supabase.auth
      .signInWithPassword({
        email: email,
        password: password,
      })
      .then(async ({ data, error }) => {
        if (error) {
          console.log(error);
          res.status(500).send(error);
        } else {
          console.log(data["user"]["id"]);
          console.log("successful");
          superbase
            .from("progress")
            .select()
            .eq("uid", data["user"]["id"])
            .then(({ data, error }) => {
              if (error) {
                console.log(error);
                return res.status(500).send(data);
              }
              console.log(data);
              return res.status(202).send(data[0]);
            });
        }
      });
  }
});

//act 1 part 1 endpoint
app.post("/secrets", (req, res) => {
  let secret = req.body.secret;
  const hashedPassword =
    "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"; //answer is 'test'
  if (secret == hashedPassword) {
    let result = "correct";
    res.send(`{"answer":"${result}"}`);
    return;
  } else {
    let result = "incorrect";
    res.send(`{"answer":"${result}"}`);
    return;
  }
});

//act 1 part 2 endpoint
app.post("/AI_chatbot", (req, res) => {
  let reply = req.body.reply;
  var userid = req.body.uid;
  const time = new Date();
  var stage = 1;
  const answer = "test";
  if (reply == answer) {
    let result = "correct";
    res.send(`{"answer":"${result}"}`);

    async function addprogress({ time, userid, stage }) {
      const { data, error } = await superbase
        .from("progress")
        .update({ completed_at: time })
        .eq("uid", userid)
        .eq("stage", stage);

      if (error) {
        console.log(error);
        return;
      }
      if (data) {
        console.log(data);
      }
    }
    addprogress({ time, userid, stage });

    let newStage = 2;
    async function newProgress({ newStage, userid }) {
      const { data, error } = await supabase.from("progress").insert({
        stage: newStage,
        uid: userid,
      });
      if (error) {
        console.log(error);
        return;
      }
    }
    newProgress({ newStage, userid });
  } else {
    let result = "incorrect";
    res.send(`{"answer":"${result}"}`);
    return;
  }
});

//act 2 endpoint
app.post("/act_2", (req, res) => {
  let reply = req.body.reply;
  var userid = req.body.uid;
  const time = new Date();
  const answer = "test2";
  if (reply == answer) {
    let result = "correct";
    res.send(`{"answer":"${result}"}`);
    let stage = 2;
    async function addprogress({ time, userid, stage }) {
      const { data, error } = await superbase
        .from("progress")
        .update({ completed_at: time })
        .eq("uid", userid)
        .eq("stage", stage);

      if (error) {
        console.log(error);
        return;
      }
      if (data) {
        console.log(data);
      }
    }
    addprogress({ time, userid, stage });

    var newStage = 3;
    async function newProgress({ newStage, userid }) {
      const { data, error } = await supabase.from("progress").insert({
        stage: newStage,
        uid: userid,
      });
      if (error) {
        console.log(error);
        return;
      }
    }
    newProgress({ newStage, userid });
  } else {
    let result = "incorrect";
    res.send(`{"answer":"${result}"}`);
    return;
  }
});

//act 3 p1 endpoint
app.post("/act_3_p1", (req, res) => {
  let reply = req.body.reply;
  var userid = req.body.uid;
  const time = new Date();
  const answer = "test31";
  if (reply == answer) {
    let result = "correct";
    res.send(`{"answer":"${result}"}`);
  } else {
    let result = "incorrect";
    res.send(`{"answer":"${result}"}`);
    return;
  }
});

//act 3 p2 endpoint
app.post("/act_3_p2", (req, res) => {
  let reply = req.body.reply;
  var userid = req.body.uid;
  const time = new Date();
  const answer = "test32";
  if (reply == answer) {
    let result = "correct";
    res.send(`{"answer":"${result}"}`);
    let stage = 3;
    async function addprogress({ time, userid, stage }) {
      const { data, error } = await superbase
        .from("progress")
        .update({ completed_at: time })
        .eq("uid", userid)
        .eq("stage", stage);

      if (error) {
        console.log(error);
        return;
      }
      if (data) {
        console.log(data);
      }
    }
    addprogress({ time, userid, stage });

    var newStage = 4;
    async function newProgress({ newStage, userid }) {
      const { data, error } = await supabase.from("progress").insert({
        stage: newStage,
        uid: userid,
      });
      if (error) {
        console.log(error);
        return;
      }
    }
    newProgress({ newStage, userid });
  } else {
    let result = "incorrect";
    res.send(`{"answer":"${result}"}`);
    return;
  }
});

//act 4 endpoint
app.post("/act_4", (req, res) => {
  let reply = req.body.reply;
  var userid = req.body.uid;
  const time = new Date();
  const answer = "test4";
  if (reply == answer) {
    let result = "correct";
    res.send(`{"answer":"${result}"}`);
    let stage = 4;
    async function addprogress({ time, userid, stage }) {
      const { data, error } = await superbase
        .from("progress")
        .update({ completed_at: time })
        .eq("uid", userid)
        .eq("stage", stage);

      if (error) {
        console.log(error);
        return;
      }
      if (data) {
        console.log(data);
      }
    }
    addprogress({ time, userid, stage });

    var newStage = 5;
    async function newProgress({ newStage, userid }) {
      const { data, error } = await supabase.from("progress").insert({
        stage: newStage,
        uid: userid,
      });
      if (error) {
        console.log(error);
        return;
      }
    }
    newProgress({ newStage, userid });
  } else {
    let result = "incorrect";
    res.send(`{"answer":"${result}"}`);
    return;
  }
});

//act 5 endpoint
app.post("/act_5", (req, res) => {
  let reply = req.body.reply;
  var userid = req.body.uid;
  const time = new Date();
  const answer = "test5";
  if (reply == answer) {
    let result = "correct";
    res.send(`{"answer":"${result}"}`);
    let stage = 5;
    async function addprogress({ time, userid, stage }) {
      const { data, error } = await superbase
        .from("progress")
        .update({ completed_at: time })
        .eq("uid", userid)
        .eq("stage", stage);

      if (error) {
        console.log(error);
        return;
      }
      if (data) {
        console.log(data);
      }
    }
    addprogress({ time, userid, stage });
  } else {
    let result = "incorrect";
    res.send(`{"answer":"${result}"}`);
    return;
  }
});

module.exports = app;
