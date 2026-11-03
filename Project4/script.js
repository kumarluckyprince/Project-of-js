let secretNumber = Math.floor(Math.random() * 10) + 1;
let num = document.querySelector("#guess-input");
let mass = document.querySelector("#message");
let btn = document.querySelector("#check-btn");
let srco = document.querySelector("#score");
let score = 10;

btn.addEventListener("click", function () {
  val = num.value;
    if (val == secretNumber) {
      mass.textContent = "Congratulations you won";
      val = 0;
    } else {
      if (val > secretNumber) {
        mass.textContent = "chose low value ";
      } else if (val < secretNumber) {
        mass.textContent = "chose high value ";
      }
      srco.textContent = score--;
      if(srco<0){
        mass.textContent = "game over Thank you ";
        btn.disabled=true;
      }
    }
    
  
});
