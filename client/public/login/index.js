function hideshow() {
    let x = document.getElementById("hideShow");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("btn").innerHTML = "Show";
    } else {
      x.style.display = "none";
      document.getElementById("btn").innerHTML = "Hide";
    }
  }