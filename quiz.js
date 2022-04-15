const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answers-btn");
const outputEl = document.querySelector(".output");

const correctAnswers = [
    "36", "x greater than Y"
];

function calculateScore() {
  const formResults = new FormData(quizform);
  let score = 0,
    index = 0;
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  // console.log("The score is "+score);
  outputEl.innerText = "The score is " + score;
}

submitBtn.addEventListener("click", calculateScore);




/**const quizForm = document.querySelectorAll('.quiz-Form');
const submitBtn = document.querySelector('#submit-answers-btn');
const output = document.querySelector('#output');

const correctAnswers = ["36", "x greater than Y"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
output.innerText = "Your score is" + score;
}

submitBtn.addEventListener("click",calculateScore);
