let inc = document.querySelector("#inc-btn");
let dec = document.querySelector("#dec-btn");
let rest = document.querySelector("#reset-btn");
let count = document.querySelector("#count-val");
let c = 0;
inc.addEventListener("click", function () {
  c++;
  count.textContent = c;
  if (c > 0) {
    count.style.color = "green";
  }
});
dec.addEventListener("click", function () {
  c--;
  count.textContent = c;
  if (c < 0) {
    count.style.color = "red";
  }
});
rest.addEventListener("click", function () {
  c = 0;
  count.textContent = c;
  count.style.color = "black";
});
