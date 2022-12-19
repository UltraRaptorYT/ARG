const bot = document.getElementById("bot");

bot.addEventListener("click", () => {
  if (bot.querySelector(".iris").classList.contains("sleep")) {
    bot.querySelector(".iris").classList.remove("sleep");
    bot.querySelector(".iris").classList.add("waking");
    bot.addEventListener("animationend", (event) => {
      bot.querySelector(".iris").classList.remove("waking");
      alert("Morning")
    });
  }
});
