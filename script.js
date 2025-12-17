let currentQuiz = [];
let currentIndex = 0;

const quizzes = {
  easy: [
    { q: "Lieblingsfarbe der Maus", a: ["Jungblau", "Mature Maron", "Altrosa"], c: 2 },
    { q: "First Kiss Spot", a: ["Hinter der Bräurosl", "Auf der Bräurosl", "In der Bräurosl"], c: 0 },
    { q: "Was beeindruckt Mr Masu?", a: ["Springreiten", "Liebe für Rotwein", "langsam schlendernde Menschen"], c: 1 }
  ],
  medium: [
    { q: "Wie heißt die Station an der wir zum ersten Mal zusammen U-Bahn gefahren sind?", a: ["Schillerstraße", "Goetheplatz", "Mozartsplatz"], c: 1 },
    { q: "Woher wusste ich dass du ein zweites Date willst?", a: ["Du hast es mir direkt gesagt", "Subtle Hints", "Du hast den klassischen I-forgot-my-Shirt Trick ausgepackt"], c: 2 },
    { q: "Welchen Film haben wir als erstes zusammen gesehen?", a: ["Midnight in Paris", "Fight Club", "Kill Bill"], c: 0 }
  ],
  hard: [
    { q: "Was war meine erste Nachricht?", a: ["Servus!", "Na du", "Ja Servas"], c: 2 },
    { q: "Welche ist die erste mit Stern markierte Nachricht bei mir?", a: ["Mir tut alles weh, deswegen tut mir alles gut", "Wir können auch zusammen fegen", "Mr. Masu Fuckswell is a 30-4 year old professional barista..."], c: 0 },
    { q: "Ist es möglich dass ich dich noch toller finden kann?", a: ["Nein", "Non", "No"], c: 2 }
  ]
};

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === "love") startTypewriter();
}

function startQuiz(level) {
  currentQuiz = quizzes[level];
  currentIndex = 0;
  showScreen('quiz');
  loadQuestion();
}

function loadQuestion() {
  document.getElementById('feedback').innerText = "";
  document.getElementById('nextBtn').style.display = "none";

  const q = currentQuiz[currentIndex];
  document.getElementById('question').innerText = q.q;
  const answers = document.getElementById('answers');
  answers.innerHTML = "";

  q.a.forEach((text, i) => {
    const b = document.createElement('button');
    b.innerText = text;
    b.className = "answer";
    b.onclick = () => selectAnswer(i);
    answers.appendChild(b);
  });
}

function selectAnswer(i) {
  const q = currentQuiz[currentIndex];
  document.querySelectorAll('.answer')[q.c].classList.add('correct');
  document.getElementById('feedback').innerText =
    i === q.c ? "Gut gemacht 💕" : "blame it on memory loss";
  document.getElementById('nextBtn').style.display = "inline-block";
}

function nextQuestion() {
  currentIndex++;
  document.getElementById('nextBtn').style.display = "none";
  currentIndex >= currentQuiz.length ? showScreen('result') : loadQuestion();
}

/* ❤️ Schreibmaschine + Herz-Explosion + Vibration */
const loveText = "Ich liebe dich Maus <3";
let typeIndex = 0;

function startTypewriter() {
  const el = document.getElementById("typewriter");
  el.innerText = "";
  typeIndex = 0;

  const interval = setInterval(() => {
    el.innerText += loveText[typeIndex++];
    if (typeIndex >= loveText.length) {
      clearInterval(interval);
      explodeHearts();
      vibrateLove();
    }
  }, 120);
}

function explodeHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.setProperty("--x", `${(Math.random() - 0.5) * 400}px`);
    heart.style.setProperty("--y", `${(Math.random() - 0.5) * 400}px`);
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}

function vibrateLove() {
  if ("vibrate" in navigator) {
    navigator.vibrate([200, 150, 200]); // ❤️ bzz — pause — bzz
  }
}
