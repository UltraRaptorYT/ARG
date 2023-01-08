var questionsObj = {
  "What is the name of the city?":
    "04fc15daab02863fbe1b4f2790d7c92b8694f1a4d1b12313a3f3fb05103de03b0e4650dc81e0318b53f8b5e3398171cfa758199433615cf7aba760af361c96ef",
  "Which time duration did the legend take place in?":
    "d10b60cc0d5ba2bb3612da819ec08c6493c01fe58b26e5ae358ec74c86973a76f6f9313a694c7a7b59554ad7987bb7b7236422542df17d38825153aa2a6ef373",
  "What were the soldiers whose job was to protect the city called?":
    "212236554d65e680d53db59387abf437db4093ef28656fb744363445b63b4fd084df96c385f6eaded47a88ff64ccb3647a0b2a3c085e2f6dc17881b9e4af472f",
  "What was the bot's common name?":
    "fd28314011986bd48ebdb740548795529cbd37a12d67774aae946b561532384a9c4f16d376bd6fd418522f82b34fc75df8675c8e1fe1e4671fc802dcf821db39",
  "Name of the event that caused technology to be lost and wars to break out?":
    "8da6a65a4ae92184cfbeab2b9e9c4f4b956798971feb3635292fa88333edbba081c026272cb43bcb0ab1b5fc2c5496bda1c93ac7aabf6164ad1b774e417e614e",
};

const URL = "https://soccargbackend.onrender.com";

var binaryQn = {
  "Which corporation was the serum made by?":
    "504a6ca35e56ba83ba77e47c179bbba9c65525135f2331cfc31527da37e1a9432f766cceaa97f8be6cbe0389c5b1130610507315534eb120c5d4e3469241f7e4",
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

function hex(str) {
  var hex = "";
  for (var i = 0; i < str.length; i++) {
    var decimal = String(str[i].charCodeAt(0).toString(16));
    hex += decimal + " ";
  }
  return hex;
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

var functionList = ["encode", "binary", "caesarEncrypt", "hex"];

function type() {
  let textChar = text.charAt(textLength++);
  let paragraph = document.getElementById("question");
  let charElement = document.createTextNode(textChar);
  paragraph.appendChild(charElement);
  if (textLength < text.length + 1) {
    setTimeout("type()", 10);
  } else {
    text = "";
  }
}

functionList.sort(() => Math.random() - 0.5);

Array.prototype.swapItems = function (a, b) {
  this[a] = this.splice(b, 1, this[a])[0];
  return this;
};

function getQuestion() {
  document.getElementById("question").innerHTML = "";
  document.getElementById("questionNo").innerHTML = `${current + 1} / ${
    functionList.length + 1
  }`;
  textLength = 0;
  text = questionsArr[current];
  if (current + 1 <= functionList.length) {
    if (functionList[current] == "caesarEncrypt") {
      random = parseInt(Math.random() * 12 + 2);
      text = eval(functionList[current])(text, random);
    } else if (functionList[current] == "binary") {
      if (text.length >= 50) {
        let newCurrent = current;
        do {
          text = questionsArr[newCurrent];
          if (text.length >= 50 || newCurrent <= functionList.length) {
            break;
          }
          newCurrent++;
        } while (text.length >= 50 || newCurrent <= functionList.length);
        if (newCurrent > functionList.length) {
          questionsArr.splice(
            current,
            0,
            Object.keys(binaryQn)[Math.random() * Object.keys(binaryQn).length]
          );
        } else {
          questionsArr.swapItems(current, newCurrent);
        }
        text = questionsArr[current];
      }
      text = eval(functionList[current])(text);
    } else {
      text = eval(functionList[current])(text);
    }
  }
  type();
}

// hash the input and then
document.getElementById("submit").addEventListener("click", () => {
  submit();
});

document.getElementById("answer").addEventListener("keydown", (e) => {
  document.getElementById("err").classList.add(`opacity-0`);
  if (e.key == "Enter") {
    submit();
  }
});

function submit() {
  var inputText = document.getElementById("answer");
  crypto.subtle
    .digest(
      "SHA-512",
      new TextEncoder().encode(inputText.value.toUpperCase().trim())
    )
    .then(function (hash) {
      const hashedUserInput = Array.prototype.map
        .call(new Uint8Array(hash), (x) => ("00" + x.toString(16)).slice(-2))
        .join("");
      if (hashedUserInput === questionsObj[questionsArr[current]]) {
        current++;
        if (current <= functionList.length) {
          getQuestion();
        } else {
          let currentStage = localStorage.getItem("stage");
          if (currentStage > 5) {
            window.location.href = "./act5.html";
            return;
          }
          let userid = localStorage.getItem("uid");
          let passcode =
            "Knacam,jW6s@Y9#`~2W;&sr+;4eA@yUwA%*rYh~2uxtjQ38d])s^zbdA~AWTcfnD";
          axios({
            method: "post",
            url: URL + "/newProgress",
            data: {
              currentStage,
              userid,
              passcode,
            },
          }).then(({ data, error }) => {
            if (error) {
              return alert(error);
            }
            if (data) {
              localStorage.setItem("stage", data.stage);
              localStorage.setItem("uid", data.uid);
              return;
            }
          });
          document.getElementById("err").classList.remove(`opacity-0`);
          document.getElementById("err").innerHTML = `
            <div class="flex flex-col text-green-500 gap-2">
              Congratulations! 
              <button class="rounded-full p-2 bg-slate-500 hover:bg-slate-600 text-white font-normal" id="nextStage">Next Stage</button>
            </div>
          `;
          inputText.blur();
          current--;
          document.getElementById("nextStage").addEventListener("click", () => {
            if (current + 1 > functionList.length) {
              window.location.href = "./act5.html";
            }
          });
        }
      } else {
        document.getElementById("err").classList.remove(`opacity-0`);
      }
      inputText.value = "";
    });
}

getQuestion();
