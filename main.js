const sides = document.querySelectorAll('.side-input');
const hypoBtn = document.querySelector('#hypo-btn');
const output = document.querySelector('#output');
function sumOfSquares(a,b) {
    const sum = a*a + b*b;
    return sum;
}

function calculateHypo() {
    const sum = sumOfSquares(Number(sides[0].value),
    Number(sides[1].value));
    const lenghtOfHypo = Math.sqrt(sum);
    output.innerText = "The lenght of Hypotenuse is " + lenghtOfHypo;
}

hypoBtn.addEventListener("click",calculateHypo)