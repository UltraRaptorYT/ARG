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
      console.log("Morning");
      document.querySelector("#back").classList.add("animate");
      document.body.classList.add(`body`);
      document.getElementById("nav").classList.remove("opacity-0");
      document.getElementById("chatBody").classList.remove("opacity-0");
      document.getElementById("container").classList.remove("absolute");
      autoReply(`Hello Traveller! Welcome to AI World!`);
    });
  }
});
