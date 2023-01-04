if (!localStorage.getItem("uid")) {
  window.history.back();
}

var stage = localStorage.getItem("stage");

if (stage == 2) {
  document.getElementById("Act2").setAttribute("href", "./ABE.html");
  document.getElementById("Act2").querySelector("li").innerHTML = `ABE`;
}
