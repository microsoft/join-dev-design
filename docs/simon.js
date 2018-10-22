/* Logo related elements */
const winner = document.querySelector(".winner");

/* Constants */
const COLORS = ["red", "green", "blue", "yellow"];
const COLOR_SYMBOLS = {
  red: "❤️",
  green: "💚",
  yellow: "💛",
  blue: "💙"
};
const MAX_SCORE = 10;
let isFirstTime = true;

/* Game states */
let currentSequence = [];
let userClicks = [];
let currentScore = 0;
let difficulty = 1000;
const logoTiles = {};

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const timer = ms => new Promise(res => setTimeout(res, ms));

const changeTheme = () => {
  if (theme && theme.changeTo) {
    theme.changeTo("msdos");
  }
};

const generateSequence = () => {
  currentSequence.push(COLORS[getRandomInt(COLORS.length)]);

  if (currentScore > 0) {
    play();
  } else {
    console.log(
      `🕵️‍♂️🕵️‍♀️ PSSST! There is a game inside this webpage...\nClick the ${
        COLOR_SYMBOLS[currentSequence[0]]
      } tile on the Microsoft logo to play!`
    );
  }
};

const clickColor = color => {
  userClicks.push(color);

  if (checkCorrect()) {
    userClicks = [];

    if (difficulty > 100) {
      difficulty -= 100;
    }

    currentScore++;

    console.log(`Simon says..."correct!" 🎉 Your score is`, currentScore);

    if (currentScore >= MAX_SCORE) {
      winner.classList.add("show");
      changeTheme();
      return;
    }

    lightUp();
    generateSequence();
  }
};

function reset() {
  console.log(`😢 Game Over! Refresh to play again.`);
  currentSequence = [];
  userClicks = [];
  currentScore = 0;
  difficulty = 1000;
  generateSequence();
  winner.classList.remove("show");
}

function checkCorrect() {
  let matching = true;
  const lastClick = userClicks.length - 1;
  let sequence = userClicks[lastClick] === currentSequence[lastClick];

  if (!sequence) {
    reset();
  }

  for (let i = 0; i < currentSequence.length; i++) {
    if (userClicks[i] !== currentSequence[i]) {
      matching = false;
      break;
    }
  }

  return matching;
}

async function play() {
  await timer(2000);

  for (let i = 0; i < currentSequence.length; i++) {
    const sequence = currentSequence[i];

    logoTiles[sequence].classList.add("large");
    await timer(difficulty);
    logoTiles[sequence].classList.remove("large");
    await timer(difficulty / 2);
  }
}

async function lightUp() {
  const t = 150;

  logoTiles.red.classList.add("large");
  await timer(t);
  logoTiles.red.classList.remove("large");
  logoTiles.green.classList.add("large");
  await timer(t);
  logoTiles.green.classList.remove("large");
  logoTiles.yellow.classList.add("large");
  await timer(t);
  logoTiles.yellow.classList.remove("large");
  logoTiles.blue.classList.add("large");
  await timer(t);
  logoTiles.blue.classList.remove("large");
  logoTiles.red.classList.add("large");
  await timer(t);
  logoTiles.red.classList.remove("large");
}

if (isFirstTime) {
  generateSequence();

  const $logoTiles = document.querySelectorAll(".logo-tile");

  $logoTiles.forEach(tile => {
    const { color } = tile.dataset;
    logoTiles[color] = tile;

    tile.addEventListener("click", () => clickColor(color));
  });
}

isFirstTime = false;
