var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
const supabase = require('../config/supabase');

app.options('*', cors());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(urlencodedParser);
app.use(cors());


//sign up endpoint
app.post('/signup', (req, res) => {
  var email = req.body.email
  var full_name = req.body.full_name
  var password = req.body.password
  var admin_number = req.body.admin_number
  var student_class = req.body.student_class

  async function signUp({ full_name, email, password, admin_number, student_class }) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: full_name,
          admin_number: admin_number,
          student_class: student_class,
        },
      },

    });

    if (error) {
      console.log(error)
      return
    } else {
      let stage = 1
      let uid = data["user"]["id"]
      async function newProgress({ stage, uid }) {
        const { data, error } = await supabase.from('progress').insert({
          stage: stage,
          uid: uid,
        });
        if (error) {
          console.log(error)
          return
        }
      }
      newProgress({ stage, uid });

    }
  }
  signUp({ full_name, email, password, admin_number, student_class });



})

//login endpoint
app.post('/login', (req, res) => {
  var email = req.body.email
  var password = req.body.password

  if (email == '' || password == '') {
    res.status(500).send('An input is empty')
    return
  } else {
    async function signInWithEmail({ email, password }) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        console.log(error)
        return
      } else {
        console.log("successful")
      }
      var reply = data["user"]['id']
      res.send(`{"user":"${reply}"}`)
    }
    signInWithEmail({ email, password })

  }

})

//act 1 part 1 endpoint 
app.post('/secrets', (req, res) => {
  let secret = req.body.secret
  const hashedPassword = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08' //answer is 'test'
  if (secret == hashedPassword) {
    let result = 'correct'
    res.send(`{"answer":"${result}"}`)
    return
  } else {
    let result = 'incorrect'
    res.send(`{"answer":"${result}"}`)
    return
  }

})

//act 1 part 2 endpoint
app.post('/AI_chatbot', (req, res) => {
  let reply = req.body.reply
  var userid = req.body.uid
  const time = ((new Date()).toISOString())
  const answer = 'test'
  if (reply == answer) {
    let result = 'correct'
    res.send(`{"answer":"${result}"}`)
  } else {
    let result = 'incorrect'
    res.send(`{"answer":"${result}"}`)
    return
  }

  async function addprogress({time,userid}) {
    const { data, error } = await supabase.from('progress')
      .update({ completed_at: time })
      .eq('uid',userid)

    if (error) {
      console.log(error)
      return
    }
    if (data) {
      console.log(data)
    }
  }
  addprogress({time,userid});
  console.log(userid)
})

//act 2 endpoint
app.post('/act_2', (req, res) => {
  let reply = req.body.reply
  var uid = req.body.uid
  var stage = 3
  const answer = 'test2'
  if (reply == answer) {
    let result = 'correct'
    res.send(`{"answer":"${result}"}`)
    async function newProgress({ stage, uid }) {
      const { data, error } = await supabase.from('progress').insert({
        stage: stage,
        uid: uid,
      });
      if (error) {
        console.log(error)
        return
      }
    }
    newProgress({ stage, uid });

  } else {
    let result = 'incorrect'
    res.send(`{"answer":"${result}"}`)
    return
  }
})

//act 3 p1 endpoint
app.post('/act_3_p1', (req, res) => {
  let reply = req.body.reply
  var userid = req.body.uid
  const answer = 'test31'
  if (reply == answer) {
    let result = 'correct'
    res.send(`{"answer":"${result}"}`)
  } else {
    let result = 'incorrect'
    res.send(`{"answer":"${result}"}`)
    return
  }
})

//act 3 p2 endpoint
app.post('/act_3_p2', (req, res) => {
  let reply = req.body.reply
  var uid = req.body.uid
  var stage = 4
  const answer = 'test32'
  if (reply == answer) {
    let result = 'correct'
    res.send(`{"answer":"${result}"}`)
    async function newProgress({ stage, uid }) {
      const { data, error } = await supabase.from('progress').insert({
        stage: stage,
        uid: uid,
      });
      if (error) {
        console.log(error)
        return
      }
    }
    newProgress({ stage, uid });
  } else {
    let result = 'incorrect'
    res.send(`{"answer":"${result}"}`)
    return
  }
})

//act 4 endpoint
app.post('/act_4', (req, res) => {
  let reply = req.body.reply
  var uid = req.body.uid
  var stage = 5
  const answer = 'test4'
  if (reply == answer) {
    let result = 'correct'
    res.send(`{"answer":"${result}"}`)
    async function newProgress({ stage, uid }) {
      const { data, error } = await supabase.from('progress').insert({
        stage: stage,
        uid: uid,
      });
      if (error) {
        console.log(error)
        return
      }
    }
    newProgress({ stage, uid });
  } else {
    let result = 'incorrect'
    res.send(`{"answer":"${result}"}`)
    return
  }
})

//act 5 endpoint
app.post('/act_5', (req, res) => {
  let reply = req.body.reply
  var userid = req.body.uid
  const answer = 'test5'
  if (reply == answer) {
    let result = 'correct'
    res.send(`{"answer":"${result}"}`)
  } else {
    let result = 'incorrect'
    res.send(`{"answer":"${result}"}`)
    return
  }
})


module.exports = app;












