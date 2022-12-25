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

function autoReply(message = "Hello!") {
  chat.innerHTML += `
	<div class="other bubble">${message}</div>
	`;
  scrollBottom();
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
  }
});
