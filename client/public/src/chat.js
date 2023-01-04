var chat = document.getElementById("chat");

var mute = document.getElementById("mute");

const URL = "https://soccargbackend.onrender.com";

document.querySelector("#message").addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    writeMessage();
  }
});

document.querySelector("#send").addEventListener("click", () => {
  writeMessage();
});

function writeMessage() {
  var message = document.getElementById("message").value;
  if (message != "") {
    chat.innerHTML += `
			<div class="me bubble">${message}</div>
		`;
    scrollBottom();
    chat.innerHTML += `
			<div class="other bubble typing">
          <span></span>
          <span></span>
          <span></span>
      </div>
		`;
    axios({
      method: "post",
      url: URL + "/api/chat",
      data: {
        prompt: message,
      },
    })
      .then((response) => {
        autoReply(response.data.message);
        if (response.data.openDoor) {
          let passcode = response.data.openDoor;
          let currentStage = localStorage.getItem("stage");
          let userid = localStorage.getItem("uid");
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
              window.location.href = "./ABE.html";
              return;
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  document.getElementById("message").value = "";
}

function autoReply(message = `Hello!`) {
  if (chat.lastElementChild) {
    console.log(chat.lastElementChild);
    if (chat.lastElementChild.classList.contains("typing")) {
      chat.lastElementChild.remove();
    }
  }
  chat.innerHTML += `
	<div class="other bubble">${message}</div>
	`;
  playText(message);
  scrollBottom();
}

const synth = window.speechSynthesis;

function playText(text) {
  var utterance = new SpeechSynthesisUtterance();
  if (synth.paused && synth.speaking) {
    return synth.resume();
  }
  if (speechSynthesis.speaking) return;
  utterance.text = text;
  utterance.rate = 1;
  checkMute();
  if (mute.dataset.mute == "false") {
    synth.speak(utterance);
  }
}

function stopText() {
  synth.cancel();
}

function scrollBottom() {
  chat.scrollTo(0, chat.scrollHeight);
}

mute.addEventListener("click", () => {
  if (mute.dataset.mute == "true") {
    mute.children[0].classList.add("bi-volume-up-fill");
    mute.children[0].classList.remove("bi-volume-mute-fill");
    mute.dataset.mute = "false";
    localStorage.setItem("mute", "false");
  } else {
    mute.children[0].classList.remove("bi-volume-up-fill");
    mute.children[0].classList.add("bi-volume-mute-fill");
    mute.dataset.mute = "true";
    localStorage.setItem("mute", "true");
    stopText();
  }
});

function checkMute() {
  if (localStorage.getItem("mute")) {
    mute.dataset.mute = localStorage.getItem("mute");
    if (mute.dataset.mute == "false") {
      mute.children[0].classList.add("bi-volume-up-fill");
      mute.children[0].classList.remove("bi-volume-mute-fill");
    } else {
      mute.children[0].classList.remove("bi-volume-up-fill");
      mute.children[0].classList.add("bi-volume-mute-fill");
    }
  } else {
    localStorage.setItem("mute", "false");
  }
}
