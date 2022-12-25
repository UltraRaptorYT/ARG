var chat = document.getElementById("chat");

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
    setTimeout(autoReply(), 5000);
  }
  document.getElementById("message").value = "";
}

function autoReply(
  message = `Hello!`
) {
  chat.innerHTML += `
	<div class="other bubble">${message}</div>
	`;
  playText(message);
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

var mute = document.getElementById("mute");

mute.addEventListener("click", () => {
  if (mute.dataset.mute == "true") {
    mute.children[0].classList.add("bi-volume-up-fill");
    mute.children[0].classList.remove("bi-volume-mute-fill");
    mute.dataset.mute = "false";
  } else {
    mute.children[0].classList.remove("bi-volume-up-fill");
    mute.children[0].classList.add("bi-volume-mute-fill");
    mute.dataset.mute = "true";
    stopText();
  }
});
