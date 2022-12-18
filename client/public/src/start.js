const bot = document.getElementById("bot");

bot.addEventListener("click", () => {
  if (bot.querySelector(".iris").classList.contains("sleep")) {
    bot.querySelector(".iris").classList.remove("sleep");
  }
});
