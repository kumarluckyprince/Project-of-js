# 🪨📄✂️ Rock, Paper, Scissors Web Game

A clean, interactive, and responsive **Rock, Paper, Scissors** game built using vanilla **HTML5**, **CSS3**, and modern **JavaScript (ES6+)**. The game features real-time score tracking, dynamic DOM updates, randomized computer opponent choices, and modular JavaScript game logic built on the **DRY (Don't Repeat Yourself)** principle.

---

## 🌟 Key Features

- **Interactive Gameplay**: Play against a computer opponent with instant visual feedback.
- **Real-time Scoreboard**: Tracks user score vs. computer score dynamically across rounds.
- **Randomized AI Choice**: Uses `Math.random()` with array indexing to deliver unpredictable computer selections.
- **Modern UI**: Styled with a sleek dark theme (`#1e1e2f`), Flexbox alignment, and smooth button hover states.
- **Clean Architecture**: Follows full-stack clean code standards with a modular `playGame()` engine and event handler binding.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic markup, DOM structure, and accessibility attributes.
- **CSS3**: Flexbox layout, dark mode aesthetic, hover transitions, and responsive styling.
- **JavaScript (ES6+)**: Event listeners, array manipulation, conditional game logic, DOM manipulation, and arrow functions.

---

## 📁 Project Structure

```text
rock-paper-scissors/
│
├── index.html       # DOM elements, scoreboard layout, and action buttons
├── style.css        # Dark-mode styling, Flexbox positioning, and UI animations
└── script.js        # Core game engine, state management, and event listeners
```

---

## 🎮 Game Rules & Logic

The game evaluates round outcomes based on standard Rock, Paper, Scissors rules:

- **🪨 Rock vs ✂️ Scissors** ➔ Rock wins (Rock smashes Scissors)
- **📄 Paper vs 🪨 Rock** ➔ Paper wins (Paper covers Rock)
- **✂️ Scissors vs 📄 Paper** ➔ Scissors wins (Scissors cuts Paper)
- **Same Choices** ➔ Draw (No score changes)

---

## 🧠 JavaScript Architecture Breakdown

The JavaScript engine is designed for scalability and readability:

### 1. Computer Choice Generator
Uses `Math.floor(Math.random() * 3)` to select a random index (`0`, `1`, or `2`) from the options array `["rock", "paper", "scissors"]`:
```javascript
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}
```

### 2. Centralized Game Engine (`playGame`)
Instead of duplicating logic for each button, a single `playGame(userChoice)` function handles:
- Fetching computer choices
- Updating user choice and computer choice labels on screen
- Evaluating outcomes using compound logical conditions (`||`)
- Incrementing user or computer scores
- Updating status text and visual state

```javascript
function playGame(userChoice) {
  const compChoice = getComputerChoice();

  userChoiceEl.textContent = userChoice.toUpperCase();
  compChoiceEl.textContent = compChoice.toUpperCase();

  if (userChoice === compChoice) {
    resultEl.textContent = "It's a Draw! 🤝";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    userScore++;
    userScoreEl.textContent = userScore;
    resultEl.textContent = "You Win! 🎉";
  } else {
    compScore++;
    compScoreEl.textContent = compScore;
    resultEl.textContent = "Computer Wins! 💥";
  }
}
```

### 3. Event Listener Binding with Arrow Functions
To prevent immediate function execution on page load, arrow function wrappers `() => playGame(...)` defer execution until the button is clicked:
```javascript
document.querySelector("#rock").addEventListener("click", () => playGame("rock"));
document.querySelector("#paper").addEventListener("click", () => playGame("paper"));
document.querySelector("#scissors").addEventListener("click", () => playGame("scissors"));
```

---

## 🚀 How to Run Locally

1. **Clone or Download** the repository files (`index.html`, `style.css`, `script.js`) into a single folder.
2. Ensure all three files are saved in the same directory.
3. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
4. Click on **🪨 Rock**, **📄 Paper**, or **✂️ Scissors** to start playing!

---

## 🔮 Future Enhancements

- **First-to-5 Target Mode**: First player to reach 5 points wins the overall match.
- **Reset / Play Again Button**: Clear current scores and restart game state without reloading the page.
- **Sound Effects & Animations**: Add audio feedback on win/loss and CSS shake animations for choices.

---

## 👨‍💻 Author

Developed as part of an interactive JavaScript logic-building series.
