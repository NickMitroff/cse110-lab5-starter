// expose.js


window.addEventListener('DOMContentLoaded', init);

const soundSelectorName = 'horn'
const volumeSliderName = 'volume'
const imagePaths = {
  noImage: "assets/images/no-image.svg",
  airHorn: "assets/images/air-horn.svg",
  carHorn: "assets/images/car-horn.svg",
  partyHorn: "assets/images/party-horn.svg",
}
const images = [imagePaths.noImage, imagePaths.airHorn, imagePaths.carHorn, imagePaths.partyHorn]
const iconPaths = {
  mute: "assets/icons/volume-level-0.svg",
  vol1: "assets/icons/volume-level-1.svg",
  vol2: "assets/icons/volume-level-2.svg",
  vol3: "assets/icons/volume-level-3.svg",
}
const icons = [iconPaths.mute, iconPaths.vol1, iconPaths.vol2, iconPaths.vol3]
const sfxPaths = {
  airHorn: "assets/audio/air-horn.mp3",
  carHorn: "assets/audio/car-horn.mp3",
  partyHorn: "assets/audio/party-horn.mp3",
}
const sfx = [null, sfxPaths.airHorn, sfxPaths.carHorn, sfxPaths.partyHorn];

const jsConfetti = new JSConfetti();

// HTML objects
let img;
let button;
let volumeSlider;
let audio;
let volumeIcon;

// variables
let index = 0;
let volume = 50;

function init() {
  addEventListener("input", onSelect);
  addEventListener("click", async (e) => {await onClick(e)});

  img = document.querySelector("img");
  button = document.querySelector("button");
  volumeSlider = document.getElementById("volume");
  audio = document.querySelector("audio");

  const volumeControls = document.getElementById("volume-controls");
  volumeIcon = volumeControls.querySelector("img");

  volume = volumeSlider.value;
}

function onSelect(e) {
  const name = e.target.name;

  if (name == soundSelectorName) {
    index = e.srcElement.selectedIndex;
    img.src = images[index];
  }
  else if (name == volumeSliderName) {
    volume = e.target.value;
    let volumeLevel = 0;
    if (volume >= 67) volumeLevel = 3;
    else if (volume >= 33) volumeLevel = 2;
    else if (volume >= 1) volumeLevel = 1;
    volumeIcon.src = icons[volumeLevel];
    volumeIcon.alt = "Volume level " + volumeLevel;
  }

}

async function onClick(e) {
  if (e.target == button && index != 0) {
    const sound = sfx[index];
    audio.src = sound;
    audio.volume = volume / 100;
    await audio.play();

    if (index == 3) jsConfetti.addConfetti();
  }
}