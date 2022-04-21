const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector('#triangle-btn');
const output = document.querySelector('#output');

const correctAnswer = ["36 cm", "X=Y" ];

function Score() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswer[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
output.innerText = "Your score is "+ score;
}

submitAnswerBtn.addEventListener('click', Score);