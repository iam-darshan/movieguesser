import movies from "https://cdn.jsdelivr.net/gh/iam-darshan/movieguesser@main/movie.js";

const randomIndex = Math.floor(Math.random() * movies.length);

let selectedMovie = movies[randomIndex];
console.log(selectedMovie.hints[0]);
let hintbox = document.querySelector(".hint");
let finalAns = document.querySelector("#finalAns");
finalAns.innerHTML = selectedMovie.title;

let resultBox = document.querySelector(".resultBox");
resultBox.setAttribute("hidden", "true");
let filmPoster = document.querySelector("#filmPoster");

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

let movieQueue = shuffleArray([...movies]);
let chance = 0;
let life = 5;
let level = 0;
let score = 0;
let scoreBoard = document.querySelector("#scoreBoard");

const apiKey = "7efeace0";

// Preload the poster using IMDb ID
const preloadPoster = async () => {
  const url = `https://www.omdbapi.com/?i=${selectedMovie.imdb}&apikey=${apiKey}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.Response === "True" && data.Poster) {
      filmPoster.src = data.Poster;
    } else {
      console.warn("Poster not found:", selectedMovie.title);
    }
  } catch (err) {
    console.error("Error fetching poster:", err);
  }
};

const firstHint = () => {
  let hint = document.createElement("p");
  hint.textContent = selectedMovie.hints[0];
  hintbox.appendChild(hint);
};

const nextHint = () => {
  let hint = document.createElement("p");
  hint.textContent = selectedMovie.hints[chance];
  hintbox.appendChild(hint);
};

function nextClue() {
  chance++;
  nextHint();
  let textbox = document.querySelector("#textbox").value;
  textbox = textbox.replace(/\s+/g, "").toLowerCase();
  let nameMovie = selectedMovie.title.replace(/\s+/g, "").toLowerCase();
  console.log(textbox);
  console.log(nameMovie);
  if (levenshtein(textbox, nameMovie) <= 2) {
    document.querySelector("#finalResult").innerHTML = "Correct Guess";
    document.querySelector("#result").textContent = "Correct Guess";
    resultBox.removeAttribute("hidden");
    document.querySelector("#textbox").value = "";
    score++;
  } else {
    document.querySelector("#textbox").value = "";
    document.querySelector("#result").textContent = "Incorrect Guess";
  }
  if (chance == 5) {
    document.querySelector("#finalResult").innerHTML = "You Lost";
    resultBox.removeAttribute("hidden");
  }
  let guess = document.querySelector("#life");
  guess.innerHTML = 5 - chance + " guess left";
}

const changeBtn = () => {
  let textbox = document.querySelector("#textbox");
  let guessBtn = document.querySelector("#guessBtn");

  if (textbox.value == "") {
    guessBtn.innerHTML = "Next Clue";
  } else {
    guessBtn.innerHTML = "Guess";
  }
};

const nextLevel = () => {
  selectedMovie = movieQueue[level];
  level++;
  resetGameState();
  scoreBoard.innerHTML = "Score : " + score;
};

function resetGameState() {
  chance = 0;
  let hintbox = document.querySelector(".hint");
  hintbox.innerHTML = '<h1 class="hintTitle">Hint</h1>';

  document.querySelector("#textbox").value = "";
  document.querySelector("#result").textContent = "";
  resultBox.setAttribute("hidden", "true");
  document.querySelector("#finalResult").innerHTML = "";
  document.querySelector("#life").innerHTML = "5 guess left";
  finalAns.innerHTML = selectedMovie.title;

  preloadPoster();
  firstHint();
  changeBtn();
}

window.onload = () => {
  nextLevel();
};

function levenshtein(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0)
  );
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1, // delete
        dp[i][j - 1] + 1, // insert
        dp[i - 1][j - 1] + cost // substitute
      );
    }
  }

  return dp[a.length][b.length];
}

window.changeBtn = changeBtn;
window.nextClue = nextClue;
window.nextLevel = nextLevel;
