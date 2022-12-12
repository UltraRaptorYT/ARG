const p = document.createElement('p');
p.textContent = "";
function a(b, c) {
    for (let d = 0; d < c.length; d++) {
      const e = c.charCodeAt(d);
      b = (b << 5) - b + e | 0;
    }
    return b;
  }
  document.addEventListener("DOMContentLoaded", () => {
    const f = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'; // 'test'
    const g = document.getElementById("password-input");
    const h = document.getElementById("password-submit");
    h.addEventListener("click", (i) => {
      i.preventDefault();
      crypto.subtle.digest("SHA-256", new TextEncoder().encode(g.value))
        .then((j) => {
          const k = Array.prototype.map.call(new Uint8Array(j), (l) => (('00' + l.toString(16)).slice(-2))).join('');
          if (k === f) {
            p.style.color = "green";
            p.textContent = "Correct password!";
          } else {
            p.style.color = "red";
            p.textContent = "Incorrect password!";
          }
          document.body.appendChild(p);
        });
    });
  });
  