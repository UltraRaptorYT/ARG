const p = document.createElement("h3");

p.style.marginTop = "20px";
document.addEventListener("DOMContentLoaded", () => {
  const hashedPassword =
    "98f3aaa79f6ba1759e046f873955785d869eec78b60ff7ad2f1bb62d50ea8a0a";
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
          passwordInput.value = "";
        }
        submitButton.insertAdjacentElement("afterend", p);
      });
  });

  document.getElementById("password-input").addEventListener("input", (e) => {
    document.getElementById("password-input").value = document
      .getElementById("password-input")
      .value.replace(/[^0-9]/g, "");
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
