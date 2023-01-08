const p = document.createElement("h3");

const URL = "https://soccargbackend.onrender.com";

p.style.marginTop = "20px";
document.addEventListener("DOMContentLoaded", () => {
  const hashedPassword =
    "96c32e6230333f3d32a3482cd4a8eb85c88c2f6c4de80788184e9cd5adc4fa43";
  const passwordInput = document.getElementById("password-input");
  const submitButton = document.getElementById("password-submit");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    crypto.subtle
      .digest(
        "SHA-256",
        new TextEncoder().encode(passwordInput.value.toUpperCase())
      )
      .then(function (hash) {
        const passcode = Array.prototype.map
          .call(new Uint8Array(hash), (x) => ("00" + x.toString(16)).slice(-2))
          .join("");
        if (passcode === hashedPassword) {
          p.style.color = "green";
          p.textContent = "Correct password!";
          let currentStage = localStorage.getItem("stage");
          let userid = localStorage.getItem("uid");
          axios({
            method: "post",
            url: URL + "/newProgress",
            data: {
              currentStage,
              userid,
              passcode,
            },
          }).then(({ data, error }) => {
            if (error) {
              return alert(error);
            }
            if (data) {
              localStorage.setItem("stage", data.stage);
              localStorage.setItem("uid", data.uid);
              window.location.href = "./crossword.html";
              return;
            }
          });
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
        .digest(
          "SHA-256",
          new TextEncoder().encode(passwordInput.value.toUpperCase())
        )
        .then(function (hash) {
          const passcode = Array.prototype.map
            .call(new Uint8Array(hash), (x) =>
              ("00" + x.toString(16)).slice(-2)
            )
            .join("");
          if (passcode === hashedPassword) {
            p.style.color = "green";
            p.textContent = "Correct password!";
            let currentStage = localStorage.getItem("stage");
            let userid = localStorage.getItem("uid");
            axios({
              method: "post",
              url: URL + "/newProgress",
              data: {
                currentStage,
                userid,
                passcode,
              },
            }).then(({ data, error }) => {
              if (error) {
                return alert(error);
              }
              if (data) {
                localStorage.setItem("stage", data.stage);
                localStorage.setItem("uid", data.uid);
                window.location.href = "./crossword.html";
                return;
              }
            });
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

if (!localStorage.getItem("uid")) {
  window.history.back();
}
