const p = document.createElement("h3");

p.style.marginTop = "20px";
document.addEventListener("DOMContentLoaded", () => {
  const hashedPassword =
    "96c32e6230333f3d32a3482cd4a8eb85c88c2f6c4de80788184e9cd5adc4fa43";
  const passwordInput = document.getElementById("password-input");
  const submitButton = document.getElementById("password-submit");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    crypto.subtle
      .digest("SHA-256", new TextEncoder().encode(passwordInput.toUpperCase().value))
      .then(function (hash) {
        const hashedUserInput = Array.prototype.map
          .call(new Uint8Array(hash), (x) => ("00" + x.toString(16)).slice(-2))
          .join("");
        if (hashedUserInput === hashedPassword) {
          p.style.color = "green";
          p.textContent = "Correct password!";
          window.location.href = "./chat.html";
        } else {
          p.style.color = "red";
          p.textContent = "Incorrect password! Try Again!";
          passwordInput.value = "";
        }
        submitButton.insertAdjacentElement("afterend", p);
      });
  });

  document.getElementById("password-input").addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      crypto.subtle
        .digest("SHA-256", new TextEncoder().encode(passwordInput.value))
        .then(function (hash) {
          const hashedUserInput = Array.prototype.map
            .call(new Uint8Array(hash), (x) =>
              ("00" + x.toString(16)).slice(-2)
            )
            .join("");
          if (hashedUserInput === hashedPassword) {
            p.style.color = "green";
            p.textContent = "Correct password!";
            window.location.href = "./chat.html";
          } else {
            p.style.color = "red";
            p.textContent = "Incorrect password! Try Again!";
            passwordInput.value = "";
          }
          submitButton.insertAdjacentElement("afterend", p);
        });
    }
  });
});

var stage = localStorage.getItem("stage");

if (stage > 1) {
  document.getElementById("nav").classList.remove("opacity-0");
}

if (stage == 2) {
  document.getElementById("Act2").setAttribute("href", "./ABE.html");
  document.getElementById("Act2").querySelector("li").innerHTML = `ABE`;
}

if (!localStorage.getItem("uid")) {
  window.history.back();
}
