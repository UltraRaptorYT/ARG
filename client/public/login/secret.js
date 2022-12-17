const p = document.createElement('h3');
p.style.marginTop = "20px"; // There has to be a better way to do this
document.addEventListener("DOMContentLoaded", () => {
  const hashedPassword = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'
  const passwordInput = document.getElementById("password-input");
  const submitButton = document.getElementById("password-submit");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    crypto.subtle.digest("SHA-256", new TextEncoder().encode(passwordInput.value))
      .then(function (hash) {
        const hashedUserInput = Array.prototype.map.call(new Uint8Array(hash), x => (('00' + x.toString(16)).slice(-2))).join('');
        if (hashedUserInput === hashedPassword) {
          p.style.color = "green";
          p.textContent = "Correct password!";
        } else {
          p.style.color = "red";
          p.textContent = "Incorrect password!";
        }
        submitButton.insertAdjacentElement('afterend', p);
      });
  });
})