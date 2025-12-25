/* ===== PASSWORD TERMINAL ===== */
const terminalText = `
Sie versuchen in einen passwortgeschützten Bereich einzudringen.

Haben Sie Ihre Maus bereits nach den Zugangsdaten gefragt?
Falls nein, machen Sie das umgehend.

Geben Sie anschließend das Passwort ein:
`;

let index = 0;
const terminalEl = document.getElementById("terminal-text");
const inputEl = document.getElementById("password-input");

function typeTerminal() {
  if (index < terminalText.length) {
    terminalEl.textContent += terminalText[index++];
    setTimeout(typeTerminal, 35);
  } else {
    inputEl.focus();
  }
}
typeTerminal();

function checkPassword(e) {
  if (e.key === "Enter") {
    if (inputEl.value === "RAUFASERTAPETE") {
      showScreen("title");
    } else {
      document.getElementById("error").innerText =
        "Zugriff verweigert. Bitte kontaktieren Sie Ihre Maus.";
      inputEl.value = "";
    }
  }
}

/* ===== QUIZ LOGIK (wie zuvor) ===== */
let currentQuiz = [];
let currentIndex = 0;
let currentLevel = "";

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
    { q: "Wie groß bin ich?", a: ["1,82", "1,79", "1,84"], c: 2 },
    { q: "Wie viele Sticker hat die Sticker Queen für uns erstellt?", a: ["7", "10", "13"], c: 2 },
    { q: "Wie oft haben wir uns schon geküsst?", a: ["5.000", "14.400", "620.000"], c: 1 }
  ]
};

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  if (id === "love") startTypewriter();
}

/* (Quiz-, Level- & Maus-Finale-Code bleibt unverändert – exakt wie zuvor) */
