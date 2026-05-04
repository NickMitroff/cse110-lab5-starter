// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;

let voiceSelect = document.getElementById("voice-select");
let button;
let textarea = document.querySelector("textarea");
let voices = synth.getVoices();
let curVoice;
let message;
let smile;

function init() {
  console.log(voiceSelect);
  populateVoiceList();
  synth.onvoiceschanged = () => {
    populateVoiceList();
  }
  const explore = document.getElementById("explore");
  button = explore.querySelector("button");
  smile = explore.querySelector("img");

  addEventListener("click", async (e) => {await onClick(e)});
  textarea.addEventListener("change", onTextChange);
  voiceSelect.addEventListener("change", onVoiceChange);
}

// from the SpeechSynthesis page on the MDN docs
function populateVoiceList() {
  voices = synth.getVoices();
  console.log(voices.length);

  for (const voice of voices) {
    console.log(voice);
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);

  }

}

function onTextChange(e) {
  message = e.target.value;
}

function onVoiceChange(e) {
  curVoice = voices[e.target.selectedIndex];
}

async function onClick(e) {
  if (e.target == button) {
    const utterThis = new SpeechSynthesisUtterance(message);
    utterThis.voice = curVoice;
    smile.src = "assets/images/smiling-open.png";
    utterThis.addEventListener("end", (e) => {smile.src = "assets/images/smiling.png";});
    synth.speak(utterThis);
  }
}