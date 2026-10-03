const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");
const cd = document.getElementById("cd");

let messages = [
  "You are doing better than you think. Keep going. ❤️",

  "You don't need to be perfect to be worthy of beautiful things. 🌷",

  "I hope something unexpectedly good happens to you today. ✨",

  "Please remember to be kind to yourself. You deserve the same kindness you give to others. 💗",

  "No matter how busy life gets, don't forget to stop and appreciate yourself. 🌸",

  "Someone out there is genuinely hoping that you have a beautiful day today. ❤️",
];

let compliments = [
  "You have a beautiful smile. 😊",

  "You are more special than you probably realize. 💗",

  "You have a beautiful personality. 🌷",

  "You deserve to be appreciated. ✨",

  "You make ordinary moments feel a little more special. 💕",

  "You are someone worth knowing and caring about. ❤️",

  "You have your own kind of beautiful. 🌸",
];

let messageIndex = 0;

function startPage() {
  document.querySelector(".welcome-card").style.display = "none";

  document.getElementById("mainContent").classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  createHearts();
}

function toggleMusic() {
  if (music.paused) {
    music.play();

    musicButton.innerHTML = "⏸ Pause Music";

    cd.classList.add("playing");
  } else {
    music.pause();

    musicButton.innerHTML = "▶ Play Music";

    cd.classList.remove("playing");
  }
}

function nextMessage() {
  messageIndex++;

  if (messageIndex >= messages.length) {
    messageIndex = 0;
  }

  document.getElementById("message").style.opacity = "0";

  setTimeout(function () {
    document.getElementById("message").innerText = messages[messageIndex];

    document.getElementById("message").style.opacity = "1";
  }, 300);
}

function giveCompliment() {
  let random = Math.floor(Math.random() * compliments.length);

  document.getElementById("compliment").innerText = compliments[random];
}

function mood(type) {
  let message = "";

  if (type === "happy") {
    message =
      "I'm happy that you're happy. Keep that beautiful smile today. 😊❤️";
  }

  if (type === "sad") {
    message =
      "It's okay to have bad days. You don't have to pretend to be okay all the time. Take your time. You'll get through this. 🥺❤️";
  }

  if (type === "tired") {
    message =
      "Rest. You don't always have to be productive. Sometimes taking a break is exactly what you need. 😴🌙";
  }

  if (type === "stressed") {
    message =
      "Take a deep breath. One problem at a time. You don't have to solve everything today. You got this. 🌷";
  }

  let box = document.getElementById("moodMessage");

  box.innerText = message;

  box.style.display = "block";
}

function showSurprise() {
  let surprise = document.getElementById("surprise");

  surprise.classList.remove("hidden-surprise");

  surprise.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  createHearts();
}

function createHearts() {
  for (let i = 0; i < 15; i++) {
    let heart = document.createElement("div");

    heart.innerText = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.bottom = "-30px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    heart.style.pointerEvents = "none";

    heart.style.animation = "float 5s linear forwards";

    document.body.appendChild(heart);

    setTimeout(function () {
      heart.remove();
    }, 5000);
  }
}
