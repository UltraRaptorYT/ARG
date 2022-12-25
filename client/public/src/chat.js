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
  message = `Hello! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ex maiores ab deleniti magnam quidem quibusdam consectetur sequi. Ducimus delectus, vitae dolores ipsa labore vel doloremque esse odit blanditiis accusamus!
    Iusto non fugiat tempora commodi quidem repudiandae, obcaecati id ab eum nemo tenetur molestias nesciunt modi illo? Animi earum perspiciatis nam quae, quod rerum assumenda, non officiis nobis odit sit.
    Perspiciatis quaerat reprehenderit quasi non dolores? Expedita labore magnam delectus, quos ipsum deleniti inventore amet sequi maiores, debitis dolore iure molestiae aliquam omnis. Delectus, adipisci temporibus laborum eum quia dolor?
    Accusantium maxime excepturi nemo dolores, porro corporis, quisquam minus cumque, vitae mollitia molestiae iste minima non fugiat quia ipsa? Ad porro culpa ex dolores dolorem voluptatem, aliquid dolor sit voluptas.
    Facere consequuntur debitis in, laborum sunt dolorum, tempore praesentium dolorem fugiat mollitia laboriosam ut harum assumenda adipisci libero eveniet nostrum numquam, magni iure at. Similique placeat delectus minus unde totam?`
) {
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
