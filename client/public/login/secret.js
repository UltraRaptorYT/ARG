const p = document.createElement("h3");
p.style.marginTop = "20px";
document.addEventListener("DOMContentLoaded", () => {
  const hashedPassword =
    "8115afcd47340e9ce2eda249a5436759b8d91e918ac5d9d53ce0a9488894e9fb";
  const passwordInput = document.getElementById("password-input");
  const submitButton = document.getElementById("password-submit");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    crypto.subtle
      .digest("SHA-256", new TextEncoder().encode(passwordInput.value))
      .then(function (hash) {
        const hashedUserInput = Array.prototype.map
          .call(new Uint8Array(hash), (x) => ("00" + x.toString(16)).slice(-2))
          .join("");
        if (hashedUserInput === hashedPassword) {
          p.style.color = "green";
          p.textContent = "Correct password!";
        } else {
          p.style.color = "red";
          p.textContent = "Incorrect password! Try Again!";
        }
        submitButton.insertAdjacentElement("afterend", p);
      });
  });
});
