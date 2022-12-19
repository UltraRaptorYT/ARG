const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const textInput = document.getElementById('text');
let currentCharacter;

// Execute a function when the user presses a key on the keyboard
textInput.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        playText(textInput.value);
    }
});

playButton.addEventListener('click', () =>{
  playText(textInput.value);
})
pauseButton.addEventListener('click', pauseText);
stopButton.addEventListener('click', stopText);


// create new speech synthesis object
const utterance = new SpeechSynthesisUtterance();


utterance.addEventListener('end', () => {
  textInput.disabled = false
});

utterance.addEventListener('boundary', e => {
  currentCharacter = e.charIndex
});

// plays the text-to-speech voice and if pause is executed, on play button press, the voice will resume
function playText(text) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume()
  }
  if (speechSynthesis.speaking) return
  utterance.text = text; // speak the text given
  utterance.rate = 1; // sets speech speed to 1
  textInput.disabled = true; // when speaking, the text input becomes disabled (prevent crashing)
  speechSynthesis.speak(utterance);
}

// pause text-to-speech and resumes where the voice left off when play is pressed
function pauseText() {
  if (speechSynthesis.speaking){
    speechSynthesis.pause();
  } 
}

// stops the text-to-speech and restarts when play is pressed
function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}