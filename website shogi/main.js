//shogi quiz
document.getElementById("btn").addEventListener("click", Check);

function Check() {
  let text = document.getElementById("Q").value;

  let answer = document.getElementById("output");

  if (text === "capture the opponents king") {
    answer.innerHTML = "Correct !";
  } else {
    answer.innerHTML = "Try again";
  }
}
document.getElementById("BTN").addEventListener("click", CHeck);

function CHeck() {
  let TEXT = document.getElementById("R").value;

  let answer = document.getElementById("OUTPUT");

  if (TEXT === "Japan") {
    answer.innerHTML = "Correct !";
  } else {
    answer.innerHTML = "Try again";
  }
}
document.getElementById("BTn").addEventListener("click", CHEck);

function CHEck() {
  let TExt = document.getElementById("S").value;

  let answer = document.getElementById("OUTput");

  if (TExt === "Two") {
    answer.innerHTML = "Correct !";
  } else {
    answer.innerHTML = "Try again";
  }
}
