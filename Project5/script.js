const choices = ["rock", "paper", "scissors"];

btn_1 = document.querySelector("#rock");
btn_2 = document.querySelector("#paper");
btn_3 = document.querySelector("#scissors");
your_score = document.querySelector("#user-score");
com_score = document.querySelector("#comp-score");
your_chose = document.querySelector("#user-choice");
com_chose = document.querySelector("#comp-choice");

let u_score = 0;
let c_score = 0;

result = document.querySelector("#result-message");

btn_1.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * 3);
  let compChoice = choices[randomIndex];

  if (compChoice == "rock") {
    result.textContent = "Draw";
  } 
  
  else {
    if (compChoice == "scissors") {
      result.textContent = "You win";
      u_score++;
      your_score.textContent = u_score;
    } 
    else if (compChoice == "paper") {
      result.textContent = "Computer win";
      c_score++;
      com_score.textContent = c_score;
    }
  }
  your_chose.textContent="rock";
  com_chose.textContent=compChoice
});

btn_2.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * 3);
  let compChoice = choices[randomIndex];

  if (compChoice == "paper") {
    result.textContent = "Draw";
  } 
  
  else {
    if (compChoice == "rock") {
      result.textContent = "You win";
      u_score++;
      your_score.textContent = u_score;
    } 
    else if (compChoice == "scissors") {
      result.textContent = "Computer win";
      c_score++;
      com_score.textContent = c_score;
    }
  }
  your_chose.textContent="paper";
  com_chose.textContent=compChoice
});

btn_3.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * 3);
  let compChoice = choices[randomIndex];

  if (compChoice == "scissors") {
    result.textContent = "Draw";
  } 
  
  else {
    if (compChoice == "paper") {
      result.textContent = "You win";
      u_score++;
      your_score.textContent = u_score;
    } 
    else if (compChoice == "rock") {
      result.textContent = "Computer win";
      c_score++;
      com_score.textContent = c_score;
    }
  }
  your_chose.textContent="scissors";
  com_chose.textContent=compChoice
});
