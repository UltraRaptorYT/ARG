// hide show button
function hideshow() {
    var x = document.getElementById("hideShow");
    if (x.style.display === "none")
        x.style.display = "block";
    else
        x.style.display = "none";
}

const btn = document.getElementById("btn");
btn.addEventListener('click', function handleClick() {
    const initialText = 'Hide';

    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase()))
        btn.textContent = 'Show';
    else
        btn.textContent = initialText;
})