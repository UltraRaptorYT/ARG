const bot = document.getElementById("bot");

bot.addEventListener("click", () => {
  if (bot.querySelector(".iris").classList.contains("sleep")) {
    setTimeout(() => {
      bot.querySelector(".iris").classList.remove("sleep");
    }, 500);
  }
});
