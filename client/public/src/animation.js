pause_list = document.querySelectorAll(".pause");

document.getElementById("pause-animation-btn").addEventListener("click", ()=> {
    for (var elm of pause_list) {
        elm.classList.toggle("paused")
    }
})