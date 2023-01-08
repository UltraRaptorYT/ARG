if (!localStorage.getItem("uid")) {
  window.history.back();
}

var stage = localStorage.getItem("stage");

if (stage >= 2) {
  document.getElementById("Act2").setAttribute("href", "./ABE.html");
  document.getElementById("Act2").querySelector("li").innerHTML = `ABE`;
}
if (stage >= 3) {
  document.getElementById("Act3").setAttribute("href", "./crossword.html");
  document.getElementById("Act3").querySelector("li").innerHTML = `Word`;
}
if (stage >= 4) {
  document.getElementById("Act4").setAttribute("href", "./blackwall.html");
  document.getElementById("Act4").querySelector("li").innerHTML = `Black`;
}
if (stage >= 5) {
  document.getElementById("Act5").setAttribute("href", "./act5.html");
  document.getElementById("Act5").querySelector("li").innerHTML = `Act5`;
}
