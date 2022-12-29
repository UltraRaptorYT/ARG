// Hash answers

var questionsObj = {
  "What is the name of the city?": "",
  "Which time duration did the legend take place in?": "",
  "What were the soldiers names whos job was to protect the city called?": "",
  "What was the bots name?": "",
  "Which corporation was the serum made by?": "",
  "What was the name of the event that caused technology to be lost and wars to break out?":
    "",
};

var questionsArr = Object.keys(questionsObj);

questionsArr.sort(() => Math.random() - 0.5);

function caesarEncrypt(plaintext, shift) {
  shift = shift % 26;
  var ciphertext = "";
  for (var i = 0; i < plaintext.length; i++) {
    var c = plaintext[i];
    if (c.match(/[a-z]/i)) {
      var code = plaintext.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    ciphertext += c;
  }
  return ciphertext + ` | ${shift}`;
}

function binary(str) {
  var binary = "";
  for (var i = 0; i < str.length; i++) {
    var decimal = String(str[i].charCodeAt(0).toString(2));
    while (decimal.length < 8) {
      decimal = "0" + decimal;
    }
    binary += decimal + " ";
  }
  return binary;
}

const MORSE_CODE = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
  " ": "/",
};

function encode(plainText) {
  let encodedText = "";
  for (let i = 0; i < plainText.length; i++) {
    encodedText += MORSE_CODE[plainText[i].toLowerCase()] + " ";
  }
  return encodedText.trim();
}

var current = 0;

var textLength = 0;
var text = "";

var functionList = ["encode", "binary", "caesarEncrypt"];

function type() {
  let textChar = text.charAt(textLength++);
  let paragraph = document.getElementById("question");
  let charElement = document.createTextNode(textChar);
  paragraph.appendChild(charElement);
  if (textLength < text.length + 1) {
    setTimeout("type()", 20);
  } else {
    text = "";
  }
}

functionList.sort(() => Math.random() - 0.5);

function getQuestion() {
  document.getElementById("question").innerHTML = "";
  textLength = 0;
  text = questionsArr[current];
  if (current + 1 <= functionList.length) {
    if (functionList[current] == "caesarEncrypt") {
      random = parseInt(Math.random() * 23 + 2);
      text = eval(functionList[current])(text, random);
    } else {
      text = eval(functionList[current])(text);
    }
  }
  type();
}

// hash the input and then
document.getElementById("submit").addEventListener("click", () => {
  var inputText = document.getElementById("answer");
  current++;
  if (current <= functionList.length) {
    getQuestion();
  } else {
    alert("Complete");
  }
});

getQuestion();
