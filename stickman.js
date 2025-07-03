const ug = [
  "rocket fruit",
  "spin fruit",
  "bomb fruit",
  "spring fruit",
  "smoke fruit",
  "chop fruit",
  "spike fruit",
  "flame fruit",
  "falcon fruit",
  "ice fruit",
  "sand fruit",
  "dark fruit",
  "diamond fruit",
  "light fruit",
  "rubber fruit",
  "barrier fruit",
  "ghost fruit",
  "magma fruit",
  "quake fruit",
  "buddha fruit",
  "love fruit",
  "spider fruit",
  "sound fruit",
  "pheonex fruit",
  "portal fruit",
  "rumble fruit",
  "pain fruit",
  "blizzard fruit",
  "gravity fruit",
  "mammoth fruit",
  "trex fruit",
  "dough fruit",
  "shadow fruit",
  "venom fruit",
  "control fruit",
  "spirit fruit",
  "dragon fruit",
  "leopard fruit",
  "kitsune fruit",
];
let fails = 0;

const wonshow = document.getElementById("won");
const lossharulah = document.getElementById("loss");

const failscoreDiv = document.getElementById("failscore");
const randomIndex = Math.floor(Math.random() * ug.length);
const currentword = ug[randomIndex];
const answer = document.getElementById("answer");
answer.innerText = currentword;
const taasan = [];
let image = document.getElementById("image");
const wordDiv = document.getElementById("word");
const keyboardDiv = document.getElementById("keyboard");

const usegnud = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function lossalert() {
  if (fails >= 8) {
    lossharulah.style.visibility = "visible";
  }
}

function winalert() {
  for (let i = 0; i < currentword.length; i++) {
    const char = currentword[i].toUpperCase();

    if (char === " ") {
      continue;
    }

    if (!taasan.includes(char)) {
      return;
    }
  }

  wonshow.style.visibility = "visible";
}

document.getElementById("restartButton").addEventListener("click", function () {
  window.location.reload();
});

document.getElementById("Restartgame").addEventListener("click", function () {
  window.location.reload();
});

function updateWordDisplay() {
  let ug = "";

  for (let i = 0; i < currentword.length; i++) {
    let useg = currentword[i].toUpperCase();

    if (taasan.includes(useg)) {
      ug += useg + " ";
    } else if (useg === " ") {
      ug += " ";
    } else {
      ug += "_";
    }
  }

  wordDiv.innerText = ug.trim();
}

function createKeyboard() {
  for (let i = 0; i < usegnud.length; i++) {
    let btn = document.createElement("button");
    let useg = usegnud[i];
    btn.innerText = useg;

    btn.onclick = function () {
      btn.disabled = true;
      if (currentword.toUpperCase().includes(useg)) {
        taasan.push(useg);
      } else {
        fails++;
        failscoreDiv.innerText = fails;
        image.style.backgroundImage = `url(./photos/${fails}.jpg)`;
      }
      updateWordDisplay();
      lossalert();
      winalert();
    };

    keyboardDiv.appendChild(btn);
  }
}

updateWordDisplay();
createKeyboard();
