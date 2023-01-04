function checkWord() {
  const hashedPassword1 =
    "2d8ba2548a08d84f2615cb825db364ec25936e1994b1a9dffbb860d82534e1ade89f5ce89747f7bbf14a8f4a87240e6e";
  const hashedPassword2 =
    "5069682745afa410be5abdb99187bd8acf431d5397b31faa66f41df0d472891243b8c6a062bd80389c45bbbd3c27ded2";
  const hashedPassword3 =
    "4e522fb1665c9f3d4ad6bf5a1bdb5cf8df107fed2417c43f899b2ffbc9061f3a5f04081f23b57dcda52756e0d629eb4d";
  const secretWord1Ele = document.getElementById("secretWord1");
  const secretWord2Ele = document.getElementById("secretWord2");
  const secretWord3Ele = document.getElementById("secretWord3");
  const secretWord1 = loopText(
    secretWord1Ele.querySelectorAll(".drag-container .drag-item")
  );
  const secretWord2 = loopText(
    secretWord2Ele.querySelectorAll(".drag-container .drag-item")
  );
  const secretWord3 = loopText(
    secretWord3Ele.querySelectorAll(".drag-container .drag-item")
  );
  crypto.subtle
    .digest("SHA-384", new TextEncoder().encode(secretWord1))
    .then(function (hash) {
      var hashedUserInput1 = Array.prototype.map
        .call(new Uint8Array(hash), (x) => ("00" + x.toString(16)).slice(-2))
        .join("");
      if (hashedUserInput1 === hashedPassword1) {
        crypto.subtle
          .digest("SHA-384", new TextEncoder().encode(secretWord2))
          .then(function (hash) {
            var hashedUserInput2 = Array.prototype.map
              .call(new Uint8Array(hash), (x) =>
                ("00" + x.toString(16)).slice(-2)
              )
              .join("");
            if (hashedUserInput2 === hashedPassword2) {
              crypto.subtle
                .digest("SHA-384", new TextEncoder().encode(secretWord3))
                .then(function (hash) {
                  var hashedUserInput3 = Array.prototype.map
                    .call(new Uint8Array(hash), (x) =>
                      ("00" + x.toString(16)).slice(-2)
                    )
                    .join("");
                  if (hashedUserInput3 === hashedPassword3) {
                    document.getElementById(
                      "err"
                    ).innerHTML = `<a href="./AR.html" class="text-success">Congratulations! You have complete the puzzle! The location is at T11[ELEVEN] SQUARE and you will need to find a PIANO. Click Me!</a>`;
                    document
                      .getElementById("err")
                      .classList.remove("opacity-0");
                    console.log("Yay!");
                  } else {
                    document.getElementById(
                      "err"
                    ).textContent = `Word #3 is wrong. Please try again!`;
                    document
                      .getElementById("err")
                      .classList.remove("opacity-0");
                    console.log("Nay!");
                  }
                });
            } else {
              document.getElementById(
                "err"
              ).textContent = `Word #2 is wrong. Please try again!`;
              document.getElementById("err").classList.remove("opacity-0");
              console.log("Nay!");
            }
          });
      } else {
        document.getElementById(
          "err"
        ).textContent = `Word #1 is wrong. Please try again!`;
        document.getElementById("err").classList.remove("opacity-0");
        console.log("Nay!");
      }
    });
}

function loopText(elementArr) {
  var string = "";
  for (ele of elementArr) {
    string += ele.textContent;
  }
  return string;
}
