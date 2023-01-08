const bot = document.getElementById("bot");

bot.addEventListener("click", () => {
  if (bot.querySelector(".iris").classList.contains("sleep")) {
    bot.querySelector(".iris").classList.remove("sleep");
    bot.querySelector(".iris").classList.add("waking");
    bot.addEventListener("animationend", (event) => {
      bot.querySelector(".iris").classList.remove("waking");
      setTimeout(() => {
        bot.querySelector(".iris").classList.add("move");
      }, 1000);
      document.querySelector("#back").classList.add("animate");
      document.body.classList.add(`body`);
      document.getElementById("nav").classList.remove("opacity-0");
      document.getElementById("chatBody").classList.remove("opacity-0");
      document.getElementById("container").classList.remove("absolute");
      autoReply(
        `Hello Traveller! Welcome to Apeiropolis! I am Constantine Dimitris Papageorgiou the third or you can call me Bob!`
      );
    });
  }
});

if (!localStorage.getItem("uid")) {
  window.history.back();
}

var stage = localStorage.getItem("stage");

if (stage > 1) {
  document.getElementById("nav").classList.remove("opacity-0");
}

if (stage == 2) {
  document.getElementById("Act2").setAttribute("href", "./ABE.html");
  document.getElementById("Act2").querySelector("li").innerHTML = `ABE`;
}
