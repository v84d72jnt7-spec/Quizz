let currentQuiz = [];
let currentIndex = 0;

const quizzes = {
  easy: [
    {
      q: "Lieblingsfarbe der Maus",
      a: ["Jungblau", "Mature Maron", "Altrosa"],
      c: 2
    },
    {
      q: "First Kiss Spot",
      a: ["Hinter der Bräurosl", "Auf der Bräurosl", "In der Bräurosl"],
      c: 0
    },
    {
      q: "Was beeindruckt Mr Masu?",
      a: ["Springreiten", "Liebe für Rotwein", "langsam schlendernde Menschen"],
      c: 1
    }
  ],

  medium: [
    {
      q: "Wie heißt die Station an der wir zum ersten Mal zusammen U-Bahn gefahren sind?",
      a: ["Schillerstraße", "Goetheplatz", "Mozartsplatz"],
      c: 1
    },
    {
      q: "Woher wusste ich dass du ein zweites Date willst?",
      a: [
        "Du hast es mir direkt gesagt",
        "Subtle Hints",
        "Du hast den klassischen I-forgot-my-Shirt Trick ausgepackt"
      ],
      c: 2
    },
    {
      q: "Welchen Film haben wir als erstes zusammen gesehen?",
      a: ["Midnight in Paris", "Fight Club", "Kill Bill"],
      c: 0
    }
  ],

  hard: [
    {
      q: "Was war meine erste Nachricht?",
      a: ["Servus!", "Na du", "Ja Servas"],
      c: 2
    },
    {
      q: "Wie groß bin ich?",
      a: ["1,82", "1,79", "1,84"],
      c: 2
    },
    {
      q: "Wie viele Sticker hat die Sticker Queen für uns erstellt?",
      a: ["7", "10", "13"],
      c: 2
    },
    {
      q: "Wie oft haben wir uns schon geküsst? (Estimate)",
      a: ["5.000", "14.400", "620.000"],
      c: 1
    }
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
    const btn = document.createElement('button');
    btn.innerText = text;
    btn.className = "answer";
    btn.onclick = () => selectAnswer(i);
    answers.appendChild(btn);
  });
}

function selectAnswer(i) {
  const q = currentQuiz[currentIndex];
  const buttons = document.querySelectorAll('.answer');

  buttons[q.c].classList.add('correct');

  document.getElementById('feedback').innerText =
    i === q.c ? "Gut gemacht 💕" : "blame it on memory loss";

  document.getElementById('nextBtn').style.display = "inline-block";
}

function nextQuestion() {
  currentIndex++;
  document.getElementById('nextBtn').style.display = "none";

  if (currentIndex >= currentQuiz.length) {
    showScreen('result');
  } else {
    loadQuestion();
  }
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
    navigator.vibrate([200, 150, 200]); // zweimal kurzes Vibrieren ❤️
  }
}
