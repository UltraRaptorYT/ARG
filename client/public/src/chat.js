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
